import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Monitor } from "lucide-react";
import { FaEye, FaGithub } from "react-icons/fa";
const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
function WorkCard({ work, idx }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <motion.div
            variants={cardVariants}
            className={`relative border rounded-xl p-3 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === idx
                    ? "border-teal-500 scale-[1.02]"
                    : "border-blue-400/20"
            } flex flex-col`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            {/* card-container */}
            <div className="space-y-4 grow flex flex-col">
                {/* image-container */}
                <div className=" rounded  relative group overflow-hidden ">
                    <img
                        src={work?.imgSrc}
                        className="  transition-all duration-300 ease-in-out group-hover:scale-[1.5] group-hover:rotate-[20deg] "
                    />
                    <div
                        className="  absolute top-1 right-1
                
               rounded-md 
                 bg-gradient-to-r from-blue-500/80 to-teal-500/80
                border border-blue-500/20 backdrop-blur-sm
              text-blue-900 
                
                py-1 px-2 flex gap-4"
                    >
                        <FaEye className="text-xl hover:white hover:scale-125 hover:text-blue-100 cursor-pointer transition-all duration-300 ease-in-out" />
                        <FaGithub className="text-xl hover:white hover:scale-125 hover:text-blue-100 cursor-pointer transition-all duration-300 ease-in-out" />
                    </div>
                </div>

                {/* card-info */}
                <div className="space-y-2 grow flex flex-col justify-content-start">
                    <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">
                            Roamify (Travel app)
                        </h3>
                    </div>
                    {/* card-title & card-date */}
                    <div className="  flex justify-between ">
                        <p className="text-lg text-gray-300 flex items-center gap-2">
                            <Monitor className="w-5 h-5 text-teal-500" />

                            {work?.details.title}
                        </p>
                        <p className="text-gray-400 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {work?.details.created}
                        </p>
                    </div>
                    {/* card-desc */}
                    <p className="  text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                        {work?.details.description}
                    </p>
                </div>
                {/* card-skills */}
                {work?.details?.technologies && (
                    <div className="flex flex-wrap gap-2">
                        {work?.details?.technologies?.map?.((skill, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default WorkCard;
