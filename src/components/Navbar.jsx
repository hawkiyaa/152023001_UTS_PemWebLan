import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = ({ toggleTheme, darkMode }) => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const labels = {
    home: language === "id" ? "Beranda" : "Home",
    about: language === "id" ? "Tentang Saya" : "About",
    projects: language === "id" ? "Proyek" : "Projects",
    contact: language === "id" ? "Kontak" : "Contact",
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-pink-500 text-2xl font-bold tracking-wide">
            ✒️ Sintia Wati
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {["/", "/about", "/projects", "/contact"].map((path, index) => {
              const keys = ["home", "about", "projects", "contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-500 
                    hover:after:w-full after:transition-all after:duration-300 hover:text-gray-600 dark:hover:text-gray-200 font-medium transition
                    ${isActive ? "text-pink-500 after:w-full" : "text-gray-500 dark:text-gray-300"}`
                  }
                >
                  {labels[keys[index]]}
                </NavLink>
              );
            })}

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm border border-pink-300 text-pink-500 px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-700 dark:hover:text-white transition"
            >
              {language === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 dark:text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 space-y-2 animate-fadeIn">
          {["/", "/about", "/projects", "/contact"].map((path, index) => {
            const keys = ["home", "about", "projects", "contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-200 font-medium hover:bg-pink-50 dark:hover:bg-pink-700 rounded-lg px-2 py-1"
              >
                {labels[keys[index]]}
              </NavLink>
            );
          })}

          <div className="flex justify-between mt-4">
            <button
              onClick={toggleLanguage}
              className="text-sm border border-pink-300 text-pink-500 px-3 py-1 rounded-full hover:bg-pink-50 dark:hover:bg-pink-700 dark:hover:text-white transition"
            >
              {language === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;