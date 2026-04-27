"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const items = [
  { id: 0, bg: "red" },
  { id: 1, bg: "blue" }
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      style={{ marginBottom: "70px", height: "600px" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      cssMode={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        1000: { slidesPerView: 4 },
        800: { slidesPerView: 3 },
        500: { slidesPerView: 2 },
        100: { slidesPerView: 1 },
      }}
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={item.id}>
          <motion.div
            initial={false}
            animate={{
              clipPath: idx === activeIndex ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
              zIndex: idx === activeIndex ? 2 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "600px",
              background: item.bg,
              position: "absolute",
              inset: 0,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
