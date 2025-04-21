'use client';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination ,Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css'


type CarouselProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "carousel" }
>;

export function Carousel({ images, autoplay = true}: CarouselProps) {
   
      const interval = 2000;
      
     

  return (
    <section  >
       
     <Swiper className="mx-auto  gap-3 pb-5 w-[80%] aspect-[16/8]"
                
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={autoplay ? {delay: interval, disableOnInteraction: false} : false}
      loop={true}
    >
                
                {images?.map((image) => (
                    <SwiperSlide  key={image._key}  >
                        
                      
                        <Image
                            src={urlFor(image).width(800).url()}
                            alt={image.alt || '轮播图片'}
                       
                            className="w-full relative  object-cover"
                            fill
                        />
                        
            
                    
                    </SwiperSlide>
                ))}
            </Swiper>
    </section>
  );
}