import OrderCard from '@/Components/OrderCard';
import PaidOrder from '@/Components/PaidOrder';
import PaymentList from '@/Components/PaymentList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Show({ order, payments }) {
    var order = order.data
    console.log(payments)

    return (
        <AuthenticatedLayout>
            <Head title="Order" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {order.paid_at ? (
                                // Component for paid order
                                <>
                                <PaidOrder id={order.id} number ={order.number}></PaidOrder>
                                </>
                            ) : (
                                <>
                                    <OrderCard order={order}></OrderCard>
                                    <div className='mt-2'>
                                        <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                                            Payment History for this Order
                                        </h4>
                                    </div>
                                    <PaymentList payments = {payments}></PaymentList>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
