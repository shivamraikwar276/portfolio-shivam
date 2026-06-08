// import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#050816] border-t border-white/10">

      <div className="max-w-4xl mx-auto px-6 py-12 text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400">
          Shivam Raikwar
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
          Passionate Java Developer and Full Stack Developer focused on
          building modern web applications, solving complex problems, and
          creating clean user experiences.
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mt-3 text-gray-300 text-sm">
          <a
            href="#about"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-3">

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaXTwitter />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaYoutube />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaGoogle />
          </a>

        </div>

        {/* Divider */}
        <div className="w-32 h-[1px] bg-cyan-400/40 mx-auto mt-5"></div>

        {/* Copyright */}
        <p className="mt-3 -mb-5 text-sm text-gray-500">
          © {new Date().getFullYear()} Shivam Raikwar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;