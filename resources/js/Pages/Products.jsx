import Group from '@/Components/Group';
import ProductCard from '@/Components/ProductCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Products({products}) {
    return (
        <AuthenticatedLayout

        >
            <Head title="Products" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}

                            />
                            ))}
                            <div className='mt-2 mb-1 '>
                                <Group></Group>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
