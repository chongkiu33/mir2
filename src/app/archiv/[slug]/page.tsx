import { client } from "../../../sanity/lib/client";
import { sanityFetch } from "../../../sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { components } from "@/sanity/portableTextComponents";
// import { ARTICLE_QUERY } from "../../../sanity/lib/queries";
import { PageBuilder } from "../../components/PageBuilder";

// 定义 GROQ 查询，获取特定 slug 的文章
const ARTICLE_QUERY = defineQuery(`*[
    _type == "archiv" &&
    slug.current == $slug
  ][0]{
    ...,
    "date": coalesce(publishedAt, _createdAt),
    categories[]->
}`);

export const dynamic = 'force-dynamic'
export const revalidate = 0;






export default async function ArchivPage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    // 获取文章数据
    const { data: article } = await sanityFetch({
      query: ARTICLE_QUERY,
      params: await params,
    });
    
    // 如果文章不存在，返回 404
    if (!article) {
      notFound();
    }
    
    // 解构文章数据
    const {
      title,
      slug,
      author,
      coverImage,
      publishDate,
      content2,
   
      
    } = article;
    
    // 处理图片 URL
   
    
  
    return( 
      <main>
      {article?.content2? <PageBuilder content={article.content2} /> : null}; 
      
      <div className="mx-auto grid grid-cols-10">
      <div className="flex col-start-2 col-end-10  w-full h-[20vh] pt-[2vh] pb-[10vh] font-oppo-sans-medium text-gray-500 justify-between">
        <div>MIR.DOG</div>
        <div>MIRART@</div>
      </div>
      </div>
      </main>
     
     
    )
}