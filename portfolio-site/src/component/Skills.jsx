
// import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node JS", icon: <FaNodeJs /> },
        { name: "Express JS", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 w-full bg-[#050816] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
            SKI<span className="text-cyan-400">LLS</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.45)]"></div>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium">
            Technologies and tools I use to build modern, responsive and clean web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl p-[1.5px]
                bg-gradient-to-br from-cyan-400/35 via-purple-500/25 to-blue-500/35
                shadow-[0_18px_55px_rgba(34,211,238,0.08)]
                transition-all duration-500 transform-gpu
                hover:-translate-y-3 hover:scale-[1.015]
                hover:shadow-[0_22px_70px_rgba(34,211,238,0.16)]
                hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_scale(1.015)]
              "
            >
              <div className="absolute -inset-2 bg-cyan-400/5 blur-2xl rounded-3xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>

              <div className="relative overflow-hidden rounded-3xl bg-[#111827] p-7 sm:p-9 min-h-[280px] border border-white/10">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>

                <h3 className="relative text-3xl font-black text-center mb-8 text-gray-200 group-hover:text-cyan-300 transition-all duration-300">
                  {group.title}
                </h3>

                <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center justify-center gap-3
                        min-h-[56px]
                        px-5 py-4 rounded-full
                        bg-[#0B1120]/95 border border-cyan-400/15
                        text-gray-300 font-semibold
                        shadow-[inset_0_0_10px_rgba(255,255,255,0.025)]
                        transition-all duration-300 transform-gpu
                        hover:-translate-y-1 hover:scale-[1.03]
                        hover:border-cyan-400/60 hover:text-white
                        hover:bg-cyan-400/5
                        hover:shadow-[0_8px_24px_rgba(34,211,238,0.16)]
                      "
                    >
                      <span className="text-2xl text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.35)]">
                        {skill.icon}
                      </span>

                      <span className="text-sm sm:text-base whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;