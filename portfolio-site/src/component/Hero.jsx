import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen bg-[#0B1120] text-white
        flex items-center px-5 sm:px-8 lg:px-20
        pt-28 lg:pt-20 pb-24 overflow-hidden
      "
    >
      {/* Bottom smooth fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050816] pointer-events-none"></div>

      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] order-2 lg:order-1 text-center lg:text-left">
          <p className="text-cyan-400 text-lg sm:text-xl font-semibold mb-4">
            Hello, I'm
          </p>

          <div className="relative inline-block mb-5">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute -inset-4 bg-blue-500/15 blur-[50px] rounded-full"></div>

            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Shivam{" "}
              <span className="text-cyan-400">Raikwar</span>
            </h1>
          </div>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 min-h-[50px]">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "Coder",
                1500,
                "Full Stack Developer",
                1500,
                "React Developer",
                1500,
                "UI/UX Designer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </div>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0 mb-8 font-medium">
            I am a full-stack developer specializing in the MERN stack, skilled
            in building scalable web applications with modern tools and
            frameworks. Passionate about problem-solving and continuous
            learning, I focus on creating impactful solutions with clean design
            and powerful functionality.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
           <a
                  href="http://localhost:3000/api/cv/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative overflow-hidden
                    px-8 sm:px-10 py-4 rounded-full
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    text-white text-base sm:text-lg font-bold
                    transition-all duration-500
                    hover:scale-105
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    📄 View Resume
                  </span>

                  <span
                    className="
                      absolute inset-0
                      bg-white/10
                      opacity-0
                      group-hover:opacity-100
                      transition-all duration-500
                    "
                  ></span>
                </a>

            <a
              href="#contact"
              className="
                px-8 sm:px-10 py-4 rounded-full
                border border-cyan-400 text-cyan-400
                text-base sm:text-lg font-bold
                hover:bg-cyan-400 hover:text-black hover:scale-105
                transition-all duration-300
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%] order-1 lg:order-2 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl scale-110"></div>

            <div
              className="
                relative w-[230px] h-[230px]
                sm:w-[280px] sm:h-[280px]
                lg:w-[310px] lg:h-[310px]
                xl:w-[370px] xl:h-[370px]
                rounded-full p-[5px]
                bg-gradient-to-br from-cyan-400 to-blue-500
                shadow-[0_20px_60px_rgba(34,211,238,0.25)]
                transition-all duration-700 ease-out
                group-hover:scale-[1.04]
                group-hover:shadow-[0_25px_80px_rgba(34,211,238,0.35)]
                transform-gpu
              "
            >
              <img
                src="https://ik.imagekit.io/60gzpaktg/image_xce1bH-fd.jpg?updatedAt=1776833195675"
                alt="Shivam Raikwar"
                className="
                  w-full h-full rounded-full object-cover
                  border-[6px] border-[#0B1120]
                  transition-all duration-700 ease-out
                  group-hover:scale-[1.02]
                  transform-gpu
                "
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-6 bg-cyan-400/20 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;