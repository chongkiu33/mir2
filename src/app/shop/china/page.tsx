import Product from '@/app/components/product/product';
import styles from './chinashop.module.css';
import Footer from '@/app/components/footer/footer';
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../../sanity/lib/live";
import { client } from '../../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source)
}

const PRODUCTS_QUERY = defineQuery(`*[
  _type == "product" 
  && defined(slug.current)
  ] {
  _id,
  "imageUrl": productimage[0].asset->url,
  slug,
}`);

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Shopping() {
   
    const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });

    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
            <div className={styles.material}>
                <div className={styles.textTitle}>Material</div>
                <div className={styles.textContent}>CategoryA</div>
                <div className={styles.textContent}>CategoryB</div>
                <div className={styles.textContent}>CategoryC</div>
            </div>
            <div className={styles.type}>
                <div className={styles.textTitle}>Type</div>
                <div className={styles.textContent}>CategoryA</div>
                <div className={styles.textContent}>CategoryB</div>
                <div className={styles.textContent}>CategoryC</div>
            </div>

            <div className={styles.artist}>
                <div className={styles.textTitle}>Artist</div>
                <div className={styles.textContent}>CategoryA</div>
                <div className={styles.textContent}>CategoryB</div>
                <div className={styles.textContent}>CategoryC</div>
            </div>
        </div>

        <div className={styles.productContainer}>
            
            {products.map((product:any) => (
                <div className={styles.product} key={product._id}>
                <Product 
                key={product._id}        
                image={product.imageUrl}
                slug={product.slug.current}/>
                </div>
            ))}
            
        </div>
        <div className={styles.footer}>
            
        
        </div>
      </div>
    );
  }