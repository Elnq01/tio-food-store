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
import { ProductImage } from '@/app/component/ProductCard/ProductCard';

// const productImgs = [
//     {
//         id:0
//     },
//     {
//         id:1
//     },
//     {
//         id:2
//     },
//     {
//         id:3
//     }
// ]


type ProductImgs = {
  productImgs:ProductImage[]    // optional alt text
};


export default function SingleCarousel({productImgs}:ProductImgs) {
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
        {productImgs.map((product, i) => <SwiperSlide key={i}>
        {/* <Card.Img src={productImages?.[0]?.secure_url} /> */}
          <Image width={500} height={500} src={product.secure_url} style={{width:"100%", height:'auto'}} alt="img" />
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
        {productImgs.map((product, i) => <SwiperSlide key={i}>          
          <Image width={500} height={500} src={product.secure_url} style={{width:"100%", height:'auto'}} alt="img" />

        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
