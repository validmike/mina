import OrderCard from "@/Components/OrderCard";
import PaidOrder from "@/Components/PaidOrder";
import PaidOrderGroup from "@/Components/PaidOrderGroup";
import PaymentList from "@/Components/PaymentList";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FiClock } from 'react-icons/fi';
import { useEffect } from 'react';



export default function Show({ order, payments }) {
    var order = order.data;
    useEffect(() => {
        const el = document.querySelector('.message-icon');
        if (el) el.style.display = 'none';
    }, []);
    

    return (
        <AuthenticatedLayout>
            <Head title="Order" />

            <div className="py-12 -mt-10 ">
                <div className="mx-auto -mt-10 max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-2 text-gray-900">
                            {order.paid_at ? (
                                order.isGroup === 1 ? (
                                    <PaidOrderGroup
                                        id={order.id}
                                        number={order.number}
                                        order={order}
                                    ></PaidOrderGroup>
                                ) : (
                                    <PaidOrder
                                        id={order.id}
                                        number={order.number}
                                    />
                                )
                            ) : (
                                <>
                                    <OrderCard order={order}></OrderCard>
                                    <div className="mt-6 text-center">
                                        <h4 className="inline-flex items-center text-xl font-semibold text-gray-800 gap-2">
                                            <FiClock className="text-gray-600 text-xl" />
                                            Payment History for this Order
                                        </h4>
                                    </div>
                                    <PaymentList
                                        payments={payments}
                                    ></PaymentList>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
