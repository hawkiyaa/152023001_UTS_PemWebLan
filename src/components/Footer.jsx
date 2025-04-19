import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      copyright: "© 2025 152023001 - Sintia Wati",
    },
    en: {
      copyright: "© 2025 152023001 - Sintia Wati",
    },
  };

  const lang = content[language];

  return (
    <footer className="bg-[#F9F9F9] dark:bg-[#1E1E2F] text-[#6B6B6B] dark:text-[#D1D1D1] py-6 mt-8">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-4">
        <p className="text-sm font-light">{lang.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;