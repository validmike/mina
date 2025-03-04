import ApplicationLogo from '@/Components/ApplicationLogo';
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
                setIsChecking(false); // Hide loading once check is complete
            }
        } catch (error) {
            window.location.href = 'https://telegram.org/';
        }
    }, [url]);

    if (isChecking) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <FaSpinner className="animate-spin text-gray-600 dark:text-gray-300 text-4xl" />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
