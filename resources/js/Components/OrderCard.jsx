import { useState, useEffect } from "react";
import { Link, router } from "@inertiajs/react";
import { FaBitcoin, FaBolt, FaCoins, FaArrowUp, FaExclamationTriangle } from "react-icons/fa";
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
            const filteredCoins = coins.filter((coin) => coin !== "BTC"); // Exclude BTC
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
            router.post(route("bitcoins.store"), {
                order_id: order.id,
            });
        } else if (selectedPayment === "other") {
            router.post(route("cryptos.store"), {
                order_id: order.id,
                crypto: selectedCrypto,
            });
        } else {
            router.post(route(`${selectedPayment}.store`), {
                order_id: order.id,
            });
        }
    };

    return (
        <div className="p-2 bg-white rounded-lg shadow-md">
            {/* ⚠️ Bitcoin Payment Warning */}
            {/* <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded-md mb-4 flex items-start gap-2">
                <FaExclamationTriangle className="text-red-600 mt-1 text-lg" />
                <p className="text-sm font-semibold leading-relaxed">
                    ⚠️ <span className="font-bold">Bitcoin Payment Issues:</span> We are currently
                    experiencing temporary issues with Bitcoin payments (both On-Chain and Lightning).
                    If you faced an error while trying to pay with Bitcoin, please use{" "}
                    <span className="font-bold text-red-800">other cryptocurrencies</span> 
                    to complete your payment, or contact support if you prefer to pay manually via BTC.
                    <br />
                    <span className="font-medium">
                        Thank you for your patience and understanding.
                    </span>
                </p>

            </div> */}

            <h2 className="text-xl font-semibold mb-4">Order #{order.number}</h2>

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
                                    onChange={(e) => setSelectedCrypto(e.target.value)}
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
                    Learn how to pay with cards and PayPal
                </Link>
            </p>
        </div>
    );
}
