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
import * as Tooltip from "@radix-ui/react-tooltip";

export default function Header({
    refs,
    viewMode,
    setViewMode,
    setCurrentSection,
}) {
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showGuideModal, setShowGuideModal] = useState(false);

    // Check if user has chosen not to show the guide again
    const shouldShowGuide = () => {
        return localStorage.getItem("portfolio-guide-disabled") !== "true";
    };

    // Handle keyboard navigation for single page view
    useEffect(() => {
        if (viewMode !== "single") return;

        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                navigateToPreviousSection();
            } else if (
                event.key === "ArrowRight" ||
                event.key === "ArrowDown"
            ) {
                event.preventDefault();
                navigateToNextSection();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [viewMode, activeLink]);

    const navigateToNextSection = () => {
        const currentIndex = navLinks.findIndex(
            (link) => link.id === activeLink
        );
        const nextIndex = (currentIndex + 1) % navLinks.length;
        const nextSection = navLinks[nextIndex].id;
        handleNavigation(nextSection);
    };

    const navigateToPreviousSection = () => {
        const currentIndex = navLinks.findIndex(
            (link) => link.id === activeLink
        );
        const prevIndex =
            currentIndex === 0 ? navLinks.length - 1 : currentIndex - 1;
        const prevSection = navLinks[prevIndex].id;
        handleNavigation(prevSection);
    };

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

        // Show guide modal only if user hasn't disabled it
        if (shouldShowGuide()) {
            setShowGuideModal(true);
        }
    };

    const closeGuideModal = () => {
        setShowGuideModal(false);
    };

    const disableGuideModal = () => {
        localStorage.setItem("portfolio-guide-disabled", "true");
        setShowGuideModal(false);
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
                                className="relative group flex-shrink-0 px-3 py-2 rounded-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-1 text-reveal whitespace-nowrap">
                                    {/* Animated gradient text */}
                                    <span className="gradient-text-animated font-bold text-base">
                                        Mohamed
                                    </span>
                                    <span className="text-white font-bold text-base">
                                        Mounir
                                    </span>
                                    {/* Animated dot */}
                                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float"></div>
                                </div>
                                {/* Hover effect - line */}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></div>
                            </button>
                            <div className="flex items-center gap-1">
                                {/* View Mode Toggle with Tooltip */}
                                <Tooltip.Provider>
                                    <Tooltip.Root>
                                        <Tooltip.Trigger asChild>
                                            <button
                                                onClick={toggleViewMode}
                                                className={`p-2 rounded-full transition-all duration-300 hover:scale-110
                                                    ${
                                                        viewMode === "scroll"
                                                            ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30"
                                                            : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30"
                                                    }
                                                    hover:shadow-lg
                                                `}
                                            >
                                                {viewMode === "scroll" ? (
                                                    <FaList className="text-blue-400 text-sm" />
                                                ) : (
                                                    <FaThLarge className="text-purple-400 text-sm" />
                                                )}
                                            </button>
                                        </Tooltip.Trigger>
                                        <Tooltip.Portal>
                                            <Tooltip.Content
                                                className="px-3 py-2 bg-gray-800 text-white text-xs rounded-lg shadow-xl z-50 min-w-[180px] max-w-[240px] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
                                                sideOffset={5}
                                            >
                                                <div className="font-semibold text-blue-300 mb-1">
                                                    {viewMode === "scroll"
                                                        ? "Switch to Single Page View"
                                                        : "Switch to Scroll View"}
                                                </div>
                                                <div className="text-gray-300 text-xs leading-relaxed">
                                                    {viewMode === "scroll"
                                                        ? "View one section at a time for a focused experience"
                                                        : "Scroll through all sections continuously"}
                                                </div>
                                                <Tooltip.Arrow className="fill-gray-800" />
                                            </Tooltip.Content>
                                        </Tooltip.Portal>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
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
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0 md:max-w-none overflow-hidden">
                                {/* Creative Desktop Logo */}
                                <div className="hidden md:block">
                                    <button
                                        onClick={() => handleNavigation("home")}
                                        className="relative group px-2 lg:px-3 py-2 rounded-full transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-1 lg:gap-2 text-reveal whitespace-nowrap">
                                            {/* Animated icon */}
                                            <div className="relative z-10">
                                                <div className="w-4 lg:w-5 h-4 lg:h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                                                    <span className="text-white text-xs font-bold">
                                                        MM
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Text with gradient */}
                                            <div className="relative z-10">
                                                <span className="gradient-text-animated font-bold text-xs lg:text-sm">
                                                    Mohamed Mounir
                                                </span>
                                                <div className="text-gray-400 text-xs font-medium hidden xl:block">
                                                    Frontend Developer
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                {/* View Mode Toggle for Desktop */}
                                <Tooltip.Provider>
                                    <Tooltip.Root>
                                        <Tooltip.Trigger asChild>
                                            <button
                                                onClick={toggleViewMode}
                                                className={`px-2 lg:px-3 py-2 md:py-1.5 rounded-full text-xs lg:text-sm font-medium
                                                  transition-all duration-300 flex items-center gap-1 lg:gap-2
                                                  ${
                                                      viewMode === "scroll"
                                                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30"
                                                          : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30"
                                                  }
                                                  hover:scale-105 hover:shadow-lg
                                                `}
                                            >
                                                {viewMode === "scroll" ? (
                                                    <FaThLarge className="text-purple-400 text-sm" />
                                                ) : (
                                                    <FaList className="text-blue-400 text-sm" />
                                                )}
                                                <span className="hidden 2xl:inline font-semibold whitespace-nowrap">
                                                    {viewMode === "scroll"
                                                        ? "Single Page"
                                                        : "Scroll View"}
                                                </span>
                                            </button>
                                        </Tooltip.Trigger>
                                        <Tooltip.Portal>
                                            <Tooltip.Content
                                                className="px-4 py-3 bg-gray-800 text-white text-sm rounded-lg shadow-xl z-50 min-w-[220px] max-w-[300px] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
                                                sideOffset={5}
                                            >
                                                <div className="font-semibold text-blue-300 mb-1">
                                                    {viewMode === "scroll"
                                                        ? "Switch to Single Page View"
                                                        : "Switch to Scroll View"}
                                                </div>
                                                <div className="text-gray-300 text-xs leading-relaxed">
                                                    {viewMode === "scroll"
                                                        ? "View one section at a time for a focused experience"
                                                        : "Scroll through all sections continuously"}
                                                </div>
                                                <Tooltip.Arrow className="fill-gray-800" />
                                            </Tooltip.Content>
                                        </Tooltip.Portal>
                                    </Tooltip.Root>
                                </Tooltip.Provider>

                                {navLinks.map(({ id, icon: Icon, text }) => (
                                    <button
                                        key={id}
                                        onClick={() => handleNavigation(id)}
                                        className={`px-2 lg:px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-xs lg:text-sm font-medium
                      transition-all duration-300 flex items-center gap-1 lg:gap-2
                      hover:bg-white/10 
                      ${
                          activeLink === id
                              ? "bg-white/15 text-white"
                              : "text-gray-300 hover:text-white"
                      }
                    `}
                                    >
                                        <Icon
                                            className={`text-sm lg:text-base ${
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

            {/* Guide Modal */}
            {showGuideModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700 max-w-md w-full p-6 relative">
                        {/* Close button */}
                        <button
                            onClick={closeGuideModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Guide Content */}
                        <div className="text-center">
                            {/* Animated Icon */}
                            <div className="mb-6 flex justify-center">
                                {viewMode === "scroll" ? (
                                    <div className="relative">
                                        {/* Scroll icon with animated cursor */}
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                                            <FaList className="text-white text-2xl" />
                                        </div>
                                        {/* Animated cursor */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce">
                                            <svg
                                                className="w-4 h-4 mx-auto mt-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M7 2l3 2h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3l-3 3v-3H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative">
                                        {/* Single page icon with animated hand */}
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                                            <FaThLarge className="text-white text-2xl" />
                                        </div>
                                        {/* Animated hand pointing */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-bounce">
                                            <svg
                                                className="w-4 h-4 mx-auto mt-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M7 2l3 2h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3l-3 3v-3H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4">
                                {viewMode === "scroll"
                                    ? "Scroll View Activated!"
                                    : "Single Page View Activated!"}
                            </h3>

                            {/* Step-by-step guide */}
                            <div className="space-y-4 text-left">
                                {viewMode === "scroll" ? (
                                    <>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    1
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Scroll through all sections
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Use your mouse wheel or
                                                    scroll bar to navigate
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    2
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Use navigation menu
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Click any section in the
                                                    header to jump directly
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    3
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Continuous experience
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    All sections flow seamlessly
                                                    together
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    1
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Focus on one section
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    View content without
                                                    distractions
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    2
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Use navigation buttons
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Click arrows or section
                                                    names to switch
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    3
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Keyboard shortcuts
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Use ← → arrow keys to
                                                    navigate between sections
                                                </p>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-white text-sm font-bold">
                                                    4
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    Circular navigation
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    Go from last to first
                                                    section seamlessly
                                                </p>
                                            </div>
                                        </div> */}
                                    </>
                                )}
                            </div>

                            {/* Action buttons */}
                            <div className="mt-8 flex gap-3">
                                <button
                                    onClick={closeGuideModal}
                                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                                >
                                    Got it!
                                </button>
                                <button
                                    onClick={disableGuideModal}
                                    className="px-4 py-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    Don&apos;t show again
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
