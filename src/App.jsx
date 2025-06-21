import { useRef } from "react";
import Header from "./components/layout/Header";
import "./assets/css/index.css";
import Hero from "./pages/Hero/Hero";
import SkillsSection from "./pages/Skills/Skills";
import ExperienceSection from "./pages/Experience/Experience";
import EducationSection from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function App() {
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const refs = {
        home: homeRef,
        skills: skillsRef,
        experience: experienceRef,
        education: educationRef,
        projects: portfolioRef,
        contact: contactRef,
    };

    return (
        <>
            <Header refs={refs} />
            <div ref={homeRef}>
                <Hero />
            </div>
            <div ref={skillsRef}>
                <SkillsSection />
            </div>
            <div ref={experienceRef}>
                <ExperienceSection />
            </div>
            <div ref={educationRef}>
                <EducationSection />
            </div>
            <div ref={portfolioRef}>
                <Portfolio />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </>
    );
}
