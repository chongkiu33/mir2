import { client } from "../../../sanity/lib/client";
import { sanityFetch } from "../../../sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { components } from "@/sanity/portableTextComponents";


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

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;



// export default function ArchivPage() {


    
//     return (
//         <div>
//             <h1>Archiv</h1>
//         </div>
//     )
// }



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
      content,
   
      
    } = article;
    
    // 处理图片 URL
    const articleImageUrl = coverImage
      ? urlFor(coverImage)?.width(800).url()
      : null;
      
    // 格式化日期
    const pdate = new Date(publishDate).toLocaleDateString('de-DE');
  
    return (
      <main className="container mx-auto p-6 md:p-12">
        
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          
          
          {articleImageUrl && (
            <div className="mb-8">
              <Image
                src={articleImageUrl}
                alt={title || "文章图片"}
                className="rounded-lg w-full"
                width={800}
                height={500}
              />
            </div>
          )}
          
          {content && (
            <div className="article-content">
              <PortableText value={content} components={components} />
            </div>
          )}

        <div className="mb-6">
          <Link href="/archiv" >
            ← Back to Archiv
          </Link>
        </div>
        </article>
      </main>
    );
}