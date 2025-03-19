import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const TelegramButton = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 left-4 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-[pulse_1.5s_infinite]"
    >
      <FaTelegramPlane className="text-white text-2xl" />
    </a>
  );
};

export default TelegramButton;
