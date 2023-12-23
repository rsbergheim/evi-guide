import React, { createContext, useContext, useState } from 'react';
import { Language } from '../localization/Language';

export const LanguageContext = createContext({
  language: Language.en, // Initialize with a default value from the enum
  setLanguage: (lang: Language) => {}
});

export const useLanguage = () => useContext(LanguageContext);

// Define the type for the props
interface LanguageProviderProps {
    children: React.ReactNode; // Define the children prop type
  }

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState(Language.no);

    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
};
