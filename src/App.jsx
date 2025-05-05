import Header from "./components/layout/Header";
import "./assets/css/index.css";
import Hero from "./pages/Hero/Hero";
import SkillsSection from "./pages/Skills/Skills";
import ExperienceSection from "./pages/Experience/Experience";
import EducationSection from "./pages/Education/Education";
export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
        </>
    );
}
