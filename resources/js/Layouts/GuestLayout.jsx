import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { FaSpinner } from "react-icons/fa";

export default function GuestLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isTelegramMiniApp = window.Telegram?.WebApp;

        if (!isTelegramMiniApp) {
            window.location.href = "https://telegram.org";
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <FaSpinner className="animate-spin text-gray-600 text-4xl" />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div></div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
