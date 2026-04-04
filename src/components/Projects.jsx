import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Wavefy-Your own spotify",
    description:
      "A full-stack MERN platform for music and audio content. Features like audio uploads, playlists, and a responsive player UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    // TODO: Replace with your actual deployed URL (e.g., Render / Vercel / Railway)
    link: "https://wavefy-your-own-spotify.vercel.app",
    github: "https://github.com/sahlasherinek/Wavefy-Your-own-spotify",
    status: "Live",
  },
  {
    title: "DevChef-Recipe Sharing Platform",
    description:
      "Developed DevChef, a MERN stack web app for sharing authentic Malabari recipes with gallery uploads, real-time reviews, and cloud deployment using MongoDB Atlas, Render, and Vercel.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    // TODO: Add your deployed link here
    link: "https://devchef-psi.vercel.app",
    github: "https://github.com/sahlasherinek/DevChef.git",
    status: "Live",
  },
  {
    title: "GECStay — Hostel Finder App",
    description:
      "A Flutter mobile app for finding, booking, and reviewing hostels near GEC Wayanad. Includes an ML-based rent prediction module powered by Flask.",
    tech: ["Flutter", "Dart", "Firebase", "Flask", "Python"],
    link: "#",
    github: "https://github.com/sahlasherinek/GECStay-Android-app.git",
    status: "Completed",
  },
  {
    title: "GECW Hostel Finder Web",
    description:
      "A React + Firebase web app to browse and view hostel details, locations on map, and contact information for hostels around GEC Wayanad.",
    tech: ["React.js", "Firebase"],
    // TODO: Add your Firebase Hosting / Vercel link
    link: "https://dormease.vercel.app",
    github: "https://github.com/sahlasherinek/Dormease-Hostel-finding-web-application.git",
    status: "Live",
  },
];

const statusColors = {
  Live: "bg-green-100 text-green-700",
  Completed: "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
};

export default function Projects() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block">
          Projects
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg shadow hover:bg-indigo-700 transition"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 text-sm rounded-lg cursor-not-allowed">
                    <FaExternalLinkAlt size={12} /> Demo Soon
                  </span>
                )}
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 text-sm rounded-lg hover:bg-indigo-50 transition"
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
