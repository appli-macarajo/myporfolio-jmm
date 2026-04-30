import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiGlobe,
  FiCalendar,
  FiChevronRight,
} from "react-icons/fi";

const About = ({ darkMode = true }) => {
  const theme = {
    bg: darkMode
      ? "bg-dark-gradient text-white"
      : "bg-light-gradient text-black",
    navText: darkMode ? "text-zinc-500/50" : "text-zinc-400",
    activeText: darkMode ? "text-white" : "text-black",
    border: darkMode ? "border-zinc-800/40" : "border-zinc-200",
    subText: darkMode ? "text-zinc-500" : "text-zinc-400",
    card: darkMode ? "bg-zinc-900/40" : "bg-zinc-100/50",
  };

  return (
    <div
      className={`relative min-h-screen font-geist transition-colors duration-500 ${theme.bg} overflow-x-hidden`}
    >
      {/* 1. SIDEBAR */}
      <nav
        className={`fixed left-12 top-[60%] -translate-y-1/2 hidden lg:flex flex-col gap-8 text-[11px] uppercase tracking-[0.2em] ${theme.navText} z-50`}
      >
        <div className="group flex items-center gap-4 cursor-pointer">
          <span className="w-6 h-px bg-blue-500"></span>
          <span className={theme.activeText}>Introduction</span>
        </div>
        {["Work Experience", "Studies", "Technical Skills"].map((item) => (
          <div
            key={item}
            className="group flex items-center gap-4 cursor-pointer hover:text-zinc-300 transition-colors"
          >
            <span
              className={`w-4 h-px ${theme.border} group-hover:w-6 group-hover:bg-zinc-400 transition-all`}
            ></span>
            <span>{item}</span>
          </div>
        ))}
      </nav>

      {/* 2. MAIN CONTENT - No more top-bar div here */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 pt-15 px-8 md:px-16">
        {/* PROFILE COLUMN */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end">
          <div className="sticky top-10 flex flex-col items-center md:items-center w-fit">
            <div className="relative">
              <div className="w-44 h-44 rounded-full border border-white p-1.5">
                <div className="w-full h-full rounded-full overflow-hidden border border-white">
                  <img
                    src="/1X1.png"
                    alt="John Michael Macaraig"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-6 text-center">
              <div
                className={`flex items-center justify-center gap-3 text-[12px] ${theme.subText} tracking-widest uppercase`}
              >
                <FiGlobe className="text-red-500/80 text-[10px]" />
                <span>Asia / Manila</span>
              </div>

              <div className="flex justify-center gap-3">
                {["English", "Tagalog"].map((lang) => (
                  <span
                    key={lang}
                    className={`px-5 py-2 ${theme.card} border ${theme.border} rounded text-[10px] ${theme.subText} uppercase tracking-tighter`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT COLUMN */}
        <div className="md:col-span-8 space-y-28 pb-40">
          <section>
            <div
              className={`inline-flex items-center gap-6 border ${darkMode ? "border-cyan-500/20 bg-cyan-400/10" : "border-cyan-200 bg-cyan-100/30"} px-6 py-2 rounded-full mb-12 shadow-sm`}
            >
              <div className="flex items-center gap-4">
                <FiCalendar className="text-cyan-400" size={22} />
                <span className="text-[15px] font-medium tracking-tight text-white/90">
                  Schedule a call
                </span>
              </div>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full border ${darkMode ? "border-zinc-700 hover:border-cyan-400" : "border-zinc-300 hover:border-cyan-500"} transition-all group`}
              >
                <FiChevronRight
                  className="text-white group-hover:text-cyan-400 transition-colors"
                  size={20}
                />
              </a>
            </div>

            <h1 className="text-6xl md:text-6xl font-bold mb-2 tracking-tighter leading-[0.9] text-white">
              John Michael Macaraig
            </h1>
            <h2
              className={`text-3xl ${theme.subText} mb-14 font-light tracking-tight`}
            >
              Full-Stack Software Developer
            </h2>

            <div
              className={`flex flex-wrap gap-10 text-[11px] ${theme.subText} uppercase tracking-[0.2em] mb-16 border-b ${theme.border} pb-10`}
            >
              <a
                href="#"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <FiGithub size={16} /> GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <FiMail size={16} /> Email
              </a>
            </div>

            <p
              className={`text-xl ${darkMode ? "text-zinc-400" : "text-zinc-600"} leading-relaxed max-w-2xl font-light`}
            >
              I am a Manila-based full-stack software developer with four years
              of professional experience building enterprise-grade systems. I
              specialize in C#, .NET, and React, focusing on clean architecture
              and modular designs.
            </p>
          </section>

          {/* Work Experience */}
          <section className="space-y-16">
            <h3 className="text-4xl font-bold tracking-tighter uppercase opacity-90">
              Work Experience
            </h3>
            <div
              className={`relative pl-10 border-l ${theme.border} space-y-14`}
            >
              <div className="group">
                <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full left-[-5.5px] top-3 shadow-[0_0_12px_#3b82f6]"></div>
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-lg font-bold tracking-wider uppercase">
                    Enterprise Systems Specialist
                  </h4>
                  <span
                    className={`${theme.subText} text-[11px] tabular-nums tracking-widest`}
                  >
                    2022 — Present
                  </span>
                </div>
                <p
                  className={`text-base ${darkMode ? "text-zinc-500" : "text-zinc-600"} leading-relaxed max-w-xl`}
                >
                  Lead the development and migration of{" "}
                  <strong>IPORTALv2</strong>, a centralized login and system
                  management tool.
                </p>
              </div>

              <div className="group opacity-60 hover:opacity-100 transition-opacity">
                <div
                  className={`absolute w-2.5 h-2.5 ${darkMode ? "bg-zinc-800" : "bg-zinc-200"} rounded-full left-[-5.5px] top-3`}
                ></div>
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="text-lg font-bold tracking-wider uppercase">
                    BPS Ticketing System
                  </h4>
                  <span
                    className={`${theme.subText} text-[11px] tracking-widest`}
                  >
                    Project
                  </span>
                </div>
                <p
                  className={`text-base ${darkMode ? "text-zinc-500" : "text-zinc-600"} leading-relaxed max-w-xl`}
                >
                  Developed a service help desk featuring automated push
                  notifications and performance dashboards.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
