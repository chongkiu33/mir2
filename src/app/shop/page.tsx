// 'use client'
import Product from '@/app/components/product/product';
import styles from './shop.module.css';
import Footer from '@/app/components/footer/footer';
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/live";
import { client } from '../../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import {searchProductsByCategories} from '../../sanity/lib/products/searchProductsByCategories'
import CartButton from '../components/ShopNavbar/CartButton';

const builder = imageUrlBuilder(client);
import { getAllCategories } from "../../sanity/lib/products/getAllCategories";
import ProductView from '../components/ShopNavbar/ProductView';
import { getAllProducts } from "../../sanity/lib/products/getAllProducts";

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
  price,
  stock
}`);


export default async function Shopping({
    searchParams
}: {
    searchParams: {
        categories?: string;
    };
}) {
    const categories = await getAllCategories();
    let products;

    // 如果有categories参数，则按类别筛选；否则显示所有产品
    if (searchParams.categories) {
        products = await searchProductsByCategories(searchParams.categories);
    } else {
        products = await getAllProducts();
    }

    // if (!products.length) {
    //     return <div>No products found</div>
    // }

    return (
      <>
      <CartButton />
        <div className="mt-[17vw] font-oppomedium">  
            <ProductView products={products} categories={categories}/>
        </div>

        </>
    );
}
  
