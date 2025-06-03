"use client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { PortableText } from "next-sanity";

import { components } from "@/sanity/portableTextComponents";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination ,Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css'


type CarouselwithTextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "carouselWText" }
>;

export function CarouselwithText({layout,images,text}: CarouselwithTextProps) {
    const interval = 2000;
   
  return (
    <section 
    
    className={`mx-auto flex items-center w-[80%] gap-5 md:gap-12 lg:gap-20 pb-5 flex-col ${layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        <Swiper className=" gap-3 w-full aspect-[4/3] flex-auto md:flex-[4_1_0%] "
                
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={9}
              slidesPerView={1} 
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
           
              autoplay={true ? {delay: interval, disableOnInteraction: false} : false}
              loop={true}
            >
                        
                        {images?.map((image) => (
                            <SwiperSlide  key={image._key}  >
                                
                              
                                <Image
                                    src={urlFor(image).width(1000).url()}
                                    alt={image.alt || '轮播图片'}
                               
                                    className="w-full relative  object-cover rounded-sm"
                                    fill
                                />
                                
                    
                            
                            </SwiperSlide>
                        ))}
        </Swiper>
        
        


        <div
          className="flex-1 md:flex-[3_1_0%]"

        >
          <div className=" text-base lg:text-lg ">
            {text ? <PortableText  value={text} components={components}  /> : null}
          </div>
          </div>

         
    </section>
  );
}