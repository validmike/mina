import { router, usePage } from '@inertiajs/react';

const PaidOrderGroup = ({ id, number,order }) => {
    const handleCreateLink = () => {
        router.post(route('groups.link'), { id });
    };
    const { errors, flash } = usePage().props;
    console.log(order);


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
                <p>✔ This link can be used only once  </p>
                <p>✔ Ownership of the group will be transferred to you  upon your joinig</p>
                <p>✔ You will be left alone in the group so if you leave it you can NOT come back</p>
                <p className='text-red-900'>✔ Sharing this group or its media will put your Telegram account at risk of getting banned since you will be the owner</p>
                <p>✔ Contact support if you need help.</p>
            </div>

            {/* Get Your Link Button */}
            {order.groupLink ? (
                <a
                    href={order.groupLink}
                    target="_blank"
                    className="mt-6 inline-block px-5 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                    {order.groupLink}
                </a>
            ) : (
                <button
                    onClick={handleCreateLink}
                    className="mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Get Your Invite Link
                </button>
            )}

            {errors && errors.order_id && (
                <div className="text-red-500 mb-2">{errors.order_id}</div>
            )}

            {flash?.error && (
                <div className="text-red-500 mb-2">{flash.error} </div>
            )}
        </div>
    );
};

export default PaidOrderGroup;
