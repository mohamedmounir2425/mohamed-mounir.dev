import { useState, useEffect } from "react";
import {
    FaHome,
    FaLaptopCode,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaEnvelope,
    FaBars,
    FaThLarge,
    FaList,
} from "react-icons/fa";

export default function Header({
    refs,
    viewMode,
    setViewMode,
    setCurrentSection,
}) {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Handle scroll to update active link (only in scroll mode)
    useEffect(() => {
        if (viewMode !== "scroll") return;

        const handleScroll = () => {
            const sections = Object.keys(refs);
            const scrollPosition = window.scrollY + 100; // Offset for header

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = refs[section].current;
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [refs, viewMode]);

    const handleNavigation = (sectionId) => {
        if (viewMode === "scroll") {
            // Scroll mode - smooth scroll to section
            const element = refs[sectionId]?.current;
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                setActiveLink(sectionId);
            }
        } else {
            // Single page mode - switch to section
            setCurrentSection(sectionId);
            setActiveLink(sectionId);
        }
        setIsMenuOpen(false);
    };

    const toggleViewMode = () => {
        const newMode = viewMode === "scroll" ? "single" : "scroll";
        setViewMode(newMode);

        // Reset to home when switching modes
        setCurrentSection("home");
        setActiveLink("home");

        // Scroll to top when switching to single mode
        if (newMode === "single") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleTooltipShow = () => {
        setShowTooltip(true);
    };

    const handleTooltipHide = () => {
        setShowTooltip(false);
    };

    const getTooltipContent = () => {
        if (viewMode === "scroll") {
            return {
                title: "Switch to Single Page View",
                description:
                    "View one section at a time for a focused experience",
            };
        } else {
            return {
                title: "Switch to Scroll View",
                description: "Scroll through all sections continuously",
            };
        }
    };

    const navLinks = [
        { id: "home", icon: FaHome, text: "Home" },
        { id: "skills", icon: FaCode, text: "Skills" },
        { id: "experience", icon: FaBriefcase, text: "Experience" },
        { id: "education", icon: FaGraduationCap, text: "Education" },
        { id: "projects", icon: FaLaptopCode, text: "Projects" },
        { id: "contact", icon: FaEnvelope, text: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
            <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
                <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
                    <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
                        {/* Mobile Menu Button and View Toggle */}
                        <div className="flex justify-between items-center md:hidden px-2">
                            <button
                                onClick={() => handleNavigation("home")}
                                className="text-white font-bold"
                            >
                                Portfolio
                            </button>
                            <div className="flex items-center gap-2">
                                {/* View Mode Toggle with Tooltip */}
                                <div className="relative">
                                    <button
                                        onClick={toggleViewMode}
                                        onMouseEnter={handleTooltipShow}
                                        onMouseLeave={handleTooltipHide}
                                        onTouchStart={handleTooltipShow}
                                        onTouchEnd={handleTooltipHide}
                                        className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110
                                            ${
                                                viewMode === "scroll"
                                                    ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30"
                                                    : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30"
                                            }
                                            hover:shadow-lg
                                        `}
                                    >
                                        {viewMode === "scroll" ? (
                                            <FaList className="text-blue-400" />
                                        ) : (
                                            <FaThLarge className="text-purple-400" />
                                        )}
                                    </button>

                                    {/* Mobile Tooltip */}
                                    {showTooltip && (
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-lg shadow-xl z-50 min-w-[200px] max-w-[280px]">
                                            <div className="font-semibold text-blue-300 mb-1">
                                                {getTooltipContent().title}
                                            </div>
                                            <div className="text-gray-300 text-xs leading-relaxed">
                                                {
                                                    getTooltipContent()
                                                        .description
                                                }
                                            </div>
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-white p-2"
                                >
                                    <FaBars />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div
                            className={`${
                                isMenuOpen ? "block" : "hidden"
                            } md:block`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                                {/* View Mode Toggle for Desktop */}
                                <div className="hidden md:block relative">
                                    <button
                                        onClick={toggleViewMode}
                                        onMouseEnter={handleTooltipShow}
                                        onMouseLeave={handleTooltipHide}
                                        className={`px-4 py-2 md:py-1.5 rounded-full text-sm font-medium
                                          transition-all duration-300 flex items-center gap-2
                                          ${
                                              viewMode === "scroll"
                                                  ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30"
                                                  : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30"
                                          }
                                          hover:scale-105 hover:shadow-lg
                                        `}
                                    >
                                        {viewMode === "scroll" ? (
                                            <FaThLarge className="text-purple-400" />
                                        ) : (
                                            <FaList className="text-blue-400" />
                                        )}
                                        <span className="hidden lg:inline font-semibold">
                                            {viewMode === "scroll"
                                                ? "Single Page"
                                                : "Scroll View"}
                                        </span>
                                    </button>

                                    {/* Desktop Tooltip */}
                                    {showTooltip && (
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-gray-800 text-white text-sm rounded-lg shadow-xl z-50 min-w-[220px] max-w-[300px]">
                                            <div className="font-semibold text-blue-300 mb-1">
                                                {getTooltipContent().title}
                                            </div>
                                            <div className="text-gray-300 text-xs leading-relaxed">
                                                {
                                                    getTooltipContent()
                                                        .description
                                                }
                                            </div>
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                                        </div>
                                    )}
                                </div>

                                {navLinks.map(({ id, icon: Icon, text }) => (
                                    <button
                                        key={id}
                                        onClick={() => handleNavigation(id)}
                                        className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                          activeLink === id
                              ? "bg-white/15 text-white"
                              : "text-gray-300 hover:text-white"
                      }
                    `}
                                    >
                                        <Icon
                                            className={`text-base ${
                                                activeLink === id
                                                    ? "scale-110"
                                                    : ""
                                            }`}
                                        />
                                        <span className="inline">{text}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <style>{`        @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            animation: gradient-x 3s linear infinite;
            background-size: 200% 200%;
          }
        `}</style>
        </header>
    );
}
