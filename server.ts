import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

/**
 * Generic Proxy for RSS Feed
 * Mimics the behavior of api.allorigins.win by wrapping the response
 * in a JSON object with a 'contents' property, which the frontend expects.
 */
app.get('/proxy', async (req, res) => {
    const url = req.query.url as string;
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const data = await response.text();
        res.json({ contents: data });
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Could not fetch data from the provided URL.' });
    }
});

/**
 * Gemini API Setup & Proxy
 * This section securely handles calls to the Google Gemini API.
 * The AI client is initialized lazily and within a try-catch block to prevent
 * the server from crashing if the API_KEY is missing or invalid.
 */
let ai: GoogleGenAI | null = null;
const API_KEY = process.env.API_KEY;

if (API_KEY) {
    try {
        ai = new GoogleGenAI({ apiKey: API_KEY });
        console.log("✅ Gemini AI service initialized successfully.");
    } catch (error) {
        console.error("🔴 FAILED TO INITIALIZE GEMINI AI SERVICE:", error);
        ai = null; // Ensure ai is null if initialization fails
    }
} else {
    console.warn("🟡 WARNING: API_KEY environment variable is not set. AI features will be disabled.");
}


const handleApiError = (res: express.Response, error: any, context: string) => {
    console.error(`Error in AI service (${context}):`, error);
    res.status(500).json({ error: "Sorry, I'm having trouble connecting to the AI service right now." });
};

const aiServiceGuard = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!ai) {
        return res.status(500).json({ error: "AI service is not configured on the server. Please check the server logs." });
    }
    next();
};

app.post('/api/chat', aiServiceGuard, async (req, res) => {
    try {
        const { history, newMessage, systemInstruction } = req.body;
        const response = await ai!.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [...history, { role: 'user', parts: [{ text: newMessage }] }],
            config: { systemInstruction },
        });
        res.json({ text: response.text });
    } catch (error) {
        handleApiError(res, error, 'chat');
    }
});

app.post('/api/agri-info', aiServiceGuard, async (req, res) => {
    try {
        const { query, lang } = req.body;
        const systemInstruction = `You are an agricultural expert providing information in the language specified by the language code: ${lang}.`;
        const prompt = `Provide a detailed, well-structured summary about "${query}" from an agricultural perspective. Include its origin, key characteristics, common uses, and interesting facts. Format the output in simple markdown with headings for each section. If the query is not related to agriculture, politely decline to answer.`;
        const response = await ai!.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: { systemInstruction },
        });
        res.json({ text: response.text });
    } catch (error) {
        handleApiError(res, error, 'agri-info');
    }
});

app.post('/api/generate-image', aiServiceGuard, async (req, res) => {
    try {
        const { query, lang } = req.body;
        const prompt = `A vibrant, high-quality photo of ${query} in a natural agricultural setting. Language for context: ${lang}.`;
        const response = await ai!.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt,
            config: { numberOfImages: 1, outputMimeType: 'image/jpeg', aspectRatio: '16:9' },
        });

        const base64ImageBytes = response.generatedImages?.[0]?.image?.imageBytes;

        if (base64ImageBytes) {
            res.json({ imageUrl: `data:image/jpeg;base64,${base64ImageBytes}` });
        } else {
            console.error('Không thể lấy dữ liệu ảnh từ phản hồi API. Response was malformed or empty.');
            res.json({ imageUrl: null });
        }
    } catch (error) {
        handleApiError(res, error, 'generate-image');
    }
});

app.post('/api/plant-fact', aiServiceGuard, async (req, res) => {
    try {
        const { plantName, systemInstruction } = req.body;
        const response = await ai!.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Tell me one short, interesting, fun fact about the plant: ${plantName}.`,
            config: { systemInstruction },
        });
        res.json({ text: response.text });
    } catch (error) {
        handleApiError(res, error, 'plant-fact');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Proxy server is running at http://localhost:${PORT}`);
});