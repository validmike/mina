import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Speed() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    How to Set Up Speed Wallet
                </h2>
            }
        >
            <Head title="How to Set Up Speed Wallet" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 space-y-6">
                            <p><strong>Step 1:</strong> Download and install <strong>Speed Wallet</strong> from the <a href="https://www.speed.app/mobile-apps/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Play Store or App Store</a>.</p>

                            <p><strong>Step 2:</strong> Open the app, <strong>sign up</strong>, and choose a <strong>username</strong>.</p>

                            <p><strong>Step 3:</strong> Tap on <strong>BTC</strong>, then tap the <strong>Buy</strong> button.</p>
                            <img src="https://files.catbox.moe/fm49s1.jpg" alt="Step 3 - Buy Bitcoin" className="w-full rounded-lg shadow" />

                            <p><strong>Step 4:</strong> Select the first option: <strong>Credit/Debit Card</strong>.</p>
                            <img src="https://files.catbox.moe/e25ag7.jpg" alt="Step 4 - Select Payment Method" className="w-full rounded-lg shadow" />

                            <p><strong>Step 5:</strong> At the top, enter the amount of Bitcoin you want to buy <em>(buy a little more to cover fees)</em>.  
                            At the bottom, you’ll see the <strong>recommended payment method</strong> for you.  
                            You can also view the full list of available payment methods.</p>
                            <img src="https://files.catbox.moe/obiwh8.jpg" alt="Step 5 - Enter Amount and See Payment Options" className="w-full rounded-lg shadow" />

                            <p><strong>Step 6:</strong> Choose your <strong>payment method</strong> and click <strong>BUY</strong>.</p>
                            <img src="https://files.catbox.moe/c26abz.jpg" alt="Step 6 - See Payment Options" className="w-full rounded-lg shadow" />


                            <p><strong>Step 7:</strong> When the process is complete, your <strong>Bitcoin balance</strong> will show up in your wallet.</p>

                            <p><strong>Step 8:</strong> On our website, click on <strong>"Pay with Lightning Bitcoin"</strong> and copy the <strong>Lightning address</strong>.</p>

                            <p><strong>Step 9:</strong> In Speed Wallet, click <strong>SEND</strong>, paste the Lightning address, and <strong>confirm the transaction</strong>.</p>

                            <p><strong>Done! 🎉</strong></p>

                            <p className="text-sm text-red-600">
                                <strong>Note:</strong> It's better <strong>not</strong> to use a VPN while purchasing on Speed Wallet.  
                                This helps the system recommend the <strong>best payment options and sellers</strong> for your location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
