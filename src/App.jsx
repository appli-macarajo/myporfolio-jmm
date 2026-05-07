import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation(); // Required for AnimatePresence to track route changes

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "dark bg-dark-gradient text-white"
          : "bg-light-gradient text-slate-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-20">
        {/* mode="wait" ensures the old page fades out before the new one fades in */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/work" element={<Work darkMode={darkMode} />} />
            <Route
              path="/work/:id"
              element={<ProjectDetails darkMode={darkMode} />}
            />
            <Route path="/blog" element={<Home darkMode={darkMode} />} />
            <Route path="/gallery" element={<Home darkMode={darkMode} />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
