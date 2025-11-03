import React from 'react';

// Educational App Types
export type Page = 'home' | 'bai1' | 'bai2' | 'bai3' | 'quiztk' | 'flash' | 'danhgia' | 'game' | 'thegioi' | 'admin';

export interface Lesson {
  id: string;
  titleKey: string;
  metaKey: string;
  image: string;
  content: React.ReactElement;
}

export interface QuizQuestion {
  qKey: string;
  oKey: string;
  a: number;
}

export interface QuizData {
  id: string;
  titleKey: string;
  questions: QuizQuestion[];
  passMark: number;
}

export interface Flashcard {
    q: string;
    a: string;
}

export interface Review {
    username?: string;
    rating: number;
    text: string;
    date: string;
}

export interface NewsArticle {
    link: string;
    title: string;
    summary: string;
    pubDate: string;
    imageUrl?: string;
}

export interface AppSettings {
    maintenance: boolean;
}

// Fix: Add missing game types that were causing an import error.
// Game Types for Harvest Game
export interface ItemTemplate {
    asset: string;
    points: number;
    width: number;
    height: number;
    spawnChance: number;
}

export interface ItemTemplates {
    good?: ItemTemplate[];
    bad?: ItemTemplate[];
    powerup?: ItemTemplate[];
}

export interface PlayerConfig {
    asset: string;
    width: number;
    height: number;
}

export interface Goal {
    type: 'score' | 'survival';
    target: number;
}

export interface LevelConfig {
    level: number;
    titleKey: string;
    goal: Goal;
    player: PlayerConfig;
    itemTemplates: ItemTemplates;
    spawnInterval: number;
    minSpeed: number;
    maxSpeed: number;
    isDrivingLevel?: boolean;
}