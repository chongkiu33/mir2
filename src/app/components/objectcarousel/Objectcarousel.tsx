'use client';

import Image from "next/image";
import { client }from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import React, { useRef , useState ,Suspense} from'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination ,Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../blocks/carousel.css'
import { urlFor } from "@/sanity/lib/image";




export default function Objectcarousel({objects}:{objects:any}){
   
    const interval = 1500;
    const autoplay = true;

    return(
        <section  >
            <Swiper className="mx-auto  gap-3 pb-5 w-[80%] aspect-[16/4]"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={8}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={autoplay ? {delay: interval, disableOnInteraction: false} : false}
                loop={true}
            >
                {objects?.map((object:any, index:number) => (
                    <SwiperSlide  key={object._id} >
                        <Image
                            src={urlFor(object.objectimage).width(400).url()}
                            alt="objectimage"
                            className="w-full relative  object-contain"
                            fill
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}