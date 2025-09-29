import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ telegram_id, country }) {
    const [isChecked, setIsChecked] = useState([false, false, false]);
    const [confirmationText, setConfirmationText] = useState('');

    const handleCheckboxChange = (index) => {
        const newChecked = [...isChecked];
        newChecked[index] = !newChecked[index];
        setIsChecked(newChecked);
    };

    const allChecked = isChecked.every((checked) => checked);
    // accept "i read the rules" in any case
    const correctText = confirmationText.trim().toLowerCase() === 'i read the rules';
    const canContact = allChecked && correctText;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Contact
                </h2>
            }
        >
            <Head title="Contact" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold text-center mb-4">
                                You should only contact me if you are willing to buy or if you faced any problem during your purchase from this website
                            </h1>
                            <p className="text-lg text-center mb-6">
                                Tap on all the checkboxes to confirm that you have read the rules
                            </p>

                            <div className="space-y-4">
                                {country === 'BR' && (
                                    <div
                                        className={`p-4 border-2 rounded-md ${isChecked[0] ? 'border-blue-500' : 'border-gray-300'}`}
                                    >
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={isChecked[0]}
                                                onChange={() => handleCheckboxChange(0)}
                                                className="form-checkbox h-5 w-5 text-blue-500"
                                            />
                                            <span className="text-sm">
                                                Atenção brasileiros: Muitas mensagens e comprovantes falsos têm sido enviados por usuários do Brasil. Leia as regras antes de entrar em contato, ou você será bloqueado e denunciado como spam. NÃO! PIX NÃO É ACEITO. FALE EM INGLÊS!
                                            </span>
                                        </label>
                                    </div>
                                )}
                                <div
                                    className={`p-4 border-2 rounded-md ${isChecked[0] ? 'border-blue-500' : 'border-gray-300'}`}
                                >
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={isChecked[0]}
                                            onChange={() => handleCheckboxChange(0)}
                                            className="form-checkbox h-5 w-5 text-blue-500"
                                        />
                                        <span className="text-sm">I will NOT ask for a free video or any more free demo!</span>
                                    </label>
                                </div>

                                <div
                                    className={`p-4 border-2 rounded-md ${isChecked[1] ? 'border-blue-500' : 'border-gray-300'}`}
                                >
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={isChecked[1]}
                                            onChange={() => handleCheckboxChange(1)}
                                            className="form-checkbox h-5 w-5 text-blue-500"
                                        />
                                        <span className="text-sm">I will NOT start the chat with a single sticker or a 'Hi' without a clear message!</span>
                                    </label>
                                </div>

                                <div
                                    className={`p-4 border-2 rounded-md ${isChecked[2] ? 'border-blue-500' : 'border-gray-300'}`}
                                >
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={isChecked[2]}
                                            onChange={() => handleCheckboxChange(2)}
                                            className="form-checkbox h-5 w-5 text-blue-500"
                                        />
                                        <span className="text-sm">I AM already aware of the product prices and payment methods.</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="mb-2 text-sm font-medium">
                                    Write <code>i read the rules</code> below:
                                </p>
                                <input
                                    type="text"
                                    value={confirmationText}
                                    onChange={(e) => setConfirmationText(e.target.value)}
                                    className="border rounded-md px-3 py-2 w-full max-w-md mx-auto mb-4 focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Type here..."
                                />
                                <button
                                    disabled={!canContact}
                                    className={`px-6 py-2 rounded-md text-white ${canContact ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
                                    onClick={() => window.location.href = `https://t.me/${telegram_id}`}
                                >
                                    Contact on Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
