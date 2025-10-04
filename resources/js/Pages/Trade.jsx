import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Trade({ trading, trader_id }) {
    const [isChecked, setIsChecked] = useState([false, false, false, false]);
    const [englishPassed, setEnglishPassed] = useState(false);
    const [options, setOptions] = useState([]);

    const correctWord = "Tennis";

    useEffect(() => {
        const choices = ["Apple", "Child", "Tennis", "House", "Carpet", "Bottle"];
        const shuffled = choices.sort(() => Math.random() - 0.5);
        setOptions(shuffled);
    }, []);

    if (trading == 0) {
        return (
            <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Trading</h2>}>
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

    const handleSendMedia = () => {
        Swal.fire({
            title: 'Type "I read the rules"',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'SEND YOUR MEDIA',
            confirmButtonColor: '#3B82F6',
            inputValidator: (value) => {
                if (!value || value.trim().toLowerCase() !== 'i read the rules') {
                    return 'You must type "I read the rules" to continue.';
                }
            },
            didOpen: () => {
                const confirmButton = Swal.getConfirmButton();
                confirmButton.disabled = true;

                Swal.getInput().addEventListener('input', (e) => {
                    confirmButton.disabled = e.target.value.trim().toLowerCase() !== 'i read the rules';
                });
            },
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `https://T.me/${trader_id}`;
            }
        });
    };

    const buttonUnlocked = allChecked && englishPassed;

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Free Trading</h2>}>
            <Head title="Contact" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold text-center mb-4">
                                Send me your PICTURES to get similar videos/pictures on telegram!
                            </h1>
                            <p className="text-lg text-center mb-6">
                                Tap on all the checkboxes to confirm that you have read the rules
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Only start the chat with at least 3 PICTURES. DO NOT chat with me in here.',
                                    'For now Only Pictures is accepted. or mega link containing pictures. If your pictures are good enough you will receive videos.',
                                    'Please only send high quality pictures or mega link. If your media is not worthy I will not respond.',
                                    'If you do not follow the rules you will be banned from this app and your telegram account will be REPORTED AS SPAM'
                                ].map((text, index) => (
                                    <div key={index} className={`p-4 border-2 rounded-md ${isChecked[index] ? 'border-blue-500' : 'border-gray-300'}`}>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={isChecked[index]}
                                                onChange={() => handleCheckboxChange(index)}
                                                className="form-checkbox h-5 w-5 text-blue-500"
                                            />
                                            <span className="text-sm">{text}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* English Test */}
                            <div className="mt-8 p-4 border-2 rounded-md border-gray-300">
                                <h2 className="text-lg font-semibold mb-2 text-center">ENGLISH TEST</h2>
                                <p className="text-sm text-gray-600 mb-4 text-center">
                                    To make sure that you can read and understand English, please select the word below that is used in a sport.
                                </p>
                                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                                    {options.map((word, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setEnglishPassed(word === correctWord)}
                                            className={`px-4 py-2 rounded-md border 
                                                ${englishPassed && word === correctWord
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-100 hover:bg-gray-200'}`}
                                        >
                                            {word}
                                        </button>
                                    ))}
                                </div>
                                {englishPassed ? (
                                    <p className="mt-3 text-green-600 text-center font-semibold">✅ Correct! You passed the English test.</p>
                                ) : (
                                    <p className="mt-3 text-gray-500 text-center text-sm">Select the correct word to continue.</p>
                                )}
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={handleSendMedia}
                                    disabled={!buttonUnlocked}
                                    className={`px-6 py-2 rounded-md text-white ${buttonUnlocked ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
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
