import React, { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import LightningInvoice from '@/Components/LightningInvoice';
import Swal from 'sweetalert2';
import { usePage } from '@inertiajs/react'
import { FaArrowLeft } from 'react-icons/fa';
import StealthLink from '@/Components/StealthLink';
import CryptoInvoice from '@/Components/CryptoInvoice';




const Show = ({ crypto }) => {
    const { status, id, coin, expires_at, amount, crypto_amount, address, order_id } = crypto.data;
    const { flash } = usePage().props;
  
    return (
        <>

            <Head title="Crypto Invoice" />
            {
            [ 'sending', 'finished', 'confirming', 'confirmed'].includes(status) 
                ? (
                    // Component to render when status is one of the specified values
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
                ) 
                : (
                    // Component to render when status is NOT one of the specified values
                    <CryptoInvoice
                    id={id}
                    crypto_amount={crypto_amount}
                    coin = {coin}
                    expires_at={expires_at}
                    amountDollars={amount}
                    address={address}
                    order_id={order_id}
                    ></CryptoInvoice>
                    
                )
            }

        </>
    );
};

export default Show;
