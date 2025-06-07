import { motion } from "framer-motion";

function PortfolioCaption() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Portfolio
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Here you can find some of my projects in different categories
            </p>
        </motion.div>
    );
}

export default PortfolioCaption;
