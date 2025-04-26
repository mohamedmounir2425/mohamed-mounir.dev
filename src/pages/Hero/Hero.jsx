import AboutMeScroll from "@/components/ui/AboutMeScroll";
import GridBackground from "@/components/ui/GridBackground";
import Meteors from "@/components/ui/meteors";
import { useState } from "react";

export default function Hero() {
    const words = [
        "Full-Stack Developer & UI/UX Enthusiast",
        "JavaScript Developer & Creator of Olova.js",
        "Learning MARN Stack",
        "Linux & GitHub for DevOps Enthusiast",
    ];
    const [code] = useState(`
        const profile = {
            name: 'Mohamed Mounir',
            title: 'Frontend developer | Problem Solver',
            skills: [
                'React', 'NextJS', 'Redux', 'Angular', 'Node',
                'Express','MySQL', 'MongoDB', 'Docker',
                'TypeScript', 'GraphQL', 'Git', 'Linux'
            ],
            hardWorker: true,
            quickLearner: true,
            problemSolver: true,
            yearsOfExperience: 4, 
            hireable: function() {
                return (
                    this.hardWorker &&
                    this.problemSolver &&
                    this.skills.length >= 5 &&
                    this.yearsOfExperience >= 3
                );
            }
        };
          `);

    return (
        <main className="min-h-screen bg-[#020617] text-white pt-20 lg:pt-0">
            <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
                <Meteors number={20} />
                <GridBackground />
                {/* Main content container */}
                <div className="container flex gap-12 flex-col lg:flex-row items-center justify-center py-12 lg:py-0 mx-auto relative">
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
                    </div>
                    {/* Right column - Code window */}
                    <div className="w-full lg:w-1/2 p-12 bg-yellow-700"></div>
                </div>
            </section>
            <AboutMeScroll />
        </main>
    );
}
