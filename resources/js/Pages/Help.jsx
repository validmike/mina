import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Help() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Help
                </h2>
            }
        >
            <Head title="Help" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">No Scams, Just Proof</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium text-xl">How can i trust you?</h3>
                                        <p className="text-gray-600">I know it's always a risk to buy these kinds of items. I have gathered some evidence of me giving the buyers their file. (These are people who bought by contacting Telegram). I also priced my products as low as possible to make it less risky for you.</p>
                                        <Link as='button' href='/proofs' className='text-blue-500 underline'   >
                                        see proofs here
                                        
                                        </Link>
                                    </div>

                                </div>
                            </section>

                            {/* Payments Section */}
                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">Payments</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h2 className="font-medium text-xl">What are the accepted payment methods?</h2>
                                        <p className="text-gray-600">We currently accept only cryptocurrency payments for privacy and security reasons. However, you can easily purchase a crypto gift card using Visa, MasterCard, PayPal, Apple Pay, and other convenient methods. For more details,</p>
                                        <Link as='button' className='text-blue-500 underline' href='/guide'>
                                        see Payment Guides.
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className="font-medium text-xl">How will the purchased content be delivered?</h2>
                                        <p className="text-gray-600">After completing your order, you will receive an invitation to a Telegram channel containing the zip files. If you purchase by contacting me directly on Telegram, the files will be sent to you in a private chat.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-xl">I sent the crypto payment, but my order hasn’t been completed yet.</h3>
                                        <p className="text-gray-600">Some cryptocurrencies, like BTC, require some time to be confirmed. For Bitcoin, this also depends on the blockchain's current condition. I highly recommend using faster cryptocurrencies, such as LTC or Bitcoin via the Lightning Network. Additionally, please ensure that you have sent the correct amount.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Invites Section */}
                            <section className="mb-8">
                                <h2 className="text-xl font-semibold mb-4">Invites and free Demo</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium text-xl">The Demo pictures are not shown to me</h3>
                                        <p className="text-gray-600">Try using a VPN. Additionally, the server hosting the pictures might be down, so you can check again later.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-xl">How does the invite system work?</h3>
                                        <p className="text-gray-600">If people sign up using your link, you will level up and unlock access to the uncensored pictures. The final prize includes exclusive videos. However, the full collection is only available for purchase.</p>
                                    </div>

                                </div>
                            </section>




                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}