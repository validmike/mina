import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaEnvelope, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MessageIcon() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-16 left-1 flex flex-col items-start">
            {/* Message Box */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }}
                    style={{ backgroundColor: "rgba(255, 255, 255, 1)" }} 
                    className="bg-white shadow-lg rounded-xl p-4 mb-2 w-64 border border-gray-300 relative"
                >
                    <div className="flex justify-between items-center">
                        <span className="text-gray-700">👋 Hey. Wanna be sure this is NOT a scam?</span>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes size={16} />
                        </button>
                    </div>
                    <Link as="button" href="/proofs" className="text-blue-500 hover:underline block mt-2">
                        Click here
                    </Link>
                </motion.div>
            )}

            {/* Message Icon */}
            <div 
                className="relative w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg bg-opacity-80" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Pulsing Animation */}
                <motion.div 
                    className="absolute inset-0 bg-blue-500 rounded-full opacity-50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <FaEnvelope size={24} className="relative z-10" />

                {/* Unread Message Badge */}
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    1
                </span>
            </div>
        </div>
    );
}
