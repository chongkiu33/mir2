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
import { Button } from '@/components/ui/button';
import AddToBasketButton from '@/app/components/shopui/AddToBasketButton';
import  CartButton  from '../../components/ShopNavbar/CartButton';
import {getProductBySlug} from '../../../sanity/lib/products/getProductBySlug';

export default async function ShopPage({
    params,
  }: {
    params: Promise<{ 
        slug: string 
    }>;
  }) {
    const {slug} = await params;
    const product = await getProductBySlug(slug);
    const isOutOfStock = product?.stock === 0;

    return (
        <div className="w-screen px-[10vw] pt-[17vw] flex  flex-col gap-[2vh]">
            <CartButton />

            <div className='w-full flex flex-col lg:flex-row gap-[2vh]'>
            {product?.productimage ? (
                <div className="w-full lg:w-2/3 relative">
                    <Image 
                        src={urlFor(product.productimage[0]).width(1000).url()}
                        alt={product.name || 'Product image'} 
                        width={1000}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        className="rounded-[20px] brightness-[95%] hover:brightness-[98%] transition-all duration-300 ease-in-out"
                    />           
                </div>
            ) : null}
            
            {/* 小屏幕显示水平轮播 */}
            <div className="lg:hidden w-full">
                <ProductCarousel images={product?.productimage || []} direction="horizontal"/>
            </div>
            
            {/* 大屏幕显示垂直轮播 */}
            <div className="hidden lg:block lg:w-1/3">
                <ProductCarousel images={product?.productimage || []} direction="vertical"/>
            </div>

        </div>
            
            <div className="py-[3vh] flex flex-col gap-[2vh]">
                <div className="font-['oppo_Sans_Heavy'] text-2xl font-bold">
                    {product?.name || 'Product Name'}
                </div>
                <div>
                    <h2 className="font-['oppo_Sans_Heavy'] text-xl font-bold">Product Introduction</h2>
                    <p className="font-['oppo_Sans_Medium']  text-gray-500">{product?.description || 'No description available'}</p>
                </div>
                
                <div className="flex justify-between">
                    <h2 className="font-['oppo_Sans_Heavy'] text-xl font-bold">Material</h2>
                    <p className="font-['oppo_Sans_Medium'] text-gray-500">{product?.category?.map((cate:any) => cate.name).join(', ') || 'No material information'}</p>
                </div>
                <div className="flex justify-between">
                    <h2 className="font-['oppo_Sans_Heavy'] text-xl font-bold">Price</h2>
                    <p className="font-['oppo_Sans_Medium']">
                    {product?.price ? `€${product?.price.toFixed(2)}` : 'Price not available'}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex w-full justify-center pb-[20vh]">
                {product && (
                    <AddToBasketButton 
                        product={product} 
                        disabled={isOutOfStock}
                    />
                )}
           
            </div>



            
            
        </div>
    )
  }


// const PRODUCT_QUERY = defineQuery(`*[
//     _type == "product" &&
//     slug.current == $slug
//   ][0]{
//     _id,
//     name,
//     slug,
//     productimage,
//     description,
//     categories[]->,
//     price_id,
//     price,
//     stock
// }`);





// export default async function ShopPage({
//     params,
//   }: {
//     params: Promise<{ 
//         slug: string 
//     }>;
//   }) {
//     // 获取产品数据
//     const { data: product } = await sanityFetch({
//       query: PRODUCT_QUERY,
//       params: await params,
//     });
    
//     // 如果产品不存在，返回 404
//     if (!product) {
//       notFound();
//     }
    
//     // 解构产品数据
//     // const {
//     //   name,
//     //   slug,
//     //   productimage,
//     //   description,
//     //   categories,
//     //   price_id,
//     //   price,
//     //   stock
//     // } = product;

//     const isOutOfStock = product.stock === 0;


   
    
//     return (
//         <div className={styles.container}>
//             {product?.productimage ? (
              
//                 <div className={styles.imgcontainer}>
//                     <Image 
//                         src={urlFor(product.productimage[0]).width(1000).url()}
//                         alt={product.name || 'Product image'} 
//                         fill 
//                         className={styles.image}
//                     />           
//                 </div>
//             ) : null}

//         <ProductCarousel images={product.productimage}/>
            
//             <div className={styles.content}>
//                 <div className={styles.title}>
//                     {product.name || 'Product Name'}
//                 </div>
//                 <div>
//                     <h2 className={styles.secondtitle}>Product Introduction</h2>
//                     <p className={styles.infotext}>{product.description || 'No description available'}</p>
//                 </div>
                
//                 <div className={styles.infobox}>
//                     <h2 className={styles.secondtitle}>Material</h2>
//                     <p className={styles.infotext}>{ 'No material information'}</p>
//                 </div>
//                 <div className={styles.infobox}>
//                     <h2 className={styles.secondtitle}>Price</h2>
//                     <p className={styles.infotext}>
//                     {product.price ? `€${product.price.toFixed(2)}` : 'Price not available'}
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-6 flex w-full justify-end pb-[20vh]">
//                 <AddToBasketButton product={product} disabled={isOutOfStock } />
//                 {/* <Button>Add to Bag</Button> */}
//             </div>



//             {/* <AddToBag 
//                 name={name || 'Unnamed Product'} 
//                 description={description || 'No description available'} 
//                 price={price || 0} 
//                 price_id={price_id || ''} 
//                 currency="EUR" 
//                 productimage={product.productimage?.[0] ? urlFor(product.productimage[0]).width(1000).url() : ''} 
//                 key={product._id} 
//             /> */}
            
//         </div>
//     )
// }