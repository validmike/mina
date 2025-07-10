import { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import { FaBitcoin, FaBolt, FaCoins, FaArrowUp } from "react-icons/fa";
import axios from "axios";

export default function OrderCard({ order }) {
    const [selectedPayment, setSelectedPayment] = useState("lightnings");
    const [selectedCrypto, setSelectedCrypto] = useState("");
    const [cryptoOptions, setCryptoOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handlePaymentSelection = (method) => {
        setSelectedPayment(method);
        if (method === "other" && cryptoOptions.length === 0) {
            fetchCryptoCoins();
        }
    };

    const fetchCryptoCoins = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(route("crypto.coins"));
            const coins = response.data.selectedCurrencies || [];
            const filteredCoins = coins.filter((coin) => coin !== "BTC"); // Exclude "BTC"
            setCryptoOptions(filteredCoins);
            setSelectedCrypto(filteredCoins.length > 0 ? filteredCoins[0] : "");
        } catch (error) {
            console.error("Failed to fetch cryptocurrencies:", error);
        }
        setIsLoading(false);
    };

    const handleCreateInvoice = () => {
        setIsButtonDisabled(true);

        if (selectedPayment === "BTC") {
            // BTC gets its own specific route
            router.post(route("bitcoins.store"), {
                order_id: order.id,
            });
        } else if (selectedPayment === "other") {
            // Other crypto payments go to a shared crypto route
            router.post(route("cryptos.store"), {
                order_id: order.id,
                crypto: selectedCrypto,
            });
        } else {
            // All other payment methods (like 'lightning', etc.)
            router.post(route(`${selectedPayment}.store`), {
                order_id: order.id,
            });
        }
    };

    return (
        <div className="p-2 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
                Order #{order.number}
            </h2>

            <p className="text-gray-700 font-bold text-lg mb-3">
                💳 Choose Your Payment Option:
            </p>

            <div className="space-y-4">
                {/* Lightning Bitcoin */}
                <div
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer ${
                        selectedPayment === "lightnings"
                            ? "border-blue-500 bg-blue-100"
                            : "border-gray-300"
                    }`}
                    onClick={() => handlePaymentSelection("lightnings")}
                >
                    <FaBolt className="text-yellow-500 text-xl" />
                    <p className="font-medium">Lightning Bitcoin</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 -mt-2 ml-1">
                    <FaArrowUp className="text-xs" />
                    <p>Recommended for CashApp & Coinbase</p>
                </div>

                {/* Bitcoin On-Chain */}
                <div
                    className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer ${
                        selectedPayment === "BTC"
                            ? "border-blue-500 bg-blue-100"
                            : "border-gray-300"
                    }`}
                    onClick={() => handlePaymentSelection("BTC")}
                >
                    <FaBitcoin className="text-orange-500 text-xl" />
                    <p className="font-medium">Bitcoin On-Chain</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 -mt-2 ml-1">
                    <FaArrowUp className="text-xs" />
                    <p>Supported by all wallets but slower</p>
                </div>
                {/* Other Cryptocurrencies */}
                <div
                    className={`flex flex-col p-4 border-2 rounded-lg cursor-pointer ${
                        selectedPayment === "other"
                            ? "border-blue-500 bg-blue-100"
                            : "border-gray-300"
                    }`}
                    onClick={() => handlePaymentSelection("other")}
                >
                    <div className="flex items-center gap-3">
                        <FaCoins className="text-gray-700 text-xl" />
                        <p className="font-medium">Other Cryptocurrencies</p>
                    </div>
                    {selectedPayment === "other" && (
                        <>
                            {isLoading ? (
                                <p className="mt-2 text-gray-500">
                                    Loading available cryptocurrencies...
                                </p>
                            ) : (
                                <select
                                    className="mt-2 w-full p-2 border rounded"
                                    value={selectedCrypto}
                                    onChange={(e) =>
                                        setSelectedCrypto(e.target.value)
                                    }
                                >
                                    {cryptoOptions.map((coin) => (
                                        <option key={coin} value={coin}>
                                            {coin}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Create Invoice Button */}
            <button
                onClick={handleCreateInvoice}
                className={`mt-4 w-full text-white py-2 px-4 rounded-lg ${
                    isButtonDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={isButtonDisabled}
            >
                Generate Payment Invoice
            </button>

            {/* Help Link */}
            <p className="mt-2 text-center text-sm text-gray-500">
                Don’t know how to pay with crypto?{" "}
                <Link
                    as="button"
                    href={route("help.guide")}
                    className="text-blue-600 hover:underline"
                >
                    learn how to pay with cards and PayPal
                </Link>
            </p>
        </div>
    );
}
