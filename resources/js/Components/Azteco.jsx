import { FiExternalLink } from 'react-icons/fi';
import { Link } from '@inertiajs/react';

export default function Azteco() {
    return (
        <div className="space-y-4">
            <p>
                I recommend buying Azteco vouchers from these two websites first, as they usually accept Visa and MasterCard:
            </p>
            <ul className="list-disc pl-6">
                <li>
                    <a href="https://www.eneba.com/azte-co-azteco-bitcoin-lightning-voucher-25-eur-key-global" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Eneba <FiExternalLink className="inline w-4 h-4" />
                    </a>
                </li>
                <li>
                    <a href="https://driffle.com/azteco-bitcoin-lightning-voucher-25-eur-gift-card-digital-code-p9901780" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Driffle <FiExternalLink className="inline w-4 h-4" />
                    </a>
                </li>
            </ul>
            <p>Other options include:</p>
            <ul className="list-disc pl-6">
                <li>
                    <a href="https://www.offgamers.com/product/azteco-gift-cards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        OffGamers <FiExternalLink className="inline w-4 h-4" /> (Accepts PayPal, Apple Pay, Google Pay)
                    </a>
                </li>
                <li>
                    <a href="https://www.g2a.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        G2A (skrill/paysafcard) <FiExternalLink className="inline w-4 h-4" />
                    </a>
                </li>
                <li>
                    <a href="https://www.moontopup.com/us/en/payment-cards/azteco-bitcoin-voucher-lightning/azteco-bitcoin-25-voucher-lightning" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        MoonTopUp(paypal) <FiExternalLink className="inline w-4 h-4" />
                    </a>
                </li>
                <li>
                    <a href="https://dundle.com/azteco/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Dundle <FiExternalLink className="inline w-4 h-4" />
                    </a>
                </li>
            </ul>
            <p>
                After purchasing, you can either contact me on Telegram or use this guide to quickly set up your own Bitcoin wallet and autamatically buy a pack on this website.
            </p>
            <div className="flex flex-col space-y-4 mt-4">
                <Link as='button' href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
                    Contact on Telegram
                </Link>
                <Link as='button' href="/guide/satoshi" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition">
                    Set Up Your BTC Wallet
                </Link>
            </div>
        </div>
    );
}
