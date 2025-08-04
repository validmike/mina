import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Video({ level }) {
    const videos = [
        {
            demoUrl: 'https://files.catbox.moe/qrnq5i.mp4',
            fullUrl: 'https://files.catbox.moe/mlfykt.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://files.catbox.moe/mok5ia.mp4',
            fullUrl: 'https://files.catbox.moe/15iwg0.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://files.catbox.moe/pida8b.mp4',
            fullUrl: 'https://files.catbox.moe/wipob3.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://files.catbox.moe/btrvro.mp4',
            fullUrl: 'https://files.catbox.moe/i2y5bm.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://files.catbox.moe/gsqzsh.mp4',
            fullUrl: 'https://files.catbox.moe/yoe8s2.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://files.catbox.moe/o4mdt5.mp4',
            fullUrl: 'https://files.catbox.moe/xmgin0.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://bibisisi.site/videos/c/7.mp4',
            fullUrl: 'https://bibisisi.site/videos/7.mp4',
            caption: 'Unlock the full content by reaching Level 3.'
        },
        // Add more videos as needed
    ];

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
                                <p className="font-bold">Notice</p>
                                <p>Use a VPN if videos are not loading. Be patient while the videos load.</p>
                            </div>

                            {videos.map((video, index) => (
                                <div key={index} className="mb-8">
                                    <div className="relative w-full">
                                        <video 
                                            controls 
                                            controlsList="nodownload" 
                                            disablePictureInPicture 
                                            onContextMenu={(e) => e.preventDefault()} 
                                            className="w-full rounded-lg"
                                        >
                                            <source 
                                                src={level === 3 ? video.fullUrl : video.demoUrl} 
                                                type="video/mp4" 
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

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
