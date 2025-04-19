import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');
  const toggleLanguage = () => setLanguage(lang => (lang === 'id' ? 'en' : 'id'));
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
