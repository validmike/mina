import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Guarantee() {
    const [step, setStep] = useState(1);

    const handleClick = () => {
        setStep(2);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Guarantee" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {step === 1 ? (
                                <>
                                    <p>
                                        I will record a screen video starting from our chat  to the groups containing the videos, so you can see that I have them ready to be forwarded to you. Additionally, I will provide another form of proof, which I cannot mention here, but you will be sure that this is not a scam.
                                    </p>
                                    <p className="mt-4">
                                        To ensure I am spending my time on a REAL CUSTOMER, you must show that you are ready to pay by sending one of the following:
                                    </p>
                                    <ul className="mt-2 list-disc list-inside">
                                        <li>A screenshot of your crypto wallet showing sufficient funds.</li>
                                        <li>A screenshot of your CashApp BTC wallet with enough BTC.</li>
                                        <li>A screenshot of one of the <a href="/guide/azteco" className="text-blue-600 hover:underline">accepted gift cards</a> showing only a part of the key (you may cover the rest of the key).</li>
                                    </ul>
                                    <p className="mt-4">Once your screenshot is ready, please click the button below.</p>
                                    <button 
                                        onClick={handleClick} 
                                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        I'm ready to buy
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p>
                                        ONLY click the button if you have your screenshot ready. If you need any help with payment, please check the <a href="/contact" className="text-blue-600 hover:underline">support page</a>. OK?
                                    </p>
                                    <a 
                                        href="https://t.me/m/mok2cxW8NTlh" 
                                        className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                    >
                                        Ok, I'm ready
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
