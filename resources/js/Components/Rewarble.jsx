import { FiExternalLink } from 'react-icons/fi';
import { Link } from '@inertiajs/react';

export default function Rewarble() {
    return (
        <div className="space-y-4">
            <p>
                For the €11.99 packs, you can buy a €10 gift card from G2A. For the VIP group, you’ll need two €10 cards.
            </p>

            <a
                href="https://driffle.com/gift-me-crypto-25-eur-gift-card-global-digital-key-p9925699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
            >
                Buy on G2A (Credit/Debit card, Google Pay) <FiExternalLink className="inline w-4 h-4" />
            </a>

            <p>
                Alternatively, you can also purchase this gift card from Driffle.
            </p>

            <p>
                You can buy one £10 gift card for the $11.99 packs, or a £20 gift card for the VIP group.
            </p>

            <a
                href="https://driffle.com/rewarble-super-20-gbp-gift-card-global-rewarble-digital-key-p9937875"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
            >
                Buy on Driffle (Credit/Debit card) <FiExternalLink className="inline w-4 h-4" />
            </a>

            <p>
                After purchasing, please contact me on Telegram and send the gift card key.
            </p>

            <div className="flex flex-col mt-4">
                <Link
                    as="button"
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
                >
                    Contact on Telegram
                </Link>
            </div>
        </div>
    );
}
