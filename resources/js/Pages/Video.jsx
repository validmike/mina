import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Video({ level }) {
    const videos = [
        {
            fullUrl: 'https://files.catbox.moe/l0awnt.mp4',
            demoUrl: 'https://files.catbox.moe/w9fapd.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/a0dw77.mp4',
            demoUrl: 'https://files.catbox.moe/kgg97s.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/5w43t4.mp4',
            demoUrl: 'https://files.catbox.moe/c1ezud.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/nbbahv.mp4',
            demoUrl: 'https://files.catbox.moe/657n4p.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/r0lu0z.mp4',
            demoUrl: 'https://files.catbox.moe/kkur47.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/xuiizj.mp4',
            demoUrl: 'https://files.catbox.moe/vgb906.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/ktc1fa.mp4',
            demoUrl: 'https://files.catbox.moe/vjam68.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/830vhi.mp4',
            demoUrl: 'https://files.catbox.moe/aq85lk.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/zkxwls.mp4',
            demoUrl: 'https://files.catbox.moe/ljvbz6.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },

        // Add more videos as needed
    ];
   const perPage = 5;
    const [visibleCount, setVisibleCount] = useState(perPage);

    const visibleVideos = videos.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + perPage, videos.length));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Video
                </h2>
            }
        >
            <Head title="Videos" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            {/* Notice box */}
                            <div
                                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6"
                                role="alert"
                            >
                                <p className="font-bold">Notice</p>
                                <p>Use a VPN if videos are not loading. Be patient while the videos load.</p>
                            </div>

                            {/* Videos */}
                            {visibleVideos.map((video, index) => {
                                const resolvedSrc = level === 3 ? video.fullUrl : video.demoUrl;

                                return (
                                    <div key={index} className="mb-8">
                                        <div className="relative w-full">
                                            <video
                                                controls
                                                controlsList="nodownload"
                                                disablePictureInPicture
                                                onContextMenu={(e) => e.preventDefault()}
                                                className="w-full rounded-lg"
                                            >
                                                <source src={resolvedSrc} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                        <div className="text-center mt-4 text-lg font-semibold text-gray-800">
                                            {video.caption}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Load more button */}
                            {visibleCount < videos.length && (
                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={handleLoadMore}
                                        className="px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                                    >
                                        Load more videos
                                    </button>
                                </div>
                            )}

                            {/* Optional: small hint when all videos are shown */}
                            {visibleCount >= videos.length && videos.length > 0 && (
                                <div className="mt-4 text-center text-sm text-gray-500">
                                    You’ve reached the end.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}