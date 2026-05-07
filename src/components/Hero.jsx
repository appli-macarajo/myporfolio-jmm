import { useNavigate } from "react-router-dom";
const Hero = ({ darkMode }) => {
  const navigate = useNavigate();
  return (
    <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
      <div
        className="relative inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-xs mb-8 overflow-hidden transition-all duration-500
    /* Background & Flowing Light */
    bg-black/20 dark:bg-white/5 
    bg-linear-to-r from-transparent via-[#89dfed]/15 to-transparent animate-flow-cyan
    /* Border Style */
    border border-[#89dfed]/20 dark:border-[#89dfed]/30"
      >
        {/* Left Text: Bold White */}
        <span className="relative z-10 font-bold text-white tracking-wide">
          Development
        </span>

        {/* The canonical w-px separator */}
        <span className="relative z-10 h-3 w-px bg-[#89dfed]/30"></span>

        {/* Right Text: Glowing Cyan */}
        <span className="relative z-10 font-medium text-[#89dfed] brightness-110">
          Featured work
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
        Building bridges between <br />
        <span className="text-gray-500">design and code</span>
      </h1>

      <p
        className={`text-custom-para font-geist max-w-3xl mx-auto mb-10 leading-relaxed tracking-tight transition-colors duration-500 ${
          darkMode ? "text-white/70" : "text-gray-600"
        }`}
      >
        <span>
          I'm JM, a Full Stack Developer at{" "}
          <span style={{ fontWeight: 700, fontSize: "16px" }}>
            Brother Industries Philippines
          </span>{" "}
          , where I craft intuitive user experiences and build projects.
        </span>
      </p>

      <button
        onClick={() => navigate("/about")}
        className="group inline-flex items-center gap-3 px-3 py-2 rounded-full border transition-all duration-300 cursor-pointer 
        border-black/10 bg-black/0 hover:bg-black/10 hover:border-black/20
        dark:border-white/10 dark:bg-white/0 dark:hover:bg-white/10 dark:hover:border-white/20"
      >
        <img
          src="1X1.png"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Simplified: text-black by default, text-white when parent has .dark class */}
        <span className="text-sm font-medium text-black dark:text-white">
          About — John Michael Macaraig
        </span>

        <span
          className="
          
          text-black dark:text-white transition-all duration-300
          
          
          opacity-0 -ml-2 
          
        
          group-hover:opacity-60 group-hover:ml-2.5
        "
        >
          ›
        </span>
      </button>
    </section>
  );
};

export default Hero;
