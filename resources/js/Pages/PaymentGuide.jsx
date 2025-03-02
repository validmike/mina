import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PaymentGuide() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Payment Guide
                </h2>
            }
        >
            <Head title="Payment Guide" />

            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 space-y-4 mt-6 max-w-7xl mx-auto border border-gray-200">
                <h3 className="text-xl font-semibold">Don't know how to pay with cryptocurrencies?</h3>
                <p className="text-gray-600">Select one of the options below for help:</p>
                <div className="space-y-3">
                    <Link as='button' href={route('help.cashapp')}>
                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 mt-2 rounded-lg transition duration-300">
                            I have CashApp but don’t know how to send Bitcoin with it.
                        </button>
                    </Link>
                    <Link as='button' href={route('help.azteco')}>
                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 mt-2 rounded-lg transition duration-300">
                            I want to pay with visa/mastercard or PayPal and apple pay.
                        </button>
                    </Link>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
