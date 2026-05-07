import { useState, useEffect, useMemo } from "react"; // Added useMemo for efficiency
import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ticketingImg from "../assets/ticketing.png";
import ticketingImg1 from "../assets/ticketing0.png";
import ticketingImg2 from "../assets/ticketing2.png";
import ticketingImg3 from "../assets/ticketing3.png";
import tmsImg from "../assets/tms.png";
import tmsImg1 from "../assets/tms0.png";
import tmsImg2 from "../assets/tms2.png";
import tmsImg3 from "../assets/tms3.png";
import portalImg from "../assets/iportalv2.png";
import bimmsImg from "../assets/bimms0.png";

import { useNavigate } from "react-router-dom";

// SUB-COMPONENT FOR INDIVIDUAL PROJECT CARDS
const ProjectCard = ({ project, theme }) => {
  const navigate = useNavigate();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. DEFINE DATA FIRST (Fixes the Reference Error)
  const images = useMemo(
    () => project.images || [project.image],
    [project.images, project.image],
  );

  // 2. DYNAMIC AUTO-SLIDE EFFECT
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    // Determine delay: 3500ms for index 0, 1500ms for others
    const delay = currentImgIndex === 0 ? 5000 : 3000;

    const timer = setTimeout(() => {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentImgIndex, images.length, isPaused]); // Added currentImgIndex as a dependency

  const handleDetails = (e) => {
    e.preventDefault();
    navigate(`/work/${project.slug}`);
  };

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="group relative flex flex-col gap-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`relative aspect-video rounded-2xl overflow-hidden border ${theme.border} transition-all duration-700 hover:border-[#89dfed]/40`}
      >
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

        {images.length > 1 && (
          <div className="absolute inset-0 z-30 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-zinc-900/50 border border-white/10 text-white backdrop-blur-md hover:bg-zinc-900/80 transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-zinc-900/50 border border-white/10 text-white backdrop-blur-md hover:bg-zinc-900/80 transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Using key on img helps React track swaps for smoother transitions if needed */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImgIndex} // Required for AnimatePresence to track swaps
            src={images[currentImgIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-contain scale-100 group-hover:scale-105"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="w-1/3 flex gap-2 mx-auto z-10 px-2 mt-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i === currentImgIndex
                  ? "bg-[#89dfed] shadow-[0_0_8px_#89dfed]"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-[#89dfed] transition-colors">
            {project.title}
          </h3>
          <p
            className={`${theme.subText} text-lg font-light leading-relaxed mb-6`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded border ${theme.border} ${theme.card} ${theme.subText}`}
              >
                {tag}
              </span>
            ))}

            <button
              onClick={handleDetails}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#89dfed] ml-2 flex items-center gap-1 hover:brightness-125 transition-all cursor-pointer group/ov"
            >
              Read Overview
              <ChevronRight
                size={14}
                className="transition-transform duration-300 group-hover/ov:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// MAIN COMPONENT
const Work = ({ darkMode = true }) => {
  const [currentTime, setCurrentTime] = useState("");

  // FORCE SCROLL TO TOP ON RELOAD
  useEffect(() => {
    // Standard approach
    window.scrollTo(0, 0);

    // Some browsers require a slight delay if the content is still rendering
    // or if they have "Scroll Restoration" enabled.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 1.0, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40, filter: "blur(20px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
    },
  };

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

  const theme = {
    navText: darkMode ? "text-zinc-500/50" : "text-zinc-400",
    activeText: darkMode ? "text-white" : "text-black",
    border: darkMode ? "border-zinc-800/40" : "border-zinc-200",
    subText: darkMode ? "text-zinc-500" : "text-zinc-400",
    card: darkMode ? "bg-zinc-900/40" : "bg-zinc-100/50",
  };

  const projects = [
    {
      slug: "inhouse-ticketing-support-system",
      title: "Inhouse Ticketing Support System",
      description:
        "Centralized ticketing and approval system for enterprise-level resource management.",
      tags: ["ASP.NET Core", "SQL Server", "React JS"],
      images: [ticketingImg1, ticketingImg, ticketingImg2, ticketingImg3],
      link: "#",
    },
    {
      title: "Training Management System",
      description:
        "A comprehensive platform for managing corporate training programs, tracking employee certifications, and streamlining educational workflows with automated reporting.",
      tags: ["Vanilla PHP,", "SQL Server", "Bootstrap", "HTML", "CSS"],
      images: [tmsImg1, tmsImg, tmsImg2, tmsImg3],
      link: "#",
    },
    {
      title: "IPORTAL System",
      description:
        "A lightweight, high-performance gateway designed to centralize access to all in-house applications. Functioning similarly to a professional launcher, it streamlines workflows by providing a faster, unified entry point for internal systems.",
      tags: ["C#", "Winforms(MVC)", "SQL Server"],
      images: [portalImg],
      link: "#",
    },
    {
      title: "Budget & Indirect Material Management System",
      description:
        "An end-to-end inventory and procurement governance platform. It monitors indirect material stock levels and automates the full lifecycle of a request—from initial demand and multi-stage approval (Budget Controller to Senior Management) to final issuing, ensuring strict budget compliance and audit readiness.",
      tags: ["C#", "ASP.NET Core MVC,", "React JS", "PostgreSQL"],
      images: [bimmsImg],
      link: "#",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden pb-20"
    >
      <motion.div
        variants={itemVariants}
        className="fixed top-6 left-6 text-xs text-gray-500 uppercase tracking-widest z-50"
      >
        Asia/Manila
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="fixed top-6 right-6 text-xs text-gray-500 font-mono z-50"
      >
        {currentTime}
      </motion.div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-125 bg-[#89dfed]/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto pt-40 px-8 md:px-16">
        <motion.div variants={itemVariants} className="text-center mb-24">
          <div className="relative inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-[11px] mb-8 overflow-hidden bg-black/20 dark:bg-white/5 border border-[#89dfed]/20">
            <span className="font-bold text-white tracking-wide uppercase">
              Portfolio
            </span>
            <span className="h-3 w-px bg-[#89dfed]/30"></span>
            <span className="font-medium text-[#89dfed] brightness-110 uppercase">
              Selected Projects
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Recent Work
          </h1>
          <p className={`${theme.subText} text-lg font-light max-w-xl mx-auto`}>
            A collection of enterprise solutions and personal experiments built
            with performance in mind.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Work;
