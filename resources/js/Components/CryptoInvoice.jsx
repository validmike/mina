import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaArrowLeft, FaHourglassHalf, FaCopy, FaWallet, FaCheck } from "react-icons/fa";
import StealthLink from "./StealthLink";
import CheckCryptoStatus from "./CheckCryptoStatus";

const CryptoInvoice = ({ id, crypto_amount, coin, expires_at, amountDollars, address, order_id }) => {
    const [copied, setCopied] = useState(false);
    const [copiedAmount, setCopiedAmount] = useState(false);
    const [status, setStatus] = useState('waiting');
    const [timeLeft, setTimeLeft] = useState(getRemainingTime());
    console.log(expires_at);

    function getRemainingTime() {
        const now = Math.floor(Date.now() / 1000);
        const expiry = Math.floor(expires_at / 1000);
        const diff = expiry - now;
        return diff > 0 ? diff : 0;
    }


    const copyToClipboard = (text, setCopiedState) => {
        navigator.clipboard.writeText(text);
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2000);
    };
    const formatTime = (seconds) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        return `${minutes}:${secs}`;
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getRemainingTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto border rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100">
                {/* Top Section (Nav Bar) */}
                <div className="flex justify-between items-center px-4 py-2 border-b">
                    <StealthLink href={route("orders.show", { id: order_id })}>
                        <button className="flex items-center text-gray-700 text-sm">
                            <FaArrowLeft className="mr-2" />
                            Go back to order
                        </button>
                    </StealthLink>
                    <div className="flex items-center text-gray-700 font-semibold">
                        <FaHourglassHalf className="animate-spin mr-2" />
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-4 text-center bg-gray-200">
                    <div className="text-3xl font-bold">${amountDollars} <span className="text-sm">USD</span></div>
                    <div className="text-2xl font-bold flex justify-center items-center mt-2 uppercase">
                        {crypto_amount} {coin}
                        <button onClick={() => copyToClipboard(crypto_amount, setCopiedAmount)} className="ml-2 text-lg text-gray-600 hover:text-black">
                            {copiedAmount ? <FaCheck /> : <FaCopy />} {/* Toggle between icons */}
                        </button>
                    </div>
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

                {/* Address */}
                <div className="mb-4 text-sm break-words font-mono text-gray-800 border p-2 bg-gray-100">
                    {address}
                </div>

                {/* Warnings */}
                <div className="text-red-600 text-sm mb-4 font-semibold">
                    ⚠️ Only send <span className=" uppercase font-bold">{coin}</span>  to this address or your order will not be processed.
                </div>
                <div className="text-yellow-600 text-sm mb-4 font-semibold">
                    ⚠️ Watch out for network fees and ensure the exact amount or a little more is sent.
                </div>
                <div className="text-gray-600 text-sm mb-4 font-semibold">
                    ⚠️ Keep this page open or return after sending the funds so the system can confirm your order.
                </div>

                {/* Buttons */}
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={() => copyToClipboard(address, setCopied)}
                        className="flex items-center border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:text-black"
                    >
                        <FaCopy className="mr-2" />
                        {copied ? "Copied!" : "Copy Address"}
                    </button>

                    <a
                        href={`${coin}:${address}`}
                        className="flex items-center border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWallet className="mr-2" />
                        Open in Wallet
                    </a>
                </div>
            </div>
            <CheckCryptoStatus crypto_id={id} setStatus={setStatus} />

        </div>
    );
};

export default CryptoInvoice;