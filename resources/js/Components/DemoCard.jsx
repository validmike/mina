import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const DemoCard = ({ url, watermark , level }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <div
            className="relative w-full max-w-xs h-80 overflow-hidden rounded-xl shadow-lg mx-auto mb-6"
            onTouchStart={() => setRevealed(true)}
            onTouchEnd={() => setRevealed(false)}
            onMouseDown={() => setRevealed(true)}
            onMouseUp={() => setRevealed(false)}
        >
            {/* Blurred Background */}
            <motion.div
                className="absolute inset-0 bg-center"
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                animate={{ filter: revealed ? "blur(0px)" : "blur(20px)" }}
                transition={{ duration: 0.3 }}
            />


            {/* Overlay - Shown Only When Not Revealed */}
            {!revealed && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center p-4 z-10">
                    <FaEye className="text-3xl mb-2" />
                    <p>Hold your finger on image to reveal</p>
                </div>
            )}

            {/* Watermark - Shown When Revealed */}
            {revealed && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm bg-black/20 z-10">
                    {watermark}
                </div>
            )}
            <div className="p-2 m-2">
                <p>
                    LEVEL : {level}
                </p>

            </div>
        </div>
    );
};

export default DemoCard;
