import AboutMeScroll from "@/components/ui/AboutMeScroll";
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
            </section>
            <AboutMeScroll />
        </main>
    );
}
