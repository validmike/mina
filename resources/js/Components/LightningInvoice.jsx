import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaArrowLeft, FaHourglassHalf, FaCopy, FaWallet } from "react-icons/fa";
import StealthLink from "./StealthLink";
import RandomNumber from "./RandomNumber";
import CheckLightningStatus from "./CheckLightningStatus";

const LightningInvoice = ({ id, amountSats, expires_at, amountDollars, address ,order_id }) => {
    const [timeLeft, setTimeLeft] = useState(getRemainingTime());
    const [copied, setCopied] = useState(false);
    const [status, setStatus] = useState('Unpaid');


    function getRemainingTime() {
        const now = Math.floor(Date.now() / 1000);
        const expiry = Math.floor(expires_at / 1000);
        const diff = expiry - now;
        return diff > 0 ? diff : 0;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getRemainingTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full h-full max-w-md mx-auto border rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100">
                {/* Top Section (Nav Bar) */}
                <div className="flex justify-between items-center px-4 py-2 border-b">
                    <button
                        onClick={() => window.history.back()} // Navigate to the previous page
                        className="flex items-center text-gray-700 transition duration-150 ease-in-out"
                    >
                        <FaArrowLeft className="mr-2" /> {/* Back icon */}
                        Back
                    </button>
                    <div className="flex items-center text-gray-700 font-semibold">
                        <FaHourglassHalf className="animate-spin mr-2" />
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-4 text-center bg-gray-200">
                    <div className="text-2xl font-bold">${amountDollars} <span className="text-sm">USD</span></div>
                    <div className="text-sm text-gray-600">{amountSats} SATS</div>
                </div>
            </div>

            {/* Body */}
            <div className="bg-white p-6 text-center">
                {/* Status */}
                <div className="flex justify-center items-center space-x-2 text-gray-700 font-semibold mb-4">
                    <div className="animate-spin h-5 w-5 border-t-2 border-gray-700 rounded-full"></div>
                    <span>Status:</span>
                    <span id="status" className="text-red-700">{status}</span>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-4">
                    <QRCodeSVG value={address} size={160} />
                </div>
                <div className="flex justify-center mb-4 text-sm">
                    <textarea
                        readOnly
                        value={address}
                        className="text-xs text-center border px-2 py-1 bg-gray-100 resize-none w-full"
                        rows={6} // Adjust as needed
                    />
                </div>




                {/* Buttons */}
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={copyToClipboard}
                        className="flex items-center border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:text-black"
                    >
                        <FaCopy className="mr-2" />
                        {copied ? "Copied!" : "Copy Address"}
                    </button>

                    <a
                        href={`lightning:${address}`}
                        className="flex items-center border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWallet className="mr-2" />
                        Open Wallet
                    </a>
                </div>
                <div className="text-gray-600 text-sm mb-4 mt-4 font-semibold">
                    ⚠️ Keep this page open or return after sending the funds so the system can confirm your order.
                </div>
            </div>
            <CheckLightningStatus lightning_id={id} setStatus={setStatus} />

        </div>
    );
};

export default LightningInvoice;
