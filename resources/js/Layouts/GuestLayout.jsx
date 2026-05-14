import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

export default function Guest({ children }) {
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const verify = () => {
            const tg = window.Telegram?.WebApp;
            if (!tg) {
                window.location.href = 'https://telegram.org/';
                return;
            }

            try { tg.ready(); } catch (_) {}
            try { tg.expand(); } catch (_) {}

            if (!tg.initDataUnsafe?.user) {
                window.location.href = 'https://telegram.org/';
                return;
            }

            if (!cancelled) setIsChecking(false);
        };

        if (window.Telegram?.WebApp) {
            verify();
            return;
        }

        const interval = setInterval(() => {
            if (window.Telegram?.WebApp) {
                clearInterval(interval);
                clearTimeout(timeout);
                verify();
            }
        }, 50);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            if (!window.Telegram?.WebApp) {
                window.location.href = 'https://telegram.org/';
            }
        }, 3000);

        return () => {
            cancelled = true;
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

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
