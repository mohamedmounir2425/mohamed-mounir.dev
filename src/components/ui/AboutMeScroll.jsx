import { FaChevronDown, FaMouse } from "react-icons/fa";

function AboutMeScroll() {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce text-gray-400 text-sm">
            <FaMouse />
            <span>About me</span>
            <FaChevronDown className="text-white text-base" />
        </div>
    );
}

export default AboutMeScroll;
