import { useEffect, useState } from "react";
import { FaRocket, FaCloudDownloadAlt, FaCode } from "react-icons/fa";
import Prism from "prismjs";
import AboutMeScroll from "@/components/ui/AboutMeScroll";
import { FlipWords } from "@/components/ui/flip-words";
import GridBackground from "@/components/ui/GridBackground";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/SparklesText";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
export default function Hero() {
    const words = [
        "Frontend Developer (React & Angular)",
        "Fullstack Developer (MERN & MEAN)",
        "Node.js Backend Developer",
        "JavaScript Developer & UI/UX Enthusiast",
        "React Native Mobile Developer",
        // "MongoDB & Express Expert",
        "Git & GitHub Power User",
        "Passionate about Clean Code & Best Practices",
    ];
    const [code] = useState(`
        const profile = {
            name: 'Mohamed Mounir',
            title: 'Frontend developer | Problem Solver | Passionate Learner',
            skills: [
                'React', 'NextJS', 'Redux', 'Angular', 'Node',
                'Express','MySQL', 'MongoDB', 'Docker',
                'TypeScript', 'GraphQL', 'Git', 'Linux'
            ],
            hardWorker: true,
            quickLearner: true,
            problemSolver: true,
            yearsOfExperience: 2, 
            hireable: function() {
                return (
                    this.hardWorker &&
                    this.problemSolver &&
                    this.skills.length >= 5 &&
                    this.yearsOfExperience >= 2
                );
            }
        };
          `);
    useEffect(() => {
        Prism.highlightAll();

        // Add CSS animation for grid and dots
        const style = document.createElement("style");
        style.textContent = `
          @keyframes gridPulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }
          
          @keyframes dotPulse {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [code]);
    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20 lg:pt-0">
            <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
                <Meteors number={20} />
                <GridBackground />
                {/* Main content container */}
                <div className="container flex gap-12 flex-col lg:flex-row items-center justify-center py-12 lg:py-0 mx-auto relative z-10">
                    {/* Left column - Text content */}
                    <div className="relative w-full lg:w-1/2 flex flex-col items-start gap-6 sm:gap-8  ">
                        <div className="absolute hidden lg:block w-48 h-48 bg-blue-500/10 blur-3xl lg:-top-20 lg:-left-20 rounded-full" />
                        <div className="absolute hidden lg:block w-48 h-48 bg-teal-500/10 blur-3xl lg:-top-20 lg:-right-20 rounded-full" />
                        {/* Welcome badge */}
                        <p className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate__animated animate__fadeInDown animate__delay-1s">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-gray-300 text-xs sm:text-sm font-medium">
                                Welcome to my universe
                            </span>
                        </p>
                        {/* Name section */}
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold  ">
                                <SparklesText text="Hello" />
                                <span className="relative inline-block ">
                                    I'm{" "}
                                    {/* <span className=" gradient-text typing-effect"> */}
                                    <span className=" gradient-text">
                                        Mohamed Mounir
                                    </span>
                                </span>
                            </h1>
                            <span className="absolute top-1/2 -translate-y-1/2 left-1/4 rounded-full animate-pulse blur-2xl -z-10 bg-blue-500/50 w-24 sm:w-32 h-24 sm:h-32"></span>
                        </div>
                        {/* Role badge */}
                        <div className=" inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/10 to-teal-500/10 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-blue-500/20 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                            <FaRocket className="self-end  text-blue-400 animate-bounce text-sm sm:text-base " />
                            <span>
                                <FlipWords
                                    className={
                                        "text-lg sm:text-xl text-blue-400 font-medium"
                                    }
                                    words={words}
                                />
                            </span>
                        </div>
                        {/* Description */}
                        <p>
                            Code Explorer 🚀 | React, Angular & Node.js
                            Developer 💻 | Creating, Maintaining, Solving
                            Problems, Evolving ✨
                        </p>
                        {/* buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                            {/* View Projects Button */}
                            <a
                                href="#"
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                            >
                                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                                        <span>Get Resume</span>
                                        <FaCloudDownloadAlt className="text-lg transform transition-all duration-300 group-hover:translate-x-1" />
                                    </span>
                                </span>
                            </a>
                        </div>
                        {/* Floating badges */}
                        <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
                            <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                                <i className="fas fa-wand-magic-sparkles"></i>
                                &nbsp;&nbsp;UI Magic
                            </div>
                        </div>
                        <div className="hidden lg:block absolute right-10 top-20 animate-float">
                            <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                                <i className="fas fa-code"></i>
                                &nbsp;&nbsp;Clean Code
                            </div>
                        </div>
                        <div className="hidden lg:block absolute top-[16rem] left-[70%] transform -translate-x-1/2 animate-float">
                            <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                                <i className="fas fa-lightbulb"></i>
                                &nbsp;&nbsp;Innovation
                            </div>
                        </div>
                    </div>
                    {/* Right column - Code window */}
                    <div className="w-full lg:w-1/2  animate__animated animate__fadeInDown animate__delay-0.1s">
                        <div className="gradient-border ">
                            <div className="code-window bg-[#091121]">
                                <div className="window-header">
                                    <div className="window-dot bg-red-500"></div>
                                    <div className="window-dot bg-yellow-500"></div>
                                    <div className="window-dot bg-green-500"></div>
                                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                                        <FaCode />
                                        developer.js
                                    </span>
                                </div>
                                <pre className="language-javascript">
                                    <code className="language-javascript">
                                        {code}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutMeScroll />
        </main>
    );
}
