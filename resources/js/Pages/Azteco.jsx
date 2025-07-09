import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import Azteco from "@/Components/Azteco";
import GiftMeCrypto from "@/Components/GiftMeCrypto";
import { FaExclamationTriangle } from "react-icons/fa";
import Rewarble from "@/Components/Rewarble";

export default function AztecoPage() {
    const [activeTab, setActiveTab] = useState("azteco");

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Crypto Gift Cards
                </h2>
            }
        >
            <Head title="Azteco & Gift Me Crypto" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6 text-gray-900">
                        <p className="mb-4">
                            There are 3 crypto gift cards supported at the
                            moment. You can buy them with various payment
                            methods:
                        </p>

                        <ul className="list-disc pl-6 mb-4">
                            <li>
                                <a
                                    href="https://azte.co/buy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Azteco Lightning Bitcoin Voucher
                                </a>
                            </li>
                            <li>
                                <p className="text-blue-600 hover:underline">
                                    giftmecrypto.io
                                </p>
                            </li>
                            <li>
                                <a
                                    href="https://www.g2a.com/rewarble-super-gift-card-10-eur-by-rewarble-key-global-i10000506957002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Rewarble Super Gift Card
                                </a>
                                <p>(Best for the US)</p>
                            </li>
                        </ul>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                            <div className="flex items-start gap-3">
                                <FaExclamationTriangle className="text-yellow-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-yellow-800">
                                        Recommended Gift Card
                                    </p>
                                    <p className="text-sm text-yellow-700 mt-1">
                                        <span className="font-semibold">
                                            Best option:
                                        </span>{" "}
                                        Try buying an Azteco voucher first—it
                                        has lower fees for both of us and
                                        processes instantly.
                                    </p>
                                    <p className="text-sm text-yellow-700 mt-1">
                                        <span className="font-semibold">
                                            Alternative:
                                        </span>{" "}
                                        If you can't buy Azteco, buy a Crypto
                                        Giftcard instead.
                                    </p>
                                    <p className="text-sm text-yellow-700 mt-1">
                                        <span className="font-semibold">
                                            Rewarble Gift Card:
                                        </span>{" "}
                                        This gift card is the easiest to
                                        purchase, but depending on your region,
                                        it may come with slightly higher fees.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 border-b mb-4">
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "azteco"
                                        ? "border-b-2 border-blue-600 font-semibold"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("azteco")}
                            >
                                Azteco
                            </button>
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "giftmecrypto"
                                        ? "border-b-2 border-blue-600 font-semibold"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("giftmecrypto")}
                            >
                                Gift Me Crypto
                            </button>
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "rewarble"
                                        ? "border-b-2 border-blue-600 font-semibold"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("rewarble")}
                            >
                                Rewarble
                            </button>
                        </div>
                        <div>
                            {activeTab === "azteco" ? (
                                <Azteco />
                            ) : activeTab === "giftmecrypto" ? (
                                <GiftMeCrypto />
                            ) : activeTab === "rewarble" ? (
                                <Rewarble></Rewarble>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
