import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ScreenshotSlider from '@/Components/ScreenshotSlider';

export default function Proofs({watermark}) {
    const sliders = [
        {
            images: [
                "https://files.catbox.moe/8uu6jw.jpg",
                "https://files.catbox.moe/lnila1.jpg"
            ],
            watermark: watermark
        },
        {
            images: [
                "https://files.catbox.moe/c6utw5.jpg",
                "https://files.catbox.moe/6b51il.jpg"
            ],
            watermark: watermark
        },
        {
            images: [
                "https://files.catbox.moe/kxthgl.jpg",
                "https://files.catbox.moe/s5wyhp.jpg"
            ],
            watermark: watermark
        },
        {
            images: [
                "https://files.catbox.moe/eivs8x.jpg",
                "https://files.catbox.moe/ed5980.jpg"
            ],
            watermark: watermark
        },
        {
            images: [
                "https://files.catbox.moe/6wvnqy.jpg",
                "https://files.catbox.moe/72zbfj.jpg"
            ],
            watermark: watermark
        },
        {
            images: [
                "https://files.catbox.moe/826rt1.jpg",
                "https://files.catbox.moe/wd8akc.jpg"
            ],
            watermark: watermark
        },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Proofs</h2>}
        >
            <Head title="Proofs" />

            <div className="py-12">
                <div className="mb-4">
                    <p>
                        these are the people who bought the VIP group:
                    </p>
                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Proof Screenshots</h3>
                        <div className="space-y-8">
                            {sliders.map((slider, index) => (
                                <ScreenshotSlider
                                    key={index}
                                    images={slider.images}
                                    watermark={slider.watermark}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
