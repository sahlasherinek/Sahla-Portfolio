import React from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaCloud } from "react-icons/fa";

const skills = {
  "Frontend": ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "Flask"],
  "Mobile": ["Flutter", "Dart", "Firebase"],
  "Database": ["MongoDB", "MySQL", "Firebase Firestore"],
  "Languages": ["JavaScript", "Python", "Java", "Dart"],
  "Tools": ["Git", "GitHub", "VS Code", "Postman", "Azure"],
};

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10 border-b-4 border-indigo-500 inline-block">
          About Me
        </h1>

        {/* Bio */}
        <div className="bg-white rounded-xl shadow p-8 mb-10">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Hi! I'm <span className="font-semibold text-indigo-600">Sahla Sherin E K</span>, a
            Computer Science Engineer from <strong>GEC Wayanad, Kerala</strong>. I specialise in
            Full Stack Web Development, Mobile App Development, and AI-powered projects.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I love building clean, user-friendly applications backed by solid architecture. During
            my internships with <strong>AICTE–EY</strong> and <strong>AICTE–Microsoft Azure</strong>,
            I gained hands-on experience with cloud technologies and enterprise-grade development
            workflows.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm actively seeking fresher/entry-level roles at startups and tech companies where I can
            contribute, grow, and ship real products. Outside of coding, I enjoy reading, exploring
            design trends, and fitness.
          </p>
        </div>

        {/* Skills */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow p-5 hover:shadow-md transition">
              <h3 className="text-indigo-600 font-semibold text-base mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
