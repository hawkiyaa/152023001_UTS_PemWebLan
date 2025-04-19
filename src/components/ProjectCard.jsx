import React from "react";

const ProjectCard = ({ title, date, description, tech, image, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-5 text-left">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-pink-100">
          {title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{date}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="text-xs bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-200 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm font-medium text-pink-600 dark:text-pink-300 hover:underline transition"
          >
            ↗ Lihat Demo Proyek
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;