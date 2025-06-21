import { useState, useEffect } from "react";
import {
    FaHome,
    FaLaptopCode,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaEnvelope,
    FaBars,
} from "react-icons/fa";

export default function Header({ refs }) {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll to update active link
    useEffect(() => {
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
    }, [refs]);

    const scrollToSection = (sectionId) => {
        const element = refs[sectionId]?.current;
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActiveLink(sectionId);
            setIsMenuOpen(false);
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
                        {/* Mobile Menu Button */}
                        <div className="flex justify-between items-center md:hidden px-2">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-white font-bold"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white p-2"
                            >
                                <FaBars />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div
                            className={`${
                                isMenuOpen ? "block" : "hidden"
                            } md:block`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                                {navLinks.map(({ id, icon: Icon, text }) => (
                                    <button
                                        key={id}
                                        onClick={() => scrollToSection(id)}
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
