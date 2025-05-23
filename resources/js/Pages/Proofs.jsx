import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ScreenshotSlider from "@/Components/ScreenshotSlider";

export default function Proofs({ watermark, country }) {
    const sliders = [
        {
            images: [
                "https://files.catbox.moe/sqlezo.jpg",
                "https://files.catbox.moe/qpxiqb.jpg",
            ],
            watermark: watermark,
        },
        {
            images: [
                "https://files.catbox.moe/yqbm5e.jpg",
                "https://files.catbox.moe/9hce0e.jpg",
            ],
            watermark: watermark,
        },
        {
            images: [
                "https://files.catbox.moe/o9pjyd.jpg",
                "https://files.catbox.moe/7n32ac.jpg",
            ],
            watermark: watermark,
        },

        {
            images: [
                "https://files.catbox.moe/386bls.jpg",
                "https://files.catbox.moe/aaq4yh.jpg",
            ],
            watermark: watermark,
        },
        {
            images: [
                "https://files.catbox.moe/ajm4mg.jpg",
                "https://files.catbox.moe/4q6c2f.jpg",
            ],
            watermark: watermark,
        },
        {
            images: [
                "https://files.catbox.moe/zjg04k.jpg",
                "https://files.catbox.moe/o36tiw.jpg",
            ],
            watermark: watermark,
        },

        {
            images: [
                "https://files.catbox.moe/6wvnqy.jpg",
                "https://files.catbox.moe/72zbfj.jpg",
            ],
            watermark: watermark,
        },
        {
            images: [
                "https://files.catbox.moe/826rt1.jpg",
                "https://files.catbox.moe/wd8akc.jpg",
            ],
            watermark: watermark,
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Proofs
                </h2>
            }
        >
            <Head title="Proofs" />

            <div className="py-12">
                <div className="mb-4">
                    <p>
                        these are the people who bought the VIP group use a VPN
                        if not loaded:
                    </p>
                </div>
                {/* {country !== 'BR' && (
                    <div className="mb-4 p-4 border-l-4 border-yellow-500 bg-yellow-100 text-yellow-800">
                        <p className="font-bold">Do you need 100% proof that this is not a scam?</p>
                        <p>
                            If these screenshots are not enough, I have a way to make you sure this is not a scam. 
                            <Link as='button' href="/guide/guarantee" className="text-blue-600 hover:underline"> Click here for more info</Link>.
                        </p>
                    </div>
                )} */}
                {["US", "UK", "CA", "AU", "DE", "FR", "ES"].includes(
                    country
                ) && (
                    <div className="mb-4 p-4 border-l-4 border-yellow-500 bg-yellow-100 text-yellow-800">
                        <p className="font-bold">
                            Do you need 100% proof that this is not a scam?
                        </p>
                        <p>
                            If these screenshots are not enough, I have a way to
                            make you sure this is not a scam.
                            <Link
                                as="button"
                                href="/guide/guarantee"
                                className="text-blue-600 hover:underline"
                            >
                                {" "}
                                Click here for more info
                            </Link>
                            .
                        </p>
                    </div>
                )}

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Proof Screenshots
                        </h3>
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
