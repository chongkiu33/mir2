import styles from './page.module.css'
import Image from 'next/image'
import { client } from "../../../sanity/lib/client";
import { sanityFetch } from "../../../sanity/lib/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { defineQuery, PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import ProductCarousel from '../../components/ProductCarousel';
import AddToBag from '../../components/shop/AddToBag';



const PRODUCT_QUERY = defineQuery(`*[
    _type == "product" &&
    slug.current == $slug
  ][0]{
    _id,
    name,
    slug,
    productimage,
    description,
    categories[]->,
    price_id,
    price
}`);

// 定义产品类型接口
interface Product {
    _id: string;
    name: string;
    slug: string;
    productimage: any[];
    description: string;
    categories: any[];
    price_id: string;
    price: number;
}

export const dynamic = 'force-dynamic'
export const revalidate = 0;

export default async function ShopPage({
    params,
  }: {
    params: Promise<{ 
        slug: string 
    }>;
  }) {
    // 获取产品数据
    const { data: product } = await sanityFetch({
      query: PRODUCT_QUERY,
      params: await params,
    });
    
    // 如果产品不存在，返回 404
    if (!product) {
      notFound();
    }
    
    // 解构产品数据
    const {
      name,
      slug,
      productimage,
      description,
      categories,
      price_id,
      price,
    } = product;

   
    
    return (
        <div className={styles.container}>
            {product?.productimage ? (
              
                <div className={styles.imgcontainer}>
                    <Image 
                        src={urlFor(product.productimage[0]).width(1000).url()}
                        alt={name || 'Product image'} 
                        fill 
                        className={styles.image}
                    />           
                </div>
            ) : null}

        <ProductCarousel images={product.productimage}/>
            
            <div className={styles.content}>
                <div className={styles.title}>
                    {name || 'Product Name'}
                </div>
                <div>
                    <h2 className={styles.secondtitle}>Product Introduction</h2>
                    <p className={styles.infotext}>{description || 'No description available'}</p>
                </div>
                
                <div className={styles.infobox}>
                    <h2 className={styles.secondtitle}>Material</h2>
                    <p className={styles.infotext}>{ 'No material information'}</p>
                </div>
                <div className={styles.infobox}>
                    <h2 className={styles.secondtitle}>Price</h2>
                    <p className={styles.infotext}>
                    {price ? `€${price.toFixed(2)}` : 'Price not available'}
                    </p>
                </div>
            </div>

            {/* <AddToBag 
                name={name || 'Unnamed Product'} 
                description={description || 'No description available'} 
                price={price || 0} 
                price_id={price_id || ''} 
                currency="EUR" 
                productimage={product.productimage?.[0] ? urlFor(product.productimage[0]).width(1000).url() : ''} 
                key={product._id} 
            /> */}
            
        </div>
    )
}