import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Video({ level }) {
    const videos = [
        {
            fullUrl: 'https://files.catbox.moe/h7if7t.mp4',
            demoUrl: 'https://files.catbox.moe/llaxru.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/txifmk.mp4',
            demoUrl: 'https://files.catbox.moe/6ehhm0.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/1jl02h.mp4',
            demoUrl: 'https://files.catbox.moe/1r3uw8.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/btrvro.mp4',
            demoUrl: 'https://files.catbox.moe/i2y5bm.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/d0pi13.mp4',
            demoUrl: 'https://files.catbox.moe/rdukui.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/ju366v.mp4',
            demoUrl: 'https://files.catbox.moe/5j8mlh.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            demoUrl: 'https://files.catbox.moe/dbn9mg.mp4',
            fullUrl: 'https://files.catbox.moe/6b50mv.mp4',
            caption: 'Unlock the full content by reaching Level 3.'
        },
        {
            demoUrl: 'https://files.catbox.moe/8xwita.mp4',
            fullUrl: 'https://files.catbox.moe/lzvvbb.mp4',
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
