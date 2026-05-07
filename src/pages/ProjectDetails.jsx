import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

// Import your project assets
import ticketingImg from "../assets/ticketing.png";
import ticketingImg2 from "../assets/ticketing2.png";
import ticketingImg3 from "../assets/ticketing3.png";

const ProjectDetails = ({ darkMode = true }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");

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

  // Updated Data Structure to include Features
  const projects = [
    {
      slug: "inhouse-ticketing-support-system",
      title: "Inhouse Ticketing Support System",
      date: "APRIL 18, 2024",
      author: "John Michael Macaraig",
      overview:
        "Development of a centralized ticketing and approval system using ASP.NET Core for the back-end and React for the front-end to streamline enterprise resource management.",
      features: [
        {
          title: "Automated Workflow",
          detail:
            "Built an automated approval routing system that directs tickets to specific department heads based on resource category.",
        },
        {
          title: "Real-time Tracking",
          detail:
            "Integrated SignalR for real-time status updates, ensuring users see the immediate progress of their support requests.",
        },
        {
          title: "SQL Server Optimization",
          detail:
            "Designed a relational database schema optimized for high-concurrency reporting and historical data auditing.",
        },
        {
          title: "Role-Based Access Control",
          detail:
            "Implemented secure JWT-based authentication with granular permissions for employees, managers, and IT admins.",
        },
      ],
      tags: ["ASP.NET Core", "SQL Server", "React JS"],
      images: [ticketingImg, ticketingImg2, ticketingImg3],
    },
    {
      slug: "portfolio-v1",
      title: "Portfolio v1",
      date: "MARCH 10, 2024",
      author: "John Michael Macaraig",
      overview:
        "Development of a high-performance personal brand identity and portfolio using modern web technologies and fluid motion design.",
      features: [
        {
          title: "Framer Motion",
          detail:
            "Utilized complex staggered animations and layout transitions to create a premium, interactive user experience.",
        },
        {
          title: "Tailwind v4 Integration",
          detail:
            "Leveraged the latest Tailwind CSS features for rapid, maintainable styling and design system consistency.",
        },
        {
          title: "Responsive Architecture",
          detail:
            "Ensured a flawless experience across all devices using fluid typography and mobile-first container logic.",
        },
      ],
      tags: ["Vite", "Tailwind CSS v4", "Framer Motion"],
      images: ["/projects/portfolio.png"],
    },
  ];

  const project = projects.find((p) => p.slug === id);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const theme = {
    subText: darkMode ? "text-zinc-400" : "text-zinc-600",
    border: darkMode ? "border-zinc-800/40" : "border-zinc-200",
    card: darkMode ? "bg-zinc-900/40" : "bg-zinc-100/50",
  };

  if (!project)
    return (
      <div className="text-white p-20 text-center">Project not found.</div>
    );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden pb-32"
    >
      {/* CLOCK & LOCATION HEADERS */}
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

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-125 bg-[#89dfed]/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto pt-40 px-8">
        {/* BACK BUTTON */}
        <motion.button
          variants={itemVariants}
          onClick={() => navigate(-1)}
          className={`group mb-12 flex items-center gap-2 ${theme.subText} hover:text-[#89dfed] transition-colors cursor-pointer w-fit`}
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] uppercase tracking-[0.2em]">
            Back to Work
          </span>
        </motion.button>

        {/* TITLE SECTION */}
        <div className="mb-20">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none"
          >
            {project.title}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            {/* Profile Image from public/1X1.png */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(137,223,237,0.2)]">
              <img
                src="/1X1.png"
                alt="John Michael Macaraig"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://ui-avatars.com/api/?name=John+Michael&background=89dfed&color=fff";
                }}
              />
            </div>

            <span className="text-sm font-light text-zinc-300">
              John Michael Macaraig{" "}
              <span className="mx-2 text-zinc-700">|</span>{" "}
              <span className="text-[#89dfed]">Lead Developer</span>
            </span>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          variants={itemVariants}
          className={`relative rounded-3xl overflow-hidden border ${theme.border} shadow-2xl mb-24`}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
        </motion.div>

        {/* CONTENT SECTIONS (MATCHING YOUR SCREENSHOT) */}
        <motion.div variants={itemVariants} className="space-y-16">
          {/* OVERVIEW SECTION */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-3xl">
              {project.overview}
            </p>
          </section>

          {/* KEY FEATURES SECTION */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
            <ul className="space-y-6">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-4 group">
                  <span className="text-[#89dfed] mt-1.5 text-lg">•</span>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light">
                    <strong className="text-white font-bold">
                      {feature.title}:
                    </strong>{" "}
                    {feature.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* TAGS (Moved to bottom for cleaner flow) */}
          <section className="pt-8 border-t border-zinc-800/50">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 ${theme.card} border ${theme.border} rounded-lg text-[10px] font-bold uppercase tracking-widest text-zinc-400`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default ProjectDetails;
