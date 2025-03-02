import React, { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import LightningInvoice from '@/Components/LightningInvoice';
import Swal from 'sweetalert2';
import { usePage } from '@inertiajs/react'
import { FaArrowLeft } from 'react-icons/fa';
import StealthLink from '@/Components/StealthLink';




const Show = ({ lightning }) => {
    const { status, id, sat, expires_at, amount, address, order_id } = lightning.data;
    const { flash } = usePage().props;
  


    // useEffect(() => {
    //     if (flash.message) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: flash.message,
    //         });
    //     }
    // }, [flash.message]);




    return (
        <>

            <Head title="Lightning Invoice" />
            {status === 'unpaid' && (
                <LightningInvoice
                    id={id}
                    amountSats={sat}
                    expires_at={expires_at}
                    amountDollars={amount}
                    address={address}
                    order_id={order_id}
                />
            )}
            {status === 'expired' && (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold text-red-600">Oops! Payment Expired</h1>
                        <p className="text-gray-700 text-lg">Your payment session has expired. Please try again.</p>
                        
                        <StealthLink  href={route('orders.show', order_id)}>
                            <button
                                className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300 active:scale-95"
                            >
                                Retry Payment
                            </button>
                        </StealthLink>
                    </div>
                </div>

            )}
            {status === 'paid' && (
                <div className="flex flex-col items-center justify-center mt-8 text-center space-y-4">
                    <h1 className="text-3xl font-bold text-green-600">Payment Received!</h1>
                    <p className="text-gray-700 text-lg">Your payment was successful. Click below to access your order.</p>
                    <StealthLink  href={route('orders.show', order_id)}>
                        <button
                            className="mt-4 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95"
                        >
                            Access Your Order
                        </button>

                    </StealthLink>

                </div>

            )}
        </>
    );
};

export default Show;
