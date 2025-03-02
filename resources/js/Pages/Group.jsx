import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Group({telegram_link}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Group Purchase
                </h2>
            }
        >
            <Head title="Group Purchase" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6 text-gray-900">
                        <h3 className="text-lg font-semibold mb-4">Group Purchase Information</h3>
                        <p className="mb-2">Currently, purchasing access to the group is only available by contacting me on Telegram.</p>
                        <p className="mb-4">The group includes <span className="font-bold">both Packs 1 & 2 plus additional exclusive content:</span></p>
                        <p>if you pay $20 you get 500 more videos direclty in the group</p>
                        <p>if you pay $25 you get 1000 more videos direclty in the group</p>
                        <br />
                        <p className=' font-bold'>You will be the owner of the group and responsible for it</p>
                        
                        <h4 className="text-md font-semibold mt-4">Accepted Payment Methods:</h4>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Cryptocurrency</li>
                            <li>CashApp Bitcoin</li>
                            <li>Bitcoin Gift Card</li>
                        </ul>
                        
                        <Link
                            as='button' 
                            href="/guide" 
                            className="text-blue-600 hover:underline block mb-6"
                        >
                            View Payment Guide
                        </Link>
                        
                        <div className="text-center">
                            <a href={telegram_link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block">
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
