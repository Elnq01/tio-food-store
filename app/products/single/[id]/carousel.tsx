import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ImgSrc from "../../../../public/king-500x500.jpg";
import Image from 'next/image';

const productImgs = [
    {
        id:0
    },
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    }
]

export default function SingleCarousel() {
const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); 

  return (
    <div style={{width:'60%'}}>
      <Swiper
        style={{
            marginBottom:'10px'
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {productImgs.map(product => <SwiperSlide key={product.id}>
          <Image src={ImgSrc} alt="img" />
        </SwiperSlide>)}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productImgs.map(product => <SwiperSlide key={product.id}>
          <Image src={ImgSrc} alt="img" />
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
