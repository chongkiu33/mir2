'use client'

import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart{
    name:string;
    description:string;
    price:number;
    currency:string;
    productimage:any;
}

export default function AddToBag({name,description,price,currency,productimage}:ProductCart){
    const { addItem, handleCartClick} = useShoppingCart();

    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:productimage,
        id:name
    }

    return(
        <div className='w-full flex justify-end mb-[20vh]'>
                <button
                 className='bg-[#D9D9D9]  px-4 py-2 rounded-md' 
                 onClick={()=>{
                    addItem(product), handleCartClick();
                 }}
                 >
                    Add To Cart
                 </button>
        </div>
    )
}