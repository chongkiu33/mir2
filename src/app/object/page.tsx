import React from 'react'
import styles from './Object.module.css';
import ImgGallery from '../components/imgGallery/imgGallery';
import { defineQuery } from "next-sanity";
import { sanityFetch } from  "../../sanity/lib/live";
import { client }from '../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const OBJECTS_QUERY = defineQuery(`*[
    _type == "objectpage" 
    && defined(slug.current)
    && isOneOfTwenty == true
    ] {
    _id,
    title,
    slug,
    artist,
    "position": [objectposition.x, objectposition.y, objectposition.z],
    objectimage,
  } | order(publishDate desc)`);

export const dynamic = 'force-dynamic'
export const revalidate = 0;

// 创建urlFor函数
const builder = imageUrlBuilder(client)
const urlFor = (source:any) => {
  return builder.image(source)
}

export default async function Object() {
  const { data: objects } = await sanityFetch({ query: OBJECTS_QUERY });
  
  // 直接传递原始对象数据，不预处理图片URL
  return (
    <div className={styles.container}>
      <ImgGallery objects={objects} />
    </div>
  );
}

