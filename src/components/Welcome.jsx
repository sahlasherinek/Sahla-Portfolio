import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "React & Node.js Engineer",
  "Software Engineer",
];

export default function Welcome() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Avatar / Initials */}
      {/* <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
        SS
      </div> */}

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">
        Hi, I'm <span className="text-indigo-600">Sahla Sherin E K</span>
      </h1>

      {/* Typing role */}
      <p className="text-xl sm:text-2xl text-indigo-500 font-medium mb-4 min-h-8">
        {displayed}
        <span className="border-r-2 border-indigo-500 ml-1">&nbsp;</span>
      </p>

      {/* Bio */}
      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
        A Computer Science Engineer from Kerala, building scalable web and mobile
        apps with clean UI and solid backend architecture.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-5 mb-8">
        <a
          href="https://linkedin.com/in/sahla-sherin-e-k-4b5010248"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition-transform transform hover:scale-110"
          title="LinkedIn"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/sahlasherinek"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition-transform transform hover:scale-110"
          title="GitHub"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="mailto:sahlasherinek@gmail.com"
          className="text-gray-500 hover:text-indigo-600 transition-transform transform hover:scale-110"
          title="Email"
        >
          <FaEnvelope size={32} />
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300 font-medium"
        >
          View My Work
        </Link>
        {/* TODO: Replace href with your actual resume link (Google Drive / Dropbox) */}
        <a
          href="https://drive.google.com/file/d/1CZhsMBDC-1XM1uNzcQKEf3ajoEiuxKfo/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition duration-300 font-medium flex items-center gap-2"
        >
          <FaDownload size={14} /> Download Resume
        </a>
      </div>
    </div>
  );
}
