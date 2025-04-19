import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGitAlt,
  FaPenNib,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiOpencv } from "react-icons/si";

const About = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Tentang Saya 🌸",
      education:
        "📖 Saya Sintia Wati, mahasiswi Informatika dengan dua dunia favorit: menulis novel dan membangun program dengan Python. Imajinasi dan logika adalah bagian dari hari-hari saya.",
      skillsTitle: "Kemampuan yang Saya Miliki",
      toolsTitle: "Tools & Framework yang Saya Gunakan",
    },
    en: {
      title: "About Me 🌸",
      education:
        "📖 I’m Sintia Wati, an Informatics student with two favorite worlds: writing novels and building programs with Python. Imagination and logic walk side by side in my daily life.",
      skillsTitle: "My Core Skills",
      toolsTitle: "Tools & Frameworks I Use",
    },
  };

  const lang = content[language];

  const skills = [
    { icon: <FaPenNib className="text-pink-400" />, name: "Creative Writing" },
    { icon: <FaPython className="text-pink-400" />, name: "Python" },
    { icon: <SiOpencv className="text-pink-300" />, name: "OpenCV (Manual)" },
    { icon: <FaHtml5 className="text-pink-400" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-pink-300" />, name: "CSS3" },
    { icon: <SiJavascript className="text-pink-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-pink-300" />, name: "React.js" },
    { icon: <SiTailwindcss className="text-pink-400" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt className="text-pink-300" />, name: "Git" },
  ];

  return (
    <section className="min-h-screen bg-pink-50 dark:bg-gray-900 px-6 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-14 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-pink-100 tracking-wide">
          {lang.title}
        </h1>

        <p className="text-lg text-gray-600 dark:text-pink-200 max-w-3xl mx-auto italic leading-relaxed">
          {lang.education}
        </p>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-pink-100 mb-6">
            {lang.skillsTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-28 h-28 bg-white dark:bg-gray-800 shadow-sm rounded-2xl p-4 hover:scale-105 transition-transform"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-700 dark:text-pink-100 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;