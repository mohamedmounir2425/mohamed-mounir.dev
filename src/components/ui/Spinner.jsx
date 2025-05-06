import { motion } from "framer-motion";

const Spinner = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-5 h-5 border-4  border-dotted rounded-full border-white border-t-transparent"
        />
    );
};

export default Spinner;
