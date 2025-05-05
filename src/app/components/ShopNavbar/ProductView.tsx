import Product from '@/app/components/product/product';
import CategorySelector from './CategorySelector';
import { Category, ALL_PRODUCTS_QUERYResult } from '@/sanity/types';

export default function ProductView({ 
  products, 
  categories 
}: { 
  products: ALL_PRODUCTS_QUERYResult, 
  categories: Category[] 
}) {
  return (
    <>
      <CategorySelector categories={categories}/>
      <div className="flex flex-wrap justify-center gap-[2vw]">
      {products.length === 0 ? (
        <div className="text-center py-8 text-gray-600">
          No matching products found.
          <div className="mt-2">
            <a href="/shop" className="text-blue-300 hover:text-blue-700">
              Clear all filters
            </a>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-[2vw]">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
      </div>
    </>
  );
}