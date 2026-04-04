import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/education", label: "Education" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight">
          Sahla Sherin
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-indigo-600 transition duration-200 pb-1 ${
                  location.pathname === link.path
                    ? "text-indigo-600 border-b-2 border-indigo-600 font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button (desktop) */}
        <a
          href="mailto:sahlasherinek@gmail.com?subject=Job Opportunity"
          className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition font-medium"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-indigo-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-gray-700 font-medium hover:text-indigo-600 transition ${
                location.pathname === link.path ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:sahlasherinek@gmail.com?subject=Job Opportunity"
            className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
