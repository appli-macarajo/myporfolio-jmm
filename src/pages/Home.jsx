import { motion } from "framer-motion";
import Hero from "../components/Hero";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.0,
        staggerChildren: 0.3,
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen relative"
    >
      {/* 1. Asia/Manila Info */}
      <motion.div
        variants={itemVariants}
        className="absolute top-6 left-6 text-xs text-gray-500 uppercase tracking-widest"
      >
        Asia/Manila
      </motion.div>

      {/* 2. Real-time Clock */}
      <motion.div
        variants={itemVariants}
        className="absolute top-6 right-6 text-xs text-gray-500 font-mono"
      >
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </motion.div>

      {/* FIXED: Removed flex-centering which was causing the "top margin" look */}
      <main className="pt-0 px-6 md:px-12">
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Home;
