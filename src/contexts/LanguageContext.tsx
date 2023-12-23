import React, {createContext, useContext, useState} from 'react';
import {Language} from '../localization/Language';

export const LanguageContext = createContext({
    language: Language.no, // Initialize with a default value from the enum
    setLanguage: (language: Language) => {}
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    // Attempt to get the preferred language from local storage
    const storedLanguage = localStorage.getItem('preferredLanguage');

    // Check if the stored language is part of the Language enum
    const isStoredLanguageValid = Object.values(Language).includes(storedLanguage as Language);

    // Use the stored language if it's valid, otherwise default to Language.no
    const [language, setLanguage] = useState<Language>(
        isStoredLanguageValid ? (storedLanguage as Language) : Language.no
    );

    // Update local storage whenever the language is set
    const handleSetLanguage = (language: Language) => {
        setLanguage(language);
        localStorage.setItem('preferredLanguage', language);
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage: handleSetLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};
