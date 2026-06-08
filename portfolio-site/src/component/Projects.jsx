// import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio website built with React and Tailwind CSS. It includes Hero, About, Skills, Projects and Contact sections with responsive design.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      github: "#",
      live: "#",
    },
    {
      title: "Book Store App",
      description:
        "A full stack book management application where users can view, add and manage books using backend APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Maze Path Finder",
      description:
        "A maze visualizer project that finds and displays all possible paths from start to end with clean UI and path count.",
      tech: ["JavaScript", "React", "DSA"],
      github: "#",
      live: "#",
    },
    {
      title: "Student Management System",
      description:
        "A CRUD based student management project where users can add, edit, delete and manage student records easily.",
      tech: ["React", "JavaScript", "CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 w-full bg-[#050816] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
            PRO<span className="text-cyan-400">JECTS</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.45)]"></div>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Some of my work that shows my frontend, backend and problem-solving skills.
          </p>
        </div>

          {/* Project Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
  {projects.map((project, index) => (
    <div
      key={index}
      className="
        group relative h-full rounded-3xl p-[1.5px]
        bg-gradient-to-br from-cyan-400/35 via-purple-500/25 to-blue-500/35
        shadow-[0_18px_55px_rgba(34,211,238,0.08)]
        transition-all duration-500 transform-gpu
        hover:-translate-y-3 hover:scale-[1.015]
        hover:shadow-[0_22px_70px_rgba(34,211,238,0.16)]
        hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_scale(1.015)]
      "
    >
      <div className="absolute -inset-2 bg-cyan-400/5 blur-2xl rounded-3xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>

      <div className="relative h-full overflow-hidden rounded-3xl bg-[#111827] p-7 sm:p-8 min-h-[360px] border border-white/10 flex flex-col">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>

        <div className="relative w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-6 shrink-0 shadow-[0_8px_25px_rgba(34,211,238,0.12)]">
          <span className="text-cyan-400 text-xl font-black">
            0{index + 1}
          </span>
        </div>

        <h3 className="relative text-2xl sm:text-3xl font-black text-gray-200 mb-4 group-hover:text-cyan-300 transition-all duration-300">
          {project.title}
        </h3>

        <p className="relative text-gray-400 text-base leading-7 mb-6 flex-grow">
          {project.description}
        </p>

        <div className="relative flex flex-wrap gap-3 mb-8">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="
                px-4 py-2 rounded-full
                bg-[#0B1120]/95 border border-cyan-400/15
                text-cyan-300 text-sm font-semibold
                hover:border-cyan-400/60 hover:bg-cyan-400/5
                transition-all duration-300
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="relative flex flex-wrap gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-5 py-3 rounded-full
              bg-[#0B1120] border border-white/10
              text-gray-300 font-bold
              hover:text-white hover:border-cyan-400/60
              hover:bg-cyan-400/5
              hover:-translate-y-1 transition-all duration-300
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              px-5 py-3 rounded-full
              bg-cyan-500 text-white font-bold
              hover:bg-cyan-600
              hover:-translate-y-1 transition-all duration-300
            "
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Projects;