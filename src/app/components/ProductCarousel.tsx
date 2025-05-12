'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination ,Scrollbar, A11y} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { urlFor } from "@/sanity/lib/image";

export default function ProductCarousel({
    images, 
    direction = 'horizontal'
}:{
    images: any, 
    direction?: 'horizontal' | 'vertical'
}){
    const interval = 1500;
    const autoplay = true;
    
    // 根据方向设置不同的宽高比
    const aspectRatio = direction === 'vertical' ? 'aspect-[1/2]' : 'aspect-[16/5]';
    
    return(
        <Swiper className={`mx-auto gap-3 pb-5 w-[100%] ${aspectRatio}`}           
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={'20'}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            direction={direction}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay={autoplay ? {delay: interval, disableOnInteraction: false} : false}
                            loop={true}
                            >
             
             {images.slice(1).map((image:any) => (
                 <SwiperSlide  key={image._key} >
                     <div className="relative w-full h-full rounded-lg overflow-hidden">
                         <Image
                             src={urlFor(image).width(800).url()}
                             alt={image.alt || '轮播图片'}
                             fill
                             className="object-cover"
                         />
                     </div>
                 </SwiperSlide>
             ))}
         </Swiper>
    )
};