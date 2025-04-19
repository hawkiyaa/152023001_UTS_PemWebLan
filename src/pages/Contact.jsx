import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Github,
  User,
} from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Hubungi Saya 💌",
      subtitle: "Silakan hubungi saya melalui info berikut:",
      name: "Nama",
      email: "Email",
      phone: "No. HP",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      github: "GitHub",
    },
    en: {
      title: "Contact Me 💌",
      subtitle: "Feel free to reach out through the info below:",
      name: "Name",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      github: "GitHub",
    },
  };

  const lang = content[language];

  const contactInfo = [
    { icon: <User className="w-5 h-5 text-pink-400 dark:text-pink-200" />, label: lang.name, value: "Sintia Wati" },
    { icon: <Mail className="w-5 h-5 text-pink-400 dark:text-pink-200" />, label: lang.email, value: "sintiawtii@gmail.com", href: "mailto:sintiawtii@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-pink-400 dark:text-pink-200" />, label: lang.phone, value: "0831 2074 5696" },
    { icon: <Instagram className="w-5 h-5 text-pink-400 dark:text-pink-200" />, label: lang.instagram, value: "@sintiawtii", href: "https://instagram.com/sintiawtii_" },
    { icon: <Github className="w-5 h-5 text-pink-400 dark:text-pink-200" />, label: lang.github, value: "github.com/hawkiyaa", href: "https://github.com/hawkiyaa" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50 dark:bg-gray-900 px-6 py-24 transition-colors duration-300">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 transition-all duration-300">
        <h1 className="text-4xl font-bold text-center text-gray-700 dark:text-pink-100 mb-4">
          {lang.title}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          {lang.subtitle}
        </p>
        <ul className="space-y-6">
          {contactInfo.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-4">
              {item.icon}
              <div>
                <span className="block text-sm font-semibold text-gray-600 dark:text-gray-300">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-100 underline underline-offset-2 transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-gray-800 dark:text-gray-100">
                    {item.value}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;