import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Azteco from '@/Components/Azteco';
import GiftMeCrypto from '@/Components/GiftMeCrypto';
import { FaExclamationTriangle } from 'react-icons/fa';


export default function AztecoPage() {
    const [activeTab, setActiveTab] = useState('azteco');

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Crypto Gift Cards
                </h2>
            }
        >
            <Head title="Azteco & Gift Me Crypto" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6 text-gray-900">
                        <p className="mb-4">
                            There are two crypto gift cards supported at the moment. You can buy them with various payment methods:
                        </p>
                        
                        <ul className="list-disc pl-6 mb-4">
                            <li>
                                <a href="https://azte.co/buy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Azteco Lightning Bitcoin Voucher
                                </a>
                            </li>
                            <li>
                                <p   className="text-blue-600 hover:underline">
                                 giftmecrypto.io
                                </p>
                            </li>
                        </ul>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                            <div className="flex items-start gap-3">
                                <FaExclamationTriangle className="text-yellow-500 mt-0.5 flex-shrink-0" />
                                <div>
                                <p className="font-medium text-yellow-800">Recommended Gift Card</p>
                                <p className="text-sm text-yellow-700 mt-1">
                                    <span className="font-semibold">Best option:</span> Try buying an Azteco voucher first—it has lower fees for both of us and processes instantly.  
                                </p>
                                <p className="text-sm text-yellow-700 mt-1">
                                    <span className="font-semibold">Alternative:</span> If you can't buy Azteco, buy a Crypto Giftcard instead.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 border-b mb-4">
                            <button 
                                className={`px-4 py-2 ${activeTab === 'azteco' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'}`} 
                                onClick={() => setActiveTab('azteco')}
                            >
                                Azteco
                            </button>
                            <button 
                                className={`px-4 py-2 ${activeTab === 'giftmecrypto' ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'}`} 
                                onClick={() => setActiveTab('giftmecrypto')}
                            >
                                Gift Me Crypto
                            </button>
                        </div>
                        <div>
                            {activeTab === 'azteco' ? <Azteco /> : <GiftMeCrypto />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


