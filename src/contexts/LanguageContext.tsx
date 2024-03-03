import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  updateLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
type LanguageProviderProps = {
    children: ReactNode;
  };
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('preferredLanguage');
    return storedLanguage || 'en'; 
  });

  const updateLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
