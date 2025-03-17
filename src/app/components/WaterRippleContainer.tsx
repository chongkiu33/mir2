// src/app/components/WaterRippleContainer.tsx
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import WaterRipple from './WaterRipple';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}

// 定义查询，获取basic类型的homeimage字段
const BASIC_IMAGE_QUERY = defineQuery(`*[_type == "basic"][0]{
  homeimage
}`);

// 这是一个服务器组件
const WaterRippleContainer = async () => {
  let backgroundImageUrl = '/bg2.jpg'; // 默认图片
  
  try {
    const { data: basicInfo } = await sanityFetch({ query: BASIC_IMAGE_QUERY });
    if (basicInfo?.homeimage) {
      backgroundImageUrl = urlFor(basicInfo.homeimage).url();
    }
  } catch (error) {
    console.error('Error fetching background image:', error);
  }
  
  // 将获取到的图片URL传递给客户端组件
  return <WaterRipple backgroundImageUrl={backgroundImageUrl} />;
};

export default WaterRippleContainer;