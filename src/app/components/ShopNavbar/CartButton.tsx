"use client"

import { useShoppingCart } from 'use-shopping-cart';


export default function CartButton(){

     const {handleCartClick} = useShoppingCart();


    return(
        <button
         className='fixed left-1/2 z-50 -translate-x-1/2 bottom-10 px-[100px] w-[object-fit] py-[10px] rounded-2xl bg-[rgba(217,217,217,0.5)]  flex items-center justify-center font-["Oppo Sans Medium"]'
         onClick={handleCartClick}
         >
          Shopping Cart
          </button>
    )
}