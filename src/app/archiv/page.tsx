import React from 'react';
import Link from "next/link";
import Activity from '../components/activity/Activity';
import styles from './Archiv.module.css';
import Footer from '../components/footer/footer';
import { defineQuery } from "next-sanity";
import { sanityFetch } from  "../../sanity/lib/live";
import { client }from '../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source)
}

const ITEMS_PER_PAGE = 6; // 每页显示6个项目

const ACTIVITIES_QUERY = defineQuery(`*[
  _type == "archiv" 
  && defined(slug.current)
  ] {
  _id,
  title,
  slug,
  publishDate,
  "tags": tag[]->TagName,
  description,
  author,
  coverImage {
    asset->,
    _type,
    _key,
  },
} | order(publishDate desc)`);

export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function Archiv({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { data: archivs } = await sanityFetch({ query: ACTIVITIES_QUERY });
  
  // 获取页码参数，默认为第1页
  const currentPage = Number(searchParams.page) || 1;

  // 计算分页
  const totalPages = Math.ceil(archivs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = archivs.slice(startIndex, endIndex);

  return (
    <div className={styles.archiv}>
      {currentItems.map((archiv:any) => (
        <Activity
          key={archiv._id}
          content={archiv.title}
          date={new Date(archiv.publishDate).toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          }).replace(/\//g, '-')}
          description={archiv.description}
          artistName={archiv.author}
          tag={archiv.tags || []}  
          imageUrl={archiv.coverImage?.asset ? urlFor(archiv.coverImage).width(900).url() : ''}
          link={`/archiv/${archiv.slug.current}`}
        />
      ))}

      {/* 分页控件 */}
      <div className="flex gap-10 justify-center text-gray-500 items-center space-x-2 mt-8">
        {currentPage > 1 && (
          <Link href={`/archiv?page=${currentPage - 1}`} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Prev
          </Link>
        )}
        
        <span className="mx-4">
           {currentPage}  /  {totalPages} 
        </span>

        {currentPage < totalPages && (
          <Link href={`/archiv?page=${currentPage + 1}`} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
            Next
          </Link>
        )}
      </div>
         
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

