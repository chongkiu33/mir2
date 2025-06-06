
import { client } from "../../../sanity/lib/client";
import { sanityFetch } from "../../../sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { components } from "@/sanity/portableTextComponents";
import { PageBuilder } from "../../components/PageBuilder";
import Objectcarousel from "../../components/Objectcarousel";

const OBJECT_QUERY = defineQuery(`*[
  _type == "objectpage" &&
  slug.current == $slug
][0]{
  ...,
  "date": coalesce(publishedAt, _createdAt),
  categories[]->
}`);

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

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function ObjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    // 获取对象数据
    const { data: object } = await sanityFetch({
      query: OBJECT_QUERY,
      params: await params,
    });
    const { data: objects } = await sanityFetch({ query: OBJECTS_QUERY });
    
    // 如果对象不存在，返回 404
    if (!object) {
      notFound();
    }
    
    // 解构对象数据
    const {
      title,
      slug,
      artist,
      objectimage,
   
      content,
    } = object;
    
    // 处理图片 URL
    const objectImageUrl = objectimage
      ? urlFor(objectimage)?.width(800).url()
      : null;
      
   
  
    return( 
      <main>
      {object?.content ? <PageBuilder content={object.content} /> : null}
      <Objectcarousel objects={objects}/>
      
      <div className="mx-auto grid grid-cols-10 pt-10">
      <div className="flex col-start-2 col-end-10  w-full h-[20vh] pt-[2vh] pb-[10vh] font-oppo-sans-medium text-gray-500 justify-between">
        <div>MIR.DOG</div>
        <div>MIRART@</div>
      </div>
      </div>
    </main>
    )
}