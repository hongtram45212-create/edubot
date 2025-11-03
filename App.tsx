import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import LanguageSelector from './components/LanguageSelector';
import MainLayout from './components/MainLayout';
import PrivacyAgreement from './components/PrivacyAgreement';
import MaintenancePage from './components/MaintenancePage'; // Import new component
import Onboarding from './components/Onboarding';
import { I18nProvider } from './hooks/useI18n';
import { AppSettings } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [hasAgreedToPrivacy, setHasAgreedToPrivacy] = useState<boolean>(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(false);
  const [appSettings, setAppSettings] = useState<AppSettings>({ maintenance: false });
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    // Load global app settings
    const storedSettings = localStorage.getItem('appSettings');
    if (storedSettings) {
      try {
        setAppSettings(JSON.parse(storedSettings));
      } catch (e) {
        console.error("Failed to parse app settings from localStorage:", e);
      }
    }
      
    // Load user-specific data
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const storedLang = localStorage.getItem(`language_${storedUser}`);
      const storedAgreement = localStorage.getItem(`privacyAgreement_${storedUser}`);
      const storedOnboarding = localStorage.getItem(`onboardingCompleted_${storedUser}`);
      setCurrentUser(storedUser);
      setLanguage(storedLang);
      setHasAgreedToPrivacy(storedAgreement === 'true');
      setHasCompletedOnboarding(storedOnboarding === 'true');
    }
    setIsReady(true);
  }, []);

  const handleLogin = (username: string) => {
    localStorage.setItem('currentUser', username);
    setCurrentUser(username);
    const storedLang = localStorage.getItem(`language_${username}`);
    const storedAgreement = localStorage.getItem(`privacyAgreement_${username}`);
    const storedOnboarding = localStorage.getItem(`onboardingCompleted_${username}`);
    setLanguage(storedLang);
    setHasAgreedToPrivacy(storedAgreement === 'true');
    setHasCompletedOnboarding(storedOnboarding === 'true');
  };

  const handleLanguageSelect = (lang: string) => {
    if (currentUser) {
      localStorage.setItem(`language_${currentUser}`, lang);
    }
    setLanguage(lang);
  };
  
  const handlePrivacyAgreement = () => {
    if (currentUser) {
        localStorage.setItem(`privacyAgreement_${currentUser}`, 'true');
    }
    setHasAgreedToPrivacy(true);
  };

  const handleOnboardingComplete = () => {
    if (currentUser) {
        localStorage.setItem(`onboardingCompleted_${currentUser}`, 'true');
    }
    setHasCompletedOnboarding(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setLanguage(null);
    setHasAgreedToPrivacy(false);
    setHasCompletedOnboarding(false);
  };
  
  const handleProfileUpdate = (oldUsername: string, newUsername: string) => {
      const keysToMigrate = ['lessonState', 'passState', 'flashcards', 'reviews', 'gameState', 'language', 'privacyAgreement', 'onboardingCompleted'];
      keysToMigrate.forEach(key => {
          const oldKey = `${key}_${oldUsername}`;
          const newKey = `${key}_${newUsername}`;
          const data = localStorage.getItem(oldKey);
          if (data) {
              localStorage.setItem(newKey, data);
              localStorage.removeItem(oldKey);
          }
      });
      localStorage.setItem('currentUser', newUsername);
      setCurrentUser(newUsername);
  };

  if (!isReady) {
    return <div className="w-screen h-screen bg-green-50"></div>;
  }
  
  const isAdmin = currentUser === 'admin';

  if (appSettings.maintenance && !isAdmin) {
      return (
          <I18nProvider defaultLanguage={language || 'vi'}>
              <MaintenancePage />
          </I18nProvider>
      );
  }

  if (!currentUser) {
    return <LoginPage onLoginSuccess={handleLogin} />;
  }

  if (!language) {
    return <LanguageSelector onSelect={handleLanguageSelect} />;
  }
  
  if (!hasAgreedToPrivacy) {
    return (
        <I18nProvider defaultLanguage={language}>
            <PrivacyAgreement onAgree={handlePrivacyAgreement} />
        </I18nProvider>
    );
  }

  if (!hasCompletedOnboarding) {
    return (
      <I18nProvider defaultLanguage={language}>
        <Onboarding onComplete={handleOnboardingComplete} />
      </I18nProvider>
    );
  }

  return (
    <I18nProvider defaultLanguage={language}>
      <MainLayout 
        currentUser={currentUser}
        isAdmin={isAdmin}
        onLogout={handleLogout}
        onProfileUpdate={handleProfileUpdate}
      />
    </I18nProvider>
  );
};

export default App;