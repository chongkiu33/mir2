import React from 'react';
import Image from 'next/image';
import styles from './info.module.css';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import { defineQuery, PortableText } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { components } from "@/sanity/portableTextComponents";


const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source)
}

// 定义查询，获取basic类型的第一条数据
const BASIC_INFO_PAGE_QUERY = defineQuery(`*[_type == "basic"][0]{
  info1,
  info2,
  info3,
  email,
  instagram
}`);

export const dynamic = 'force-dynamic'
export const revalidate = 0;


const InfoPage = async() => {
    const { data: basicInfo } = await sanityFetch({ query: BASIC_INFO_PAGE_QUERY });

    if (!basicInfo) {
        return <div>Loading...</div>; // 或者显示一个错误信息
    }

  return (
      <div className={styles.bigContainer}>
          <div className={styles.container}>
              <div className={styles.imgContact}>
                  <div className={styles.logoContainer}>
                      <Image
                          className={styles.logo}
                          src="/logo.png"
                          alt="logo"
                          width={500}
                          height={500}
                      />
                  </div>
                  <div className={styles.contactContainer}>
                          <Link href={` ${basicInfo.email}`}>——&gt;Email</Link>
                          <Link href={`${basicInfo.instagram}`} target="_blank" rel="noopener noreferrer">——&gt;Instagram</Link>
                  </div>
              </div>

              <div className={styles.textContainer}>
                  <div className={styles.title}>
                      Introduction of MIR DESIGN from a design company
                  </div>
                  <div className={styles.contentContainer}>
                      <div>
                      {basicInfo.info1 && (
                          <div className="prose prose-lg">
                              <PortableText value={basicInfo.info1} components={components} />
                          </div>)}
                      </div>
                      <div>
                      {basicInfo.info2 && (
                      <div className="prose prose-lg">
                              <PortableText value={basicInfo.info2} components={components} />
                          </div>)}
                      </div>
                      <div>
                      {basicInfo.info3 && (
                      <div className="prose prose-lg">
                              <PortableText value={basicInfo.info3} components={components} />
                          </div>)}
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default InfoPage; 