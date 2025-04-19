import React from "react";
import { useLanguage } from "../context/LanguageContext";
import profileImg from "../assets/profile.jpg"; // Gunakan foto yang jelas dan estetis

const Home = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Halo, saya Sintia Wati 🌷",
      desc: "Saya senang menulis kisah dan menjelajahi dunia kode. Bagi saya, kata dan logika adalah dua sisi dari keindahan yang sama.",
    },
    en: {
      title: "Hi, I'm Sintia Wati 🌷",
      desc: "I love writing stories and exploring the world of code. For me, words and logic are two sides of the same beauty.",
    },
  };

  const lang = content[language];

  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50 dark:bg-gray-900 px-6 py-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-700 dark:text-pink-100 leading-snug tracking-wide">
            {lang.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {lang.desc}
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profileImg}
            alt="Sintia Wati"
            className="w-80 h-80 object-cover rounded-3xl border-4 border-pink-200 dark:border-pink-300/40 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;