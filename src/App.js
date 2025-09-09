import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
    </div>
  );
}

export default App;
