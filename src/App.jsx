import Header from "./components/layout/Header";
import "./assets/css/index.css";
import Hero from "./pages/Hero/Hero";
import SkillsSection from "./pages/Skills/Skills";
export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <SkillsSection />
        </>
    );
}
