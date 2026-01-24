import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useMemo } from 'react';

export default function Video({ level }) {
    const videos = [
        {
            fullUrl: 'https://files.catbox.moe/kqm1c0.mp4',
            demoUrl: 'https://files.catbox.moe/2afnb4.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/j7xckh.mp4',
            demoUrl: 'https://files.catbox.moe/8bxsb3.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/lx2whn.mp4',
            demoUrl: 'https://files.catbox.moe/64l6sz.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/1jl02h.mp4',
            demoUrl: 'https://files.catbox.moe/5623xh.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/lcs58x.mp4',
            demoUrl: 'https://files.catbox.moe/s9xsk2.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/bnw29i.mp4',
            demoUrl: 'https://files.catbox.moe/rroh48.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/tp9o8s.mp4',
            demoUrl: 'https://files.catbox.moe/dur9l0.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/n6d0m7.mp4',
            demoUrl: 'https://files.catbox.moe/xajkrs.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/psknge.mp4',
            demoUrl: 'https://files.catbox.moe/tho9tb.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/05njx3.mp4',
            demoUrl: 'https://files.catbox.moe/3ub73t.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/y6y1yp.mp4',
            demoUrl: 'https://files.catbox.moe/qhfvqn.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/l0awnt.mp4',
            demoUrl: 'https://files.catbox.moe/xfg1g7.mp4',
            caption: 'Invite 30 people or buy a pack to unlock the full uncensored video.'
        },
        {
            fullUrl: 'https://files.catbox.moe/1smi29.mp4',
            demoUrl: 'https://files.catbox.moe/axjx3h.mp4',
            caption: 'Unlock the full content by reaching Level 3.'
        },
        {
            fullUrl: 'https://files.catbox.moe/cei6hv.mp4',
            demoUrl: 'https://files.catbox.moe/umnqrl.mp4',
            caption: 'Unlock the full content by reaching Level 3.'
        },
        {
            fullUrl: 'https://files.catbox.moe/ee8giv.mp4',
            demoUrl: 'https://files.catbox.moe/p9ehs8.mp4',
            caption: 'Unlock the full content by reaching Level 3.'
        },
        // Add more videos as needed
    ];

    const perPage = 5;
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(videos.length / perPage);

    const pageVideos = useMemo(() => {
        const start = (page - 1) * perPage;
        return videos.slice(start, start + perPage);
    }, [page, videos]);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Video</h2>}
        >
            <Head title="Videos" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Notice</p>
                                <p>Use a VPN if videos are not loading. Be patient while the videos load.</p>
                            </div>

                            {pageVideos.map((video, index) => (
                                <div key={index} className="mb-8">
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
                                    </video>

                                    <div className="text-center mt-4 text-lg font-semibold text-gray-800">
                                        {video.caption}
                                    </div>
                                </div>
                            ))}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-6 flex items-center justify-center space-x-4">

                                    <button
                                        disabled={page === 1}
                                        onClick={() => setPage(page - 1)}
                                        className={`px-4 py-2 rounded ${
                                            page === 1 
                                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                            : 'bg-blue-500 text-white hover:bg-blue-600'
                                        }`}
                                    >
                                        Previous
                                    </button>

                                    <span className="font-medium text-gray-700">
                                        Page {page} of {totalPages}
                                    </span>

                                    <button
                                        disabled={page === totalPages}
                                        onClick={() => setPage(page + 1)}
                                        className={`px-4 py-2 rounded ${
                                            page === totalPages 
                                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                            : 'bg-blue-500 text-white hover:bg-blue-600'
                                        }`}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
