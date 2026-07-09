// import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      logo: "", // B.Tech logo here
      title: "B. Tech - Computer Science & Engineering",
      institute: "Bansal Institute of Research & Technology, Bhopal",
      year: "2024 - 2028",
      score: "CGPA: 7.1 / 10",
      note: "Till 3rd Semester",
      desc: "Currently pursuing Bachelor of Technology in Computer Science & Engineering. Learning programming, DSA, full stack development, DBMS, operating systems, and software engineering.",
    },
    {
      logo: "", // 12th logo here
      title: "Senior Secondary (XII) - Science Stream",
      institute: "Govt. Higher Secondary School, Chanderi",
      year: "2024",
      score: "Percentage: 79%",
      note: "MPBSE",
      desc: "Completed senior secondary education in Science Stream under MPBSE with focus on Physics, Chemistry, Mathematics, and analytical problem solving.",
    },
    {
      logo: "", // 10th logo here
      title: "Secondary (X)",
      institute: "Govt. Higher Secondary School, Chanderi",
      year: "2022",
      score: "Percentage: 74%",
      note: "MPBSE",
      desc: "Completed secondary education under MPBSE and built a strong academic foundation in science, mathematics, and logical thinking.",
    },
  ];

  return (
    <section
      id="education"
      className=" scroll-mt-20 relative z-0 w-full bg-gradient-to-br from-[#12001f] via-[#050816] to-[#000b26] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700/20 blur-3xl rounded-full"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-700/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black">
            EDUCATION
          </h2>

          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_18px_rgba(168,85,247,0.8)]"></div>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            My education has been a journey of learning and development. Here are
            the details of my academic background.
          </p>
        </div>

        <div className="relative min-h-[820px]">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-purple-500/20"></div>

          {education.map((item, index) => (
            <div
              key={index}  ///  changes
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Center Logo Dot */}
              <div
                className="
                  hidden md:flex absolute left-1/2 top-24 -translate-x-1/2
                  w-14 h-14 rounded-full bg-[#111827]
                  border-2 border-purple-400
                  items-center justify-center z-20
                  shadow-[0_0_25px_rgba(168,85,247,0.55)]
                "
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-9 h-9 object-contain rounded-full"
                  />
                ) : (
                  <FaGraduationCap className="text-purple-300 text-2xl" />
                )}
              </div>

              {/* Card */}
              <div
                className={`
                  group relative w-full md:w-[42%] rounded-xl p-[1px]
                  bg-gradient-to-br from-purple-400/60 via-cyan-400/30 to-purple-500/50
                  shadow-[0_0_35px_rgba(168,85,247,0.18)]
                  transition-all duration-500 transform-gpu
                  hover:-translate-y-3 hover:scale-[1.025]
                  hover:shadow-[0_0_55px_rgba(168,85,247,0.35)]
                  hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-4deg)_scale(1.025)]
                  ${index === 1 ? "md:mt-15" : ""}
                `}
              >
                <div className="relative overflow-hidden rounded-xl bg-[#111827]/95 p-6 border border-white/10">
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-cyan-400/5 rounded-full blur-3xl"></div>

                  <div className="relative flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 shrink-0 rounded-lg bg-white flex items-center justify-center shadow-[0_0_18px_rgba(255,255,255,0.15)]">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.institute}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <FaGraduationCap className="text-[#111827] text-2xl" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-black leading-snug text-white group-hover:text-purple-300 transition-all">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm font-semibold mt-1">
                        {item.institute}
                      </p>

                      <p className="text-gray-500 text-xs mt-1">
                        {item.year}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex flex-wrap gap-3 mb-5">
                    <span className="px-3 py-2 rounded-lg bg-[#050816] border border-purple-400/20 text-white text-sm font-bold">
                      {item.score}
                    </span>

                    <span className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-400/25 text-purple-300 text-sm font-bold">
                      {item.note}
                    </span>
                  </div>

                  <p className="relative text-gray-400 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;