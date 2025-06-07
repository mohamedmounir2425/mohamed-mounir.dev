import { AnimatePresence, motion } from "framer-motion";
import PortfolioCaption from "./PortfolioCaption";
import WorkCard from "./WorkCard";
import { works } from "@/data/projects";
import { useRef, useState } from "react";

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef(null);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(works.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentWorks = works.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
                <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <PortfolioCaption />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {currentWorks.map((work, idx) => (
                            <WorkCard
                                key={idx}
                                idx={idx}
                                work={work}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-10 gap-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-4 py-2 rounded-full border ${
                                currentPage === i + 1
                                    ? "bg-white text-black font-semibold"
                                    : "bg-transparent text-white border-white hover:bg-white hover:text-black transition"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
