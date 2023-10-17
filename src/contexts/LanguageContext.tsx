import React, {createContext, useState, useEffect, FC, useMemo} from 'react';
import {Language} from '../localization/Languages';

type LanguageContextType = {
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

const LanguageProvider: FC<LanguageProviderProps> = ({children}) => {
    const browserLanguage: Language = (navigator.language.split(/[-_]/)[0] as Language) || Language.en;
    const storedLanguage: Language = (localStorage.getItem('app-language') as Language) || browserLanguage;

    const [language, setLanguage] = useState<Language>(storedLanguage);

    useEffect(() => {
        localStorage.setItem('app-language', language);
    }, [language]);

    // Memoize the context value
    const contextValue = useMemo(() => ({language, setLanguage}), [language, setLanguage]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};

export {LanguageProvider, LanguageContext};
