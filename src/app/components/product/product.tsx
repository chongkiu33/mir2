"use client"
import Image from "next/image";
import styles from "./product.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ALL_PRODUCTS_QUERYResult } from "@/sanity/types";

type ProductProps = {
  product: ALL_PRODUCTS_QUERYResult[0]
}

const Product = ({ product }: ProductProps) => {
  const isOutOfStock = product.stock === 0;
  const imageUrl = product.productimage?.[0]?.asset?.url;

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[21vw] h-[21vw] relative"
      >
        <Link href={`/shop/${product.slug?.current}`} className="flex items-center justify-center rounded-lg">
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt={product.name || ""} 
              fill 
              className="object-cover transition-all duration-500 ease-in-out brightness-[85%] rounded-lg hover:scale-110 hover:brightness-[98%]" 
            />
          )}
          {isOutOfStock && (
            <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-center">
              <p className="text-sm">Out of Stock</p>
            </div>
          )}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default Product;