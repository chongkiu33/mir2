// 'use client'
import Product from '@/app/components/product/product';
import styles from './shop.module.css';
import Footer from '@/app/components/footer/footer';
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import ShopNavbar from '../components/ShopNavbar/ShopNavbar';
const builder = imageUrlBuilder(client);
import { useShoppingCart } from 'use-shopping-cart';

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
  price_id,
  price
}`);

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Shopping() {
   
    const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });
   

    return (
     
        
        
      <div className="mt-[17vh] font-oppomedium">  
        <ShopNavbar/>
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
        </div>
        
        
     
    );
  }
  
