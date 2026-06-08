
import React from "react";
import { FaCode, FaLaptopCode, FaRocket, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative z-0 w-full bg-gradient-to-br from-[#12001f] via-[#050816] to-[#000b26] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.6)]"></div>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            A short introduction about my journey, interests, and goals.
          </p>
        </div>

        <div
          className="
            group relative rounded-3xl p-[1.5px]
            bg-gradient-to-br from-cyan-400/45 via-purple-500/25 to-blue-500/45
            shadow-[0_18px_55px_rgba(34,211,238,0.10)]
            transition-all duration-500 transform-gpu
            hover:-translate-y-3 hover:scale-[1.01]
            hover:shadow-[0_28px_85px_rgba(34,211,238,0.18)]
            hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_scale(1.01)]
          "
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#111827]/95 p-7 sm:p-10 lg:p-12 border border-white/10">
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-400/8 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-purple-500/8 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
              <div className="lg:col-span-2">
                <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">
                  Who I Am
                </p>

                <h3 className="text-3xl sm:text-4xl font-black mb-6">
                  I'm <span className="text-cyan-400">Shivam Raikwar</span>,
                  a passionate Computer Science student.
                </h3>

                <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-8">
                  <p>
                    I am currently pursuing B.Tech in Computer Science &
                    Engineering from Bansal Institute of Research & Technology,
                    Bhopal. I enjoy learning programming, building modern web
                    applications, and improving my problem-solving skills.
                  </p>

                  <p>
                    My main focus is full stack development using React,
                    Tailwind CSS, Node.js, Express, and MongoDB. Along with
                    development, I also practice Data Structures and Algorithms
                    in Java to strengthen my logic and coding ability.
                  </p>

                  <p>
                    I like creating clean, responsive, and user-friendly
                    projects. My goal is to become a skilled Software Engineer
                    who can build useful products and continuously grow with new
                    technologies.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                <div className="bg-[#050816] border border-cyan-400/20 rounded-2xl p-5 hover:border-cyan-400/60 hover:-translate-y-2 transition-all duration-300">
                  <FaUserGraduate className="text-cyan-400 text-3xl mb-3" />
                  <h4 className="text-white font-bold text-lg">
                    CSE Student
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    B.Tech Computer Science & Engineering
                  </p>
                </div>

                <div className="bg-[#050816] border border-cyan-400/20 rounded-2xl p-5 hover:border-cyan-400/60 hover:-translate-y-2 transition-all duration-300">
                  <FaLaptopCode className="text-cyan-400 text-3xl mb-3" />
                  <h4 className="text-white font-bold text-lg">
                    Full Stack
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    React, Node.js, Express, MongoDB
                  </p>
                </div>

                <div className="bg-[#050816] border border-cyan-400/20 rounded-2xl p-5 hover:border-cyan-400/60 hover:-translate-y-2 transition-all duration-300">
                  <FaCode className="text-cyan-400 text-3xl mb-3" />
                  <h4 className="text-white font-bold text-lg">
                    Java & DSA
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Problem solving and algorithmic thinking
                  </p>
                </div>

                <div className="bg-[#050816] border border-cyan-400/20 rounded-2xl p-5 hover:border-cyan-400/60 hover:-translate-y-2 transition-all duration-300">
                  <FaRocket className="text-cyan-400 text-3xl mb-3" />
                  <h4 className="text-white font-bold text-lg">
                    Goal
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Becoming a skilled Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;