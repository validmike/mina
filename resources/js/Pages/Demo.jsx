import DemoCard from '@/Components/DemoCard';
import StealthLink from '@/Components/StealthLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { FaVideo } from 'react-icons/fa'; 

export default function Demo({ demos, userLevel, watermark }) {
    // Get the current query parameters from the URL
    const { url } = usePage();
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const productId = urlParams.get('product_id');

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Demo
                </h2>
            }
        >
            <Head title="Demo" />

            <div className="py-12 flex-1 overflow-auto">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Warning Text */}
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
                        <p className="font-bold">Warning</p>
                        <p>Censored images will be uncensored as you invite people and level up.</p>
                        <p>if pictures are not loaded use a VPN, if issue persists try again later</p>
                    </div>
                    <div>
                        <Link 
                        as='button'
                        href={route('demos.video')} 
                        className="w-full py-3 bg-red-500 text-white font-bold rounded-lg shadow-md text-center  flex items-center justify-center"
                        >
                        <FaVideo className="mr-2" /> 
                        Demo Videos
                        </Link>
                    </div>



                    {/* Filter Buttons */}
                    <div className="flex space-x-4 mb-6">
                        <Link
                            as='button'

                            href="/demos"
                            className={`px-4 py-2 text-sm font-medium ${
                                !productId
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            RANDOM
                        </Link>
                        <Link
                            as='button'
                        
                            href="/demos?product_id=1"
                            className={`px-4 py-2 text-sm font-medium ${
                                productId === '1'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            PACK 1
                        </Link>
                        <Link
                            href="/demos?product_id=2"
                            as='button'
                            className={`px-4 py-2 text-sm font-medium ${
                                productId === '2'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            PACK 2
                        </Link>
                        <Link
                            href="/demos?product_id=5"
                            as='button'
                            className={`px-4 py-2 text-sm font-medium ${
                                productId === '2'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Organized
                        </Link>
                        <Link
                            href="/demos/group"
                            as='button'
                            className='px-4 py-2 text-sm font-medium'
                        >
                            Group
                        </Link>
                    </div>

                    {/* Demo Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                        {demos.map((demo) => (
                            <DemoCard
                                key={demo.id}
                                url={userLevel >= demo.level ? demo.url : demo.blurred_url}
                                watermark={watermark}
                                level= {demo.level}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}