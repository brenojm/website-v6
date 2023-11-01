import { SelectChangeEvent } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>,
    handleChange: (event: SelectChangeEvent) => void
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
    children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('eng'); // 'eng' é o padrão, mas pode ser alterado
    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
      };
    return (
        <LanguageContext.Provider value={{ language, setLanguage, handleChange }}>
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
