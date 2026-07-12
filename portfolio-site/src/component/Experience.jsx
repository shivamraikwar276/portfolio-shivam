import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "CodSoft",
      location: "Remote",
      duration: "Recent",
      type: "Internship Certificate",
      description: [
        "Built responsive web pages using HTML, CSS, JavaScript, and React.",
        "Worked on task-based frontend projects with clean UI and proper structure.",
        "Improved responsive design, component thinking, and frontend development skills.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Apex Planet",
      location: "Remote",
      duration: "Recent",
      type: "Internship Certificate",
      description: [
        "Worked on programming-based tasks and software development fundamentals.",
        "Improved logic building, debugging ability, and clean code writing.",
        "Gained practical understanding of software development workflow.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Oasis Infobyte",
      location: "Remote",
      duration: "Recent",
      type: "Internship Certificate",
      description: [
        "Created web development projects using frontend technologies.",
        "Focused on user-friendly UI, responsive layouts, and project completion.",
        "Enhanced practical knowledge of HTML, CSS, JavaScript, and React concepts.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 relative z-0 w-full bg-[#0B1120] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
      // className="scroll-mt-20 relative z-0 w-full bg-gradient-to-br from-[#12001f] via-[#050816] to-[#000b26] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
            EXPERI<span className="text-cyan-400">ENCE</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.6)]"></div>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            My internship journey and practical learning experience through
            real-world tasks and certified programs.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-cyan-400/20"></div>

          <div className="space-y-14 md:space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-14 h-14 rounded-full bg-[#111827] border-2 border-cyan-400 items-center justify-center z-20 shadow-[0_0_25px_rgba(34,211,238,0.45)]">
                  <FaBriefcase className="text-cyan-400 text-xl" />
                </div>

                <div
                  className="
                    group relative w-full md:w-[42%] rounded-2xl p-[1.5px]
                    bg-gradient-to-br from-cyan-400/45 via-purple-500/25 to-blue-500/45
                    shadow-[0_18px_55px_rgba(34,211,238,0.10)]
                    transition-all duration-500 transform-gpu
                    hover:-translate-y-3 hover:scale-[1.025]
                    hover:shadow-[0_28px_85px_rgba(34,211,238,0.18)]
                    hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_scale(1.025)]
                  "
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#111827]/95 p-6 sm:p-7 border border-white/10">
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/8 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-500/8 rounded-full blur-3xl"></div>

                    <div className="relative flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                        <FaCode />
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-all">
                          {exp.role}
                        </h3>

                        <p className="text-cyan-400 font-bold mt-1">
                          {exp.company}
                        </p>

                        <p className="text-gray-500 text-sm mt-1">
                          {exp.type}
                        </p>
                      </div>
                    </div>

                    <div className="relative flex flex-wrap gap-3 mb-5">
                      <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#050816] border border-cyan-400/20 text-gray-300 text-sm font-semibold">
                        <FaCalendarAlt className="text-cyan-400" />
                        {exp.duration}
                      </span>

                      <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#050816] border border-purple-400/20 text-gray-300 text-sm font-semibold">
                        <FaMapMarkerAlt className="text-purple-400" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="relative space-y-3 text-gray-400 text-sm sm:text-base leading-6">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1">◆</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="absolute right-5 bottom-3 text-6xl font-black text-white/5 group-hover:text-cyan-400/10 transition-all">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;