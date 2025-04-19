import React from "react";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "../components/ProjectCard";
import img1 from "../assets/project1.jpg";
import img5 from "../assets/project2.jpg";
import img6 from "../assets/project3.jpg";

const Projects = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Proyek Saya 🛠️",
    },
    en: {
      title: "My Projects 🛠️",
    },
  };

  const lang = content[language];

  const projects = [
    {
      title: "Automatic Cat Feeder Machine",
      date: "Juni 2024",
      description:
        "Sebuah alat pemberi makan otomatis untuk kucing kesayangan yang bekerja berdasarkan sensor infrared. Menggunakan ESP32 untuk kontrol, serta servo dan LED sebagai indikator aktivitas. Ideal untuk pemilik hewan peliharaan yang sibuk.",
      tech: ["ESP32", "Servo Motor", "Sensor Infrared", "LED", "Powerbank"],
      image: img1,
      link: "https://youtu.be/ADLOs1ihK4c",
    },
    {
      title: "CitWorks",
      date: "April 2025",
      description:
        "Sebuah aplikasi berbasis GUI untuk pengolahan citra digital. Menyediakan fitur-fitur seperti konversi grayscale, filter spasial, kontras, hingga konvolusi manual. Dibangun dengan PyQt untuk pengalaman visual yang bersih dan terarah.",
      tech: ["Python", "PyCharm", "Qt Designer"],
      image: img5,
      link: "https://drive.google.com/file/d/1cz27lHK5KlFGL_rjx9xJ3t5Yj22X0-eL/",
    },
    {
      title: "Penyewaan Baju",
      date: "November 2024",
      description:
        "Aplikasi website untuk menyewakan baju dengan sistem manajemen produk, pengguna, dan transaksi. Memudahkan pelanggan untuk menyewa dan pemilik untuk mengelola inventaris dengan antarmuka yang ramah pengguna.",
      tech: ["PHP", "Laragon", "Visual Studio Code"],
      image: img6,
      link: "https://drive.google.com/file/d/1M1CO499zHrTelFWBWgnfDtBPtecVI36y/view?usp=drivesdk",
    },
  ];

  return (
    <section className="min-h-screen bg-pink-50 dark:bg-gray-900 px-6 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-pink-100">
          {lang.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;