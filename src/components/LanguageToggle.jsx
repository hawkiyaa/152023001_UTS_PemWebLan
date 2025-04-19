import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 border rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {language === 'id' ? 'EN' : 'ID'}
    </button>
  );
};
export default LanguageToggle;
