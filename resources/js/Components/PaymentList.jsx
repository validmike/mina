import React from 'react';
import StealthLink from './StealthLink';

const PaymentList = ({ payments }) => {
    return (
        <div className="p-4">
            {payments.length === 0 ? (
                <p className="text-center text-gray-500">No habe no payments yet</p>
            ) : (
                // Reverse the array to show the most recent first
                payments.reverse().map((payment) => {
                    // Dynamically set the link based on the coin type
                    const link = payment.coin === 'lightning btc' 
                        ? `/lightning/${payment.id}` 
                        : `/cryptos/${payment.id}`;

                    return (
                        <div key={payment.id} className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
                            <div className="mb-2">
                                <p><strong className="font-semibold">Coin:</strong> {payment.coin}</p>
                                <p><strong className="font-semibold">Status:</strong> {payment.status}</p>
                            </div>
                            <div className="mt-2">
                                <StealthLink href={link}>
                                    <button className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                        View Payment 
                                    </button>
                                </StealthLink>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default PaymentList;
