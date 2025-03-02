import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { FiCopy, FiCheckCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi';

export default function Home({ invites, level, link }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Home</h2>}
        >
            <Head title="Home" />

            <div className="p-4 space-y-4">
                {/* Level & Invites Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold">Level</h3>
                        <p className="text-xl font-bold">{level}</p>
                    </div>
                    <div className="p-4 bg-green-500 text-white rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold">Invites</h3>
                        <p className="text-xl font-bold">{invites}</p>
                    </div>
                </div>

                {/* Invite Link Section */}
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h3 className="text-gray-700 font-semibold">Your Invite Link</h3>
                    <div className="flex items-center mt-2 space-x-2 border p-2 rounded-lg">
                        <input
                            type="text"
                            value={link}
                            readOnly
                            className="w-full text-gray-600 text-sm bg-transparent outline-none"
                        />
                        <button
                            onClick={handleCopy}
                            className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition"
                        >
                            {copied ? <FiCheckCircle className="text-green-600" size={20} /> : <FiCopy size={20} />}
                        </button>
                    </div>
                    {copied && <p className="text-green-600 text-sm mt-1">Copied!</p>}
                </div>

                {/* Buttons */}
                <Link 
                    as='button'
                    href={route('demos.index')} 
                    className="w-full py-3 bg-purple-500 text-white font-bold rounded-lg shadow-md text-center block"
                >
                    FREE DEMO
                </Link>
                <Link 
                    as='button'
                    href={route('products.index')} 
                    className="w-full py-3 bg-red-500 text-white font-bold rounded-lg shadow-md text-center block"
                >
                    BUY FULL COLLECTIONS
                </Link>



                {/* Invite System Explanation */}
                <div className="p-4 bg-gray-100 border-l-4 border-gray-500 text-gray-800 rounded-lg flex items-start">
                    <FiInfo size={20} className="mr-2 mt-1" />
                    <p>
                        <strong>How the Invite System Works:</strong><br />
                        - Invite <strong>3</strong> users → Reach <strong>Level 1</strong> 🎉 <br />
                        - Invite <strong>10</strong> users → Reach <strong>Level 2</strong> 🚀 <br />
                        - Invite <strong>30</strong> users → Reach <strong>Level 3</strong> 🔥 <br />
                        The more you invite, the higher your level!
                        as you level up more free demos will be uncensored.
                        videos will only be available at level 3
                    </p>
                </div>

                {/* Warning Box */}
                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-lg flex items-center">
                    <FiAlertTriangle size={50} className="mr-2" />
                    <p>Warning: save your invite link somewhere safe since Telegram will ban this bot and you may lose your access.</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
