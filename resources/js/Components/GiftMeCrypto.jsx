import { FiExternalLink } from 'react-icons/fi';
import { Link } from '@inertiajs/react';

export default function GiftMeCrypto() {
    return (
        <div className="space-y-4">
            <p>
                You can find a list of websites that sell Gift Me Crypto gift cards at the following link:
            </p>
            <a href="https://giftmecrypto.io/en/partners" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GiftMeCrypto Partners <FiExternalLink className="inline w-4 h-4" />
            </a>
            <p>
                After purchasing, please contact me on Telegram with the key.
            </p>
            <div className="flex flex-col space-y-4 mt-4">
                <Link as='button' href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition">
                    Contact on Telegram
                </Link>
            </div>
        </div>
    );
}