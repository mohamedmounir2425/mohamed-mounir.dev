import { useRef, useState } from "react";
import Header from "./components/layout/Header";
import "./assets/css/index.css";
import Hero from "./pages/Hero/Hero";
import SkillsSection from "./pages/Skills/Skills";
import ExperienceSection from "./pages/Experience/Experience";
import EducationSection from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function App() {
    const [viewMode, setViewMode] = useState("scroll"); // "scroll" or "single"
    const [currentSection, setCurrentSection] = useState("home");

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

    const sections = [
        { id: "home", component: Hero },
        { id: "skills", component: SkillsSection },
        { id: "experience", component: ExperienceSection },
        { id: "education", component: EducationSection },
        { id: "projects", component: Portfolio },
        { id: "contact", component: Contact },
    ];

    const renderSection = (section) => {
        const Component = section.component;
        return (
            <div
                key={section.id}
                ref={refs[section.id]}
            >
                <Component />
            </div>
        );
    };

    return (
        <>
            <Header
                refs={refs}
                viewMode={viewMode}
                setViewMode={setViewMode}
                setCurrentSection={setCurrentSection}
            />

            {viewMode === "scroll" ? (
                // Continuous scroll view - show all sections
                <>{sections.map(renderSection)}</>
            ) : (
                // Single page view - show only current section
                <div className="w-full   mx-auto section-transition">
                    {renderSection(
                        sections.find((s) => s.id === currentSection)
                    )}
                </div>
            )}
        </>
    );
}
