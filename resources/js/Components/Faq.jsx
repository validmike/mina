import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function Faq({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded p-4 mb-3">
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center w-full text-left"
            >
                <span className="text-gray-800 font-medium">{question}</span>
                {open ? (
                    <FiChevronUp className="text-gray-500" />
                ) : (
                    <FiChevronDown className="text-gray-500" />
                )}
            </button>

            {open && (
                <div
                    className="mt-2 text-gray-700 text-sm"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            )}
        </div>
    );
}
