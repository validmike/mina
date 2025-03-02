import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { FaVideo } from 'react-icons/fa'; 

export default function GroupDemo({  watermark }) {

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
                            className='px-4 py-2 text-sm font-medium'

                        >
                            RANDOM
                        </Link>
                        <Link
                            as='button'
                        
                            href="/demos?product_id=1"
                            className='px-4 py-2 text-sm font-medium'

                        >
                            PACK 1
                        </Link>
                        <Link
                            href="/demos?product_id=2"
                            as='button'
                            className='px-4 py-2 text-sm font-medium'
                        >
                            PACK 2
                        </Link>
                        <Link
                            href="/demos/group"
                            as='button'
                            className='px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600' 
                        >
                            Group
                        </Link>
                    </div>

                    <div
                        className="relative w-full h-64 bg-no-repeat bg-contain bg-center rounded-lg shadow-md mb-2 "
                        style={{ backgroundImage: `url('https://files.catbox.moe/2g30xh.jpg')` }}
                        >
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-bold">
                            {watermark}
                        </div>
                    </div>
                    <div
                        className="relative w-full h-64 bg-no-repeat bg-contain bg-center rounded-lg shadow-md mb-2 "
                        style={{ backgroundImage: `url('https://files.catbox.moe/kiw9jz.jpg')` }}
                        >
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-bold">
                            {watermark}
                        </div>
                    </div>
                    <div
                        className="relative w-full h-64 bg-no-repeat bg-contain bg-center rounded-lg shadow-md mb-2 "
                        style={{ backgroundImage: `url('https://files.catbox.moe/qlq03f.jpg')` }}
                        >
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-bold">
                            {watermark}
                        </div>
                    </div>
                    <div
                        className="relative w-full h-64 bg-no-repeat bg-contain bg-center rounded-lg shadow-md mb-2 "
                        style={{ backgroundImage: `url('https://files.catbox.moe/hqvjo2.jpg')` }}
                        >
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-bold">
                            {watermark}
                        </div>
                    </div>



                </div>
            </div>
        </AuthenticatedLayout>
    );
}