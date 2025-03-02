import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Orders({ orders }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Orders</h2>}
        >
            <Head title="Orders" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 text-left border-b">Order Number</th>
                                        <th className="px-4 py-2 text-left border-b">Title</th>
                                        <th className="px-4 py-2 text-left border-b"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <tr key={order.id} className="border-b">
                                                <td className="px-4 py-2">{order.number}</td>
                                                <td className="px-4 py-2">{order.title}</td>
                                                <td className="px-4 py-2">
                                                    <Link
                                                        as="button"
                                                        href={route('orders.show', order.id)}
                                                        className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                                                    >
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="px-4 py-6 text-center text-gray-500">
                                                No orders found.
                                                <div className="flex justify-center mt-4">
                                                    <Link 
                                                        as="button" 
                                                        href="/products" 
                                                        className="text-blue-500 underline text-lg"
                                                    >
                                                        Create your first order
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
