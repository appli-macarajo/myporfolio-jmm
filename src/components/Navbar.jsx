import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiBriefcase, FiSun, FiMoon } from "react-icons/fi";

// Ensure the props are wrapped in { } for destructuring
const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  // Helper to handle the toggle safely
  const toggleTheme = () => {
    console.log("Dark mode is now:", !darkMode); // If this shows in console, your button is fine.
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-0.5 backdrop-blur-xl border px-1.5 py-1.5 rounded-full shadow-2xl transition-all duration-500
        ${darkMode ? "bg-black/40 border-white/10" : "bg-white/70 border-black/5 shadow-lg"}`}
      >
        <Link to="/">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition-all duration-300
            ${
              location.pathname === "/"
                ? darkMode
                  ? "bg-white/10 text-white"
                  : "bg-black/5 text-black"
                : darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-black"
            }`}
          >
            <FiHome size={16} />
          </div>
        </Link>

        <div
          className={`w-px h-4 mx-1 transition-colors duration-500 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
        />

        <div className="flex items-center">
          <NavItem
            to="/about"
            icon={<FiUser />}
            label="About"
            active={location.pathname === "/about"}
            darkMode={darkMode}
          />
          <NavItem
            to="/work"
            icon={<FiBriefcase />}
            label="Work"
            active={location.pathname === "/work"}
            darkMode={darkMode}
          />
        </div>

        <div
          className={`w-px h-4 mx-1 transition-colors duration-500 ${darkMode ? "bg-white/10" : "bg-black/10"}`}
        />

        {/* Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer
            ${darkMode ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:text-black hover:bg-black/5"}`}
        >
          {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, active, to, darkMode }) => (
  <Link
    to={to}
    className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
    ${
      active
        ? darkMode
          ? "text-white"
          : "text-black"
        : darkMode
          ? "text-gray-400 hover:text-white"
          : "text-gray-500 hover:text-black"
    }`}
  >
    <div
      className={`absolute inset-0 rounded-full transition-all duration-300 -z-10
      ${
        active
          ? darkMode
            ? "bg-white/10"
            : "bg-black/5"
          : darkMode
            ? "group-hover:bg-white/5"
            : "group-hover:bg-black/5"
      }`}
    />
    <span className="text-base">{icon}</span>
    <span className="font-geist">{label}</span>
  </Link>
);

export default Navbar;
