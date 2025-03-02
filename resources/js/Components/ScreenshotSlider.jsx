import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ScreenshotSlider({ images, watermark }) {
    return (
        <div className="relative w-full max-w-xs mx-auto select-none">

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                loop={true}
                className="w-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* Image Wrapper */}
                        <div className="relative flex items-center justify-center w-full">
                            {/* Screenshot Image (Set as background, fully visible) */}
                            <div 
                                className="w-full border border-gray-300 rounded-lg bg-no-repeat bg-center bg-contain"
                                style={{
                                    backgroundImage: `url(${src})`,
                                    height: "500px"  // Adjust to fit your images
                                }}
                                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                                onDragStart={(e) => e.preventDefault()}  // Disable dragging
                            ></div>

                            {/* Watermark Text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-white text-xl font-bold opacity-50 bg-black bg-opacity-40 px-4 py-2 rounded-md">
                                    {watermark}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
