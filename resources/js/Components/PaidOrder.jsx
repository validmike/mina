import { router } from '@inertiajs/react';

const PaidOrder = ({ id, number }) => {
    const handleCreateLink = () => {
        router.post(route('order.createLink'), { id });
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            {/* Order Number */}
            <h2 className="text-2xl font-bold text-gray-800">Order #{number}</h2>

            {/* Warning */}
            <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-md">
                ⚠️ Please read the instructions carefully.
            </div>

            {/* Tips */}
            <div className="mt-4 text-left text-gray-700 text-sm space-y-2">
                <p>✔ This link can be used only once and <span className="text-blue-500">will expire in 30 minutes</span></p>
                <p>✔ Make sure to <span className="text-blue-500">use the same Telegram account</span> that you registered with or your request will not be accepted</p>
                <p>✔ You must forward the files to your saved messages or to an empty channel or group that only you are a part of.</p>
                <p>✔ You have just <span className="text-blue-500">10 minutes</span> to forward the files and leave, or the bot will automatically ban you.</p>
                <p>✔ The password for the files will only be revealed to you if you leave the channel.</p>
                <p>✔ Contact support if you need help.</p>
            </div>

            {/* Get Your Link Button */}
            <button 
                onClick={handleCreateLink}
                className="mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Get Your Invite Link
            </button>
        </div>
    );
};

export default PaidOrder;
