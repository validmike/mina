import { useEffect } from 'react';

export default function Guest({ children }) {
    useEffect(() => {
        try { window.Telegram?.WebApp?.ready(); } catch (_) {}
        try { window.Telegram?.WebApp?.expand(); } catch (_) {}
    }, []);

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
