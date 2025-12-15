"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  images: string[];
};

export default function ProjectGallery({ images }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Thumbnail / first image */}
      <div className="flex flex-row gap-2 justify-start items-start">
        <img
          src={images[0]}
          className="cursor-pointer w-auto h-[80px] object-cover rounded-lg border border-gray-200"
          onClick={() => setOpen(true)}
        />
        {/* <img
          src={images[1]}
          className="cursor-pointer w-auto h-[80px] object-cover rounded-lg border border-gray-200"
          onClick={() => setOpen(true)}
        /> */}
      </div>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            className="w-full max-w-3xl"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  className="mx-auto max-h-[80vh] rounded-xl border border-white"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
