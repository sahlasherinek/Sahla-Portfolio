import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-3 border-b-4 border-indigo-500 inline-block">
          Contact Me
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          I'm open to full-time roles, internships, and freelance collaborations. Let's connect!
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <a
            href="mailto:sahlasherinek@gmail.com"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <p className="text-gray-800 font-semibold group-hover:text-indigo-600 transition text-sm">
                sahlasherinek@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/sahla-sherin-e-k-4b5010248"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <FaLinkedin className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">LinkedIn</p>
              <p className="text-gray-800 font-semibold group-hover:text-indigo-600 transition text-sm">
                Sahla Sherin E K
              </p>
            </div>
          </a>

          <a
            href="https://github.com/sahlasherinek"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <FaGithub className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">GitHub</p>
              <p className="text-gray-800 font-semibold group-hover:text-indigo-600 transition text-sm">
                github.com/sahlasherinek
              </p>
            </div>
          </a>

          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-indigo-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Location</p>
              <p className="text-gray-800 font-semibold text-sm">Kerala, India</p>
              <p className="text-gray-400 text-xs">Open to remote & on-site roles</p>
            </div>
          </div>
        </div>

        {/* Direct Email CTA */}
        <div className="bg-indigo-600 rounded-xl p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Let's work together!</h2>
          <p className="text-indigo-200 mb-6">
            Whether you have a job opportunity, project idea, or just want to say hi — my inbox is open.
          </p>
          <a
            href="mailto:sahlasherinek@gmail.com?subject=Opportunity for Sahla"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-50 transition"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
