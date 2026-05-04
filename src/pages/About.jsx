import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  BiCodeCurly,
  BiTerminal,
  BiCodeAlt,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoPostgresql,
  BiServer,
} from "react-icons/bi";

const About = ({ darkMode = true }) => {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [currentTime, setCurrentTime] = useState("");

  // 1. Framer Motion Animation Variants (EXACT MATCH WITH HOME)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.0, // Matched to Home
        staggerChildren: 0.3, // Matched to Home
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // 2. Real-time Clock Logic
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 3. Theme Configuration
  const theme = {
    navText: darkMode ? "text-zinc-500/50" : "text-zinc-400",
    activeText: darkMode ? "text-white" : "text-black",
    border: darkMode ? "border-zinc-800/40" : "border-zinc-200",
    subText: darkMode ? "text-zinc-500" : "text-zinc-400",
    card: darkMode ? "bg-zinc-900/40" : "bg-zinc-100/50",
  };

  // 4. Scroll Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setActiveSection(entry.target.getAttribute("id"));
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const techSkills = {
    frontend: [
      { name: "React", icon: <BiLogoReact className="text-[#61dafb]" /> },
      { name: "JS", icon: <BiLogoJavascript className="text-[#f7df1e]" /> },
      { name: "HTML5", icon: <BiLogoHtml5 className="text-[#e34f26]" /> },
      { name: "CSS3", icon: <BiLogoCss3 className="text-[#1572b6]" /> },
      {
        name: "Bootstrap",
        icon: <BiLogoBootstrap className="text-[#7952b3]" />,
      },
    ],
    backend: [
      { name: "C#", icon: <BiCodeCurly className="text-[#239120]" /> },
      { name: "ASP.NET", icon: <BiTerminal className="text-[#512bd4]" /> },
      { name: "PHP", icon: <BiCodeAlt className="text-[#777bb4]" /> },
      { name: "SQL Server", icon: <BiServer className="text-[#CC2927]" /> },
      {
        name: "Postgres",
        icon: <BiLogoPostgresql className="text-[#336791]" />,
      },
    ],
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden"
    >
      {/* 1. Asia/Manila Info (Exact Match) */}
      <motion.div
        variants={itemVariants}
        className="absolute top-6 left-6 text-xs text-gray-500 uppercase tracking-widest z-50"
      >
        Asia/Manila
      </motion.div>

      {/* 2. Real-time Clock (Exact Match) */}
      <motion.div
        variants={itemVariants}
        className="absolute top-6 right-6 text-xs text-gray-500 font-mono z-50"
      >
        {currentTime}
      </motion.div>

      {/* 3. BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-125 bg-[#89dfed]/5 blur-[120px] rounded-full opacity-50" />
      </div>

      {/* SIDEBAR NAV */}
      <nav
        className={`fixed left-12 top-[60%] -translate-y-1/2 hidden lg:flex flex-col gap-8 text-[11px] uppercase tracking-[0.2em] ${theme.navText} z-50`}
      >
        {["Introduction", "Work", "Studies", "Skills"].map((id) => {
          const isActive = activeSection === id;
          return (
            <div
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group flex items-center gap-4 cursor-pointer transition-all duration-300 ${isActive ? theme.activeText : "hover:text-zinc-300"}`}
            >
              <span
                className={`h-px transition-all duration-300 ${isActive ? "w-8 bg-[#89dfed]" : `w-4 ${theme.border} group-hover:w-6 group-hover:bg-zinc-400`}`}
              ></span>
              <span className={isActive ? "font-bold" : ""}>{id}</span>
            </div>
          );
        })}
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 pt-40 px-8 md:px-16">
        {/* PROFILE SIDEBAR */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-4 flex flex-col items-center md:items-end"
        >
          <div className="sticky top-40 flex flex-col items-center w-fit">
            <div
              className={`w-44 h-44 rounded-full border ${theme.border} p-1.5`}
            >
              <div className="w-full h-full rounded-full overflow-hidden border border-[#89dfed]/30">
                <img
                  src="/1X1.png"
                  alt="Profile"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4 text-center">
              <div className="flex justify-center gap-2">
                {["English", "Filipino"].map((l) => (
                  <span
                    key={l}
                    className={`px-4 py-1.5 ${theme.card} border ${theme.border} rounded text-[10px] ${theme.subText} uppercase tracking-widest`}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTENT SECTIONS */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-8 space-y-32 pb-40"
        >
          <section id="Introduction" className="scroll-mt-40">
            <div className="relative inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-[11px] mb-10 overflow-hidden transition-all duration-500 bg-black/20 dark:bg-white/5 bg-linear-to-r from-transparent via-[#89dfed]/15 to-transparent animate-flow-cyan border border-[#89dfed]/20 dark:border-[#89dfed]/30">
              <span className="relative z-10 font-bold text-white tracking-wide uppercase">
                Development
              </span>
              <span className="relative z-10 h-3 w-px bg-[#89dfed]/30"></span>
              <span className="relative z-10 font-medium text-[#89dfed] brightness-110 uppercase">
                About Me
              </span>
            </div>

            <h1 className="text-6xl font-bold mb-4 tracking-tighter leading-none">
              John Michael Macaraig
            </h1>
            <h2 className={`text-3xl ${theme.subText} mb-12 font-light`}>
              Full-Stack Software Developer
            </h2>

            <p
              className={`text-lg ${darkMode ? "text-zinc-400" : "text-zinc-600"} leading-relaxed max-w-2xl font-light`}
            >
              I build enterprise-grade systems with a focus on{" "}
              <strong>C#, .NET, and React</strong>. Currently contributing to
              digital transformation at{" "}
              <strong>Brother Industries Philippines</strong>.
            </p>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="Work" className="scroll-mt-40">
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-12">
              Experience
            </h3>
            <div className={`relative pl-10 border-l ${theme.border}`}>
              <div className="group relative">
                <div className="absolute w-3 h-3 bg-[#89dfed] rounded-full left-[-41.5px] top-1.5 shadow-[0_0_15px_#89dfed]"></div>
                <h4 className="text-lg font-bold uppercase">
                  Full Stack Developer
                </h4>
                <p
                  className={`${theme.subText} text-xs tracking-[0.2em] uppercase mt-1 mb-4`}
                >
                  Brother Industries • 2022 — Present
                </p>
                <p className={`${theme.subText} text-base max-w-xl`}>
                  Developing scalable internal tools and centralized ticketing
                  systems.
                </p>
              </div>
            </div>
          </section>

          {/* Education SECTION */}
          <section id="Studies" className="scroll-mt-40">
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-12">
              Education Background
            </h3>
            <div className={`relative pl-10 border-l ${theme.border}`}>
              <div className="group relative">
                <div className="absolute w-3 h-3 bg-[#89dfed] rounded-full left-[-41.5px] top-1.5 shadow-[0_0_15px_#89dfed]"></div>
                <h4 className="text-lg font-bold uppercase">
                  BS Computer Engineering
                </h4>
                <p
                  className={`${theme.subText} text-xs tracking-[0.2em] uppercase mt-1 mb-4`}
                >
                  STI College San Pablo • 2015 — 2020
                </p>
                <p className={`${theme.subText} text-base max-w-xl`}>
                  Developing scalable internal tools and centralized ticketing
                  systems.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS GRID */}
          <section id="Skills" className="scroll-mt-40 space-y-16">
            <h3 className="text-3xl font-bold uppercase tracking-tighter">
              Technical Stack
            </h3>
            {Object.entries(techSkills).map(([category, skills]) => (
              <div key={category} className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 border-l-2 border-[#89dfed] pl-4">
                  {category === "frontend"
                    ? "Frontend"
                    : "Backend & Server Architecture"}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-6 rounded-xl border ${theme.border} ${theme.card} group hover:border-[#89dfed]/40 transition-all cursor-default`}
                    >
                      <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-500">
                        {skill.icon}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest opacity-60 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default About;
