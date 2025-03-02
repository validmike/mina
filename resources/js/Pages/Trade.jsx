import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Trade({ trading, trader_id }) {
    const [isChecked, setIsChecked] = useState([false, false, false]);

    // If trading is 0, show a message that trading is not available
    if (trading == 0) {
        return (
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Trading
                    </h2>
                }
            >
                <Head title="Trading" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className="text-2xl font-bold text-center mb-4">
                                    Trading is not available at the moment. Please check back later.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    const handleCheckboxChange = (index) => {
        const newChecked = [...isChecked];
        newChecked[index] = !newChecked[index];
        setIsChecked(newChecked);
    };

    const allChecked = isChecked.every((checked) => checked);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Free Trading
                </h2>
            }
        >
            <Head title="Contact" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold text-center mb-4">
                                send me your videos/pictures to get a similar videos/pictures on telegram!
                            </h1>
                            <p className="text-lg text-center mb-6">
                                Tap on all the checkboxes to confirm that you have read the rules
                            </p>

                            <div className="space-y-4">
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
                                        <span className="text-sm">Only start the chat with at least 3 medias. DO NOT chat with me in here.</span>
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
                                        <span className="text-sm">Please only send high quality media or mega link. if your media is not worthy I will not respond</span>
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
                                        <span className="text-sm">if you do not follow the rules you will be banned from this app and your telegram account will be REPORTED AS SPAM</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    disabled={!allChecked}
                                    className={`px-6 py-2 rounded-md text-white ${allChecked ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
                                    onClick={() => window.location.href = `tg://openmessage?user_id=${trader_id}`}
                                >
                                    SEND YOUR MEDIA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}