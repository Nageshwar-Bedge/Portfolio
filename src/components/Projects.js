import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiExpress } from "react-icons/si";

const techData = {
  "React.js": <FaReact />,
  "Node.js": <FaNodeJs />,
  "Next.js": null,
  "Express.js": <SiExpress />,
  "Spring Boot": <SiSpringboot />,
  "MongoDB": <SiMongodb />,
  "JavaScript": <SiJavascript />,
  "HTML": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "TailwindCSS": <SiTailwindcss />,
  "Context API": null,
  "localStorage": null,
  "GNews API": null,
  "Java": <FaJava />,
  "Swing": null,
};

const projects = [
  {
    title: "Smart Notes App",
    stack: ["React.js", "Spring Boot", "MongoDB", "JavaScript", "JWT","HTML", "CSS"],
    github: "https://github.com/Nageshwar-Bedge/SmartNoteApp",
    live: "#",
    description: "Full-stack notes app with CRUD, filters, reminders & PDF export."
  },
  {
  title: "Bus Reservation System",
  stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
  github: "https://github.com/Nageshwar-Bedge/BusReservationApp",
  live: "#",
  description: "Full-stack bus reservation platform with real-time seat selection, booking & payment APIs."
}
,
  {
    title: "Dental Center Management Dashboard",
    stack: ["React.js", "TailwindCSS", "Context API", "localStorage"],
    github: "https://github.com/Nageshwar-Bedge/dental-center-dashboard",
    live: "https://dentalcarepro-dashboard.vercel.app/",
    description: "Admin/patient portal with calendar, CRUD, offline persistence."
  },
  {
    title: "AcoNews Web App",
    stack: ["React.js", "Node.js", "Express.js", "GNews API"],
    github: "https://github.com/Nageshwar-Bedge/AcoNews",
    live: "https://aco-news-web.vercel.app/",
    description: "Topic/category feeds with pagination; optimized client routing."
  },
  {
    title: "Java Personal Finance Manager",
    stack: ["Java", "Swing","OOP's"],
    github: "https://github.com/Nageshwar-Bedge/Personal-Finance-Manager",
    live: "#",
    description: "Desktop expense tracker with CSV import/export and monthly reports."
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Projects</h2>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 border border-gray-200 flex flex-col justify-between"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-5">{project.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow"
                  >
                    {techData[tech] && <span className="text-lg">{techData[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition shadow"
              >
                <FaGithub /> GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
