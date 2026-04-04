import React from "react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Government Engineering College, Wayanad",
    year: "2021 – 2025",
    details:
      "Graduated with strong foundations in software engineering, data structures, algorithms, and emerging technologies including AI, mobile development, and cloud computing.",
  },
  {
    degree: "Higher Secondary Education (Science)",
    institution: "PMSA PTHSS Kakkov, Malappuram",
    year: "2018 – 2020",
    details:
      "Specialised in science stream, building strong analytical and problem-solving skills.",
  },
];

const internships = [
  {
    role: "Cloud & AI Intern",
    company: "AICTE – Microsoft Azure Virtual Internship",
    duration: "2024",
    details:
      "Worked with Microsoft Azure services — deployed cloud applications, explored Azure AI/ML tools, and completed hands-on labs on cloud infrastructure.",
  },
  {
    role: "Technology Intern",
    company: "AICTE – EY Virtual Internship",
    duration: "2023",
    details:
      "Gained exposure to enterprise-grade software development practices, business technology consulting, and professional development through EY's learning modules.",
  },
];

const certifications = [
  { name: "Python Programming", issuer: "Infosys Springboard", year: "2024" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2024" },
  { name: "React.js Development", issuer: "Udemy / Self-paced", year: "2023" },
];

export default function Education() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Education */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-indigo-500 inline-flex items-center gap-3">
            <FaGraduationCap className="text-indigo-500" /> Education
          </h1>
          <div className="space-y-5">
            {education.map((edu, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-xl font-bold text-indigo-600">{edu.degree}</h2>
                <p className="text-gray-700 font-medium mt-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm italic">{edu.year}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 inline-flex items-center gap-3">
            <FaBriefcase className="text-indigo-500" /> Internships
          </h2>
          <div className="space-y-5">
            {internships.map((intern, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-bold text-indigo-600">{intern.role}</h3>
                <p className="text-gray-700 font-medium mt-1">{intern.company}</p>
                <p className="text-gray-400 text-sm italic">{intern.duration}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{intern.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 inline-flex items-center gap-3">
            <FaCertificate className="text-indigo-500" /> Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <FaCertificate className="text-indigo-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{cert.name}</p>
                  <p className="text-gray-500 text-sm">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
