import WaterRipple from './components/WaterRipple';
import { defineQuery, PortableText } from "next-sanity";
import { sanityFetch } from "../sanity/lib/live";
import { client } from '../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source)
}

// 定义查询，获取basic类型的第一条数据
const BASIC_INFO_QUERY = defineQuery(`*[_type == "basic"][0]{
  homeimage
}`);

export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function Home() {
  const { data: basicInfo } = await sanityFetch({ query: BASIC_INFO_QUERY });


  return (
    <main style={{overflow: 'hidden'}}>
      <WaterRipple backgroundImageUrl={urlFor(basicInfo?.homeimage)?.width(100).url()} />
    </main>
  );
}
