import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const searchProductsByCategories = async (categories: string) => {

    const PRODUCTS_CATEGORIES_QUERY = defineQuery(`
    *[_type == "product" && count((category[]->slug.current)[@ in $categories]) == count($categories)] | order(name asc) {
      _id,
      name,
      slug,
      stock,
      price,
      productimage[] {
        asset-> {
          url
        }
      }
    }
    `);

    try{
        const categoryArray = categories.split(',').map(cat => cat.trim());
        
        const products = await sanityFetch({
            query: PRODUCTS_CATEGORIES_QUERY,
            params: { 
                categories: categoryArray
            },
        });
    
        return products.data || [];

    } catch (error) {
        console.error('Error fetching products by categories:', error);
        return [];
    }
    
   
}