"use client"

import { Button } from "@/components/ui/button";
import useBasketStore from "@/store/store";
import { PRODUCT_BY_SLUG_QUERYResult} from "@/sanity/types";
import { useState,useEffect } from "react";


interface AddToBasketButtonProps {
    product:PRODUCT_BY_SLUG_QUERYResult;
    disabled:boolean;
}

export default function AddToBasketButton({product,disabled}:AddToBasketButtonProps){

  const {addItem,removeItem,getItemCount} = useBasketStore();
  const itemCount = product ? getItemCount(product._id) : 0;

  const [isClient, setIsClient ] = useState(false);

  useEffect(() => {
    setIsClient(true);
  },[]);

  if(!isClient || !product){
    return null;
  }

  // 检查是否达到库存限制
  const isAtStockLimit = product.stock !== undefined && itemCount >= product.stock;

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center space-x-2">
                <button
                onClick={() => removeItem(product._id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
                    ${itemCount === 0
                        ? 'bg-gray-100 cursor-not-allowed'
                        : 'bg-gray-200 text-white hover:bg-gray-300'
                    }
                `}
                disabled={itemCount === 0 || disabled}
                >
                    <span
                    className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`}
                    >
                        -
                    </span>
                </button>
                <span className={`w-8 text-center font-semibold`}>{itemCount}</span>
                <button
                onClick={() => addItem(product)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200
                    ${isAtStockLimit
                        ? 'bg-gray-100 cursor-not-allowed'
                        : itemCount === 0
                            ? 'bg-gray-200'
                            : 'bg-gray-300 text-white hover:bg-gray-300'
                    }
                `}
                disabled={disabled || isAtStockLimit}
                >
                    <span className={`text-xl font-bold ${isAtStockLimit ? "text-gray-400" : ""}`}>+</span>
                </button>
            </div>
            {/* {isAtStockLimit && (
                <span className="text-s text-red-500 block">
                    Stock limit reached
                </span>
            )} */}
        </div>
    )   

}