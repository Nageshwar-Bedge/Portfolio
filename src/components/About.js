import React from "react";
import { FaDatabase, FaLightbulb, FaJava, FaReact } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>

      {/* Top Cards: Professional Summary & Skills */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Professional Summary */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transform transition-all duration-500">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 shadow-lg">
            <FaJava className="text-white text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-center">Professional Summary</h3>
          <p className="text-gray-600 text-center">
            Information Technology undergraduate (2025) with strong foundations in DSA, OOP, and Full-Stack Development.
            Experienced in building cloud-ready, scalable applications with Java, Spring Boot, MERN Stack, and MongoDB.
            Passionate about delivering innovative software solutions and improving user experience.
          </p>
        </div>

        {/* Skills & Interests */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transform transition-all duration-500">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full p-4 shadow-lg">
            <FaLightbulb className="text-white text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mt-8 mb-6 text-center">Skills & Interests</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-center">
            <div className="flex flex-col items-center hover:text-red-500 transition duration-300">
              <FaJava className="text-3xl mb-2" /> Java & Spring Boot
            </div>
            <div className="flex flex-col items-center hover:text-blue-500 transition duration-300">
              <FaReact className="text-3xl mb-2" /> MERN Stack
            </div>
            <div className="flex flex-col items-center hover:text-yellow-500 transition duration-300">
              <FaDatabase className="text-3xl mb-2" /> Databases
            </div>
            <div className="flex flex-col items-center hover:text-purple-500 transition duration-300">
              <FaLightbulb className="text-3xl mb-2" /> AI & Innovation
            </div>
          </div>
        </div>
      </div>

      {/* Education & Internship Timeline */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Education Column */}
        <div className="relative border-l-2 border-blue-300 ml-6">
          <div className="mb-10 ml-6">
            <span className="absolute -left-5 top-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">1</span>
            <h4 className="font-semibold text-xl mb-1">B.E. Information Technology - I2IT Pune</h4>
            <p className="text-gray-600 mb-1">2022 — 2025 | CGPA: 7.83</p>
            <p className="text-gray-500">Worked on multiple Java, Spring Boot, and MERN Stack projects focusing on performance and scalability.</p>
          </div>
          <div className="mb-10 ml-6">
            <span className="absolute -left-5 top-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">2</span>
            <h4 className="font-semibold text-xl mb-1">Diploma in Computer Engineering - GP Osmanabad</h4>
            <p className="text-gray-600 mb-1">2019 — 2022 | 88.63%</p>
            <p className="text-gray-500">Developed foundational skills in programming, data structures, and hardware systems.</p>
          </div>
        </div>

        {/* Internship / Work Experience Column */}
        <div className="relative border-l-2 border-purple-300 ml-6">
          <div className="mb-10 ml-6">
            <span className="absolute -left-5 top-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">1</span>
            <h4 className="font-semibold text-xl mb-1">Web Intern — Vithal Vision IT & Media Solutions</h4>
            <p className="text-gray-600 mb-1">Feb — Apr 2024</p>
            <p className="text-gray-500">Built a bus reservation platform using MERN Stack, implemented REST APIs, and improved reliability by 30%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
