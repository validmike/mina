import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Satoshi({ auth, proof_channel }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Wallet of Satoshi</h2>}
        >
            <Head title="Wallet of Satoshi" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="m-2 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className='text-2xl'>
                                How to Set Up Your Bitcoin Wallet Quickly and Securely
                            </h3>
                            <br />
                            <h5>Step 1 - Purchase an Azteco Bitcoin Lightning Voucher:</h5>
                            <br />
                            <h5>Step 2 - Download the Wallet:</h5>
                            <p>
                                Download and install <span className='text-yellow-500'>Wallet of Satoshi</span>.
                            </p>
                            <br />
                            <a className='text-yellow-500 underline' target='_blank' href="https://www.walletofsatoshi.com/">Download</a>
                            <br />
                            <br />
                            <h5>Step 3 - Fund Your Wallet:</h5>
                            <p>
                                After purchasing the voucher, you will receive either a URL containing a QR code or a 16-digit code.
                            </p>
                            <p>
                                If you received the code, visit <a target='_blank' className='text-yellow-500 underline' href="https://azte.co/redeem">https://azte.co/redeem</a> to obtain the QR code.
                            </p>
                            <p>
                                You can then redeem the funds by scanning the QR code with your Wallet of Satoshi app, or simply click on the QR code to automatically open the wallet and receive the funds.
                            </p>
                            <br />
                            <h5>Step 4 - Make a Payment with Your Wallet:</h5>
                            <p>
                                At the checkout page, select the <span className='text-yellow-500'>Pay with Lightning Bitcoin</span> option.
                            </p>
                            <p>
                                In your wallet, select "Send" and scan the QR code, or click the <span className='text-yellow-500'>Open in Wallet</span> button.
                            </p>
                            <br />
                            <p>Done!</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}