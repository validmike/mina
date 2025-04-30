import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Azteco from '@/Components/Azteco';
import GiftMeCrypto from '@/Components/GiftMeCrypto';

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
                                <a href="https://giftmecrypto.io" target="_blank"  className="text-blue-600 hover:underline">
                                    Gift Me Crypto Gift Card
                                </a>
                            </li>
                        </ul>
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
