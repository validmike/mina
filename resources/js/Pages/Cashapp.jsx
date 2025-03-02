import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { FiClipboard, FiExternalLink } from 'react-icons/fi';

export default function Cashapp() {
    const videoUrl = "https://www.youtube.com/embed/fDjDH_WAvYI?si=jdC6GWY1clr6V57k";
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(videoUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    How to Send Bitcoin on CashApp
                </h2>
            }
        >
            <Head title="Cashapp" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 text-gray-900">
                        <p className="mb-4">Sending Bitcoin on CashApp is easy and simple! Here’s a short video guide:</p>
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <iframe className="w-full rounded-lg" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <button onClick={copyToClipboard} className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition">
                                <FiClipboard className="w-5 h-5 mr-2" /> {copied ? 'Copied!' : 'Copy Link'}
                            </button>
                            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
                                <FiExternalLink className="w-5 h-5 mr-2" /> Open youtube
                            </a>
                        </div>
                        <p className="mb-4">It’s recommended to use <strong>Lightning Bitcoin</strong> as it's faster and has no fees. If it fails, use on-chain Bitcoin instead.</p>
                        <p>Sometimes, users can’t send BTC on CashApp because their account isn’t verified. Don't worry, it's easy, and verification usually takes less than an hour. verify your account and try again</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
