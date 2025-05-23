import Group from '@/Components/Group';
import Mom from '@/Components/Mom';
import ProductCard from '@/Components/ProductCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react'; 

export default function Products({ products, telegramPremium }) {
    return (
        <AuthenticatedLayout>
            <Head title="Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            {/* Show the special offer message if telegramPremium is 1 */}
                            {telegramPremium == 1 && (
                                <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                                    <p className="text-lg font-semibold text-yellow-700">
                                        Limited Offer! 🎉
                                    </p>
                                    <p className="text-gray-700">
                                        You can now buy a pack by gifting a Telegram Premium subscription, which is one of the easiest payment methods available. 
                                        For more information, contact me on Telegram with the message: 
                                        <strong>"I'd like to order a pack with a Telegram Premium gift."</strong>
                                    </p>
                                    <Link
                                        href="/contact"
                                        as='button'
                                        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-center"
                                    >
                                        Order Now
                                    </Link>
                                </div>
                            )}

                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}

                            <div className="mt-2 mb-1">
                                {/* <Mom /> */}
                            </div>
                            <div className="mt-2 mb-1">
                                <Group />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
