import { client } from "../../../sanity/lib/client";
import { sanityFetch } from "../../../sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { components } from "@/sanity/portableTextComponents";

const OBJECT_QUERY = defineQuery(`*[
  _type == "objectpage" &&
  slug.current == $slug
][0]{
  ...,
  "date": coalesce(publishedAt, _createdAt),
  categories[]->
}`);


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
      
   
  
    return (
      <main className="container mx-auto p-6 md:p-12 mt-[15vw]">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          
          {objectImageUrl && (
            <div className="relative w-full aspect-[16/9] mb-8">
              <Image
                src={objectImageUrl}
                alt={title || "对象图片"}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
                priority
              />
            </div>
          )}
          
          {content && (
            <div className="article-content">
              <PortableText value={content} components={components} />
            </div>
          )}

          <div className="mb-6">
            <Link href="/object" >
              ← 返回对象列表
            </Link>
          </div>
        </article>
      </main>
    );
}