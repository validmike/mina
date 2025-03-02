import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const LinkPage = ({ order, telegram_id, channel_id }) => {
    const [hasLeft, setHasLeft] = useState(null); // State to track if user has left
    const [isLoading, setIsLoading] = useState(false); // State to track loading state
    const [error, setError] = useState(null); // State to track errors
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [statusMessage, setStatusMessage] = useState(""); // State to store the status message

    var order = order.data;

    // Function to check if the user has left the channel and reveal password
    const handleCheckAndReveal = async () => {
        setIsLoading(true);
        setError(null);
        setStatusMessage("");

        try {
            const response = await axios.post("/api/v1/hasleft", {
                telegram_id,
                channel_id,
            });

            if (response.data.success) {
                setHasLeft(response.data.has_left);
                setStatusMessage(response.data.message);

                // If the user has left, reveal the password
                if (response.data.has_left) {
                    setShowPassword(true);
                }
            } else {
                setError(response.data.message || "Failed to check user status.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred while checking user status.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!order.paid_at) {
        return (
            <AuthenticatedLayout>
                <Head title="Order Link" />
                <div className="p-6 text-center text-red-600 font-semibold">
                    ❌ Payment not completed. Please complete your payment first.
                </div>
            </AuthenticatedLayout>
        );
    }

    if (!order.link) {
        return (
            <AuthenticatedLayout>
                <Head title="Order Link" />
                <div className="p-6 text-center text-red-600 font-semibold">
                    ❌ Link generation failed. Please try again.
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>
            <Head title="Order Link" />
            <div className="p-6 space-y-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">Your Invite Link</h2>
                <p className="break-all text-blue-600">{order.link}</p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                        onClick={() => navigator.clipboard.writeText(order.link)}
                    >
                        Copy Link
                    </button>
                    <a
                        href={order.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                    >
                        Open Link
                    </a>
                </div>

                {/* Password Input */}
                <div className="mt-6 flex items-center justify-center gap-2">
                    <label className="font-semibold">Zips Password:</label>
                    <input
                        type="text"
                        className="border px-3 py-2 rounded-lg"
                        disabled
                        value={showPassword ? "soft1996" : "********"}
                    />
                </div>
                <div className="mt-6 flex items-center justify-center gap-2">
                    <p>Forward the files out of the channel, leave the channel and then click on reveal password</p>

                </div>

                {/* Combined Check and Reveal Button */}
                <div className="mt-4">
                    <button
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                        onClick={handleCheckAndReveal}
                        disabled={isLoading}
                    >
                        {isLoading ? "Checking..." : "Check Status & Reveal Password"}
                    </button>
                </div>

                {/* Display status message */}
                {error && (
                    <p className="text-red-600">{error}</p>
                )}
                {statusMessage && (
                    <p className={hasLeft ? "text-green-600" : "text-red-600"}>
                        {statusMessage}
                    </p>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default LinkPage;