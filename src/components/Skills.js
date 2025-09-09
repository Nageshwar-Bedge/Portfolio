import React from "react";

const techStack = [
  { name: "Java", logo: "java", usedIn: "Smart Notes App, Java Personal Finance Manager, Spring Boot APIs" },
  { name: "JavaScript", logo: "javascript", usedIn: "Smart Notes App, AcoNews Web App, Dental Dashboard" },
  { name: "Python", logo: "python", usedIn: "AI hackathon projects, automation scripts" },
  { name: "React.js", logo: "react", usedIn: "Smart Notes App, Dental Dashboard, AcoNews Web App" },
  { name: "Next.js", logo: "nextdotjs", usedIn: "Cipito website, future projects" },
  { name: "Node.js", logo: "node.js", usedIn: "Smart Notes App, AcoNews Web App, backend APIs" },
  { name: "MongoDB", logo: "mongodb", usedIn: "Smart Notes App, Bus Reservation App, AcoNews Web App" },
  { name: "MySQL", logo: "mysql", usedIn: "Finance Manager App, other relational data projects" },
  { name: "AWS", logo: "amazonaws", usedIn: "Hosting projects, S3 storage" },
  { name: "Docker", logo: "docker", usedIn: "Smart Notes App, Vithal Vision internship project" },
  { name: "TailwindCSS", logo: "tailwindcss", usedIn: "Dental Dashboard, Cipito website" },
  { name: "Spring Boot", logo: "springboot", usedIn: "Smart Notes App backend, APIs" },
  { name: "TypeScript", logo: "typescript", usedIn: "Future projects / typed JS apps" },
  { name: "Git", logo: "git", usedIn: "All projects for version control" },
  { name: "Linux", logo: "linux", usedIn: "Server deployment, backend development" },
  { name: "Firebase", logo: "firebase", usedIn: "Small apps / experiments" },
  { name: "Redux", logo: "redux", usedIn: "Smart Notes App, Dental Dashboard" }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="relative group p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 transition duration-300 cursor-pointer"
          >
            <img
              src={`https://img.shields.io/badge/${tech.name.replace(" ", "%20")}-1f2937?style=for-the-badge&logo=${tech.logo}&logoColor=white`}
              alt={tech.name}
              className="h-12"
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400 to-purple-600 transition duration-300"></div>

            {/* Tooltip showing where tech was used */}
            <div className="absolute bottom-full mb-3 w-64 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg text-center">
                Used in: {tech.usedIn}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
