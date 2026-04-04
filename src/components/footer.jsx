import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Sahla Sherin E K</span> — All Rights Reserved
        </p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/sahla-sherin-e-k-4b5010248" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sahlasherinek" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            <FaGithub size={20} />
          </a>
          <a href="mailto:sahlasherinek@gmail.com" className="hover:text-indigo-400 transition">
            <FaEnvelope size={20} />
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Built with <span className="text-indigo-400">React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
