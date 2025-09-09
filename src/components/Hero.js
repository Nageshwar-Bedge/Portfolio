import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
        Hi 👋, I'm <span className="text-blue-600">Nageshwar Bedge</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-700">
        Full-Stack Developer | MERN & Java Enthusiast | Open Source Contributor
      </p>
      <div className="flex gap-6">
        <a
          href="https://linkedin.com/in/bedge-nageshwar/"
          target="_blank"
          className="btn-hover px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Nageshwar-Bedge"
          target="_blank"
          className="btn-hover px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/nageshwar_bedge/"
          target="_blank"
          className="btn-hover px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
        >
          LeetCode
        </a>
      </div>
      <div className="mt-10">
        <img
          src="https://media.giphy.com/media/26tPoyDhjiJ2g7rEs/giphy.gif"
          alt="coding animation"
          className="w-72 md:w-96 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
