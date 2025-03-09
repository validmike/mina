import { FaHome, FaPhotoVideo, FaShoppingCart, FaQuestionCircle,    } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import StealthLink from "./StealthLink";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-between items-center px-4 py-2 border-t border-gray-300">
      <Link as="button" href={route('home')} className="flex flex-col items-center text-gray-600">
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link as="button" href={route('demos.index')} className="flex flex-col items-center text-gray-600">
        <FaPhotoVideo size={24} />
        <span className="text-xs">Demo</span>
      </Link>
      <Link as="button" href={route('products.index')} className="flex flex-col items-center text-gray-600">
        <FaShoppingCart size={24} />
        <span className="text-xs">Buy</span>
      </Link>
      <Link as="button" href={route('help.index')} className="flex flex-col items-center text-gray-600">
        <FaQuestionCircle size={24} />
        <span className="text-xs">Help</span>
      </Link>
      <Link as="button" href={route('help.contact')} className="flex flex-col items-center text-gray-600">
        <FaTelegramPlane  size={24} />
        <span className="text-xs">Support</span>
      </Link>
    </div>
    
  );
}
