
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Education", path: "#education" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-[#0B1120]/90 backdrop-blur-md border-b border-white/10">
      <nav className="h-20 w-full px-5 sm:px-8 lg:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-3xl font-black text-white cursor-pointer hover:scale-105 transition-all duration-300"
        >
          Shivam<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-9 text-gray-300 font-semibold text-lg">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="relative hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Icons + Menu Button */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-cyan-400"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-[#050816]/98 border-t border-white/10 transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-7 text-gray-300 text-lg font-bold">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={() => setOpen(false)}
              className="hover:text-cyan-400 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;