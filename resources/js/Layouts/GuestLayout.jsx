import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { FaSpinner } from 'react-icons/fa';

export default function Guest({ children }) {
    const { url } = usePage();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        try {
            const telegramData = window.Telegram?.WebApp?.initDataUnsafe;

            if (!telegramData || !telegramData.user) {
                window.location.href = 'https://telegram.org/';
            } else {
                setIsChecking(false);
            }
        } catch (error) {
            window.location.href = 'https://telegram.org/';
        }
    }, [url]);

    if (isChecking) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <FaSpinner className="animate-spin text-gray-600 text-4xl" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
