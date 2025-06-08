"use client"

import { useShoppingCart } from 'use-shopping-cart';
import { Button } from "@/components/ui/button";
import { TrolleyIcon } from "@sanity/icons" 
import { ClerkLoaded, useUser, SignInButton, UserButton} from '@clerk/nextjs';
import useBasketStore from '@/store/store';
import Link from 'next/link';
import { dark } from '@clerk/themes'


export default function CartButton(){
    const {user} = useUser();

    //  const {handleCartClick} = useShoppingCart();

    const itemsCount = useBasketStore((state) => 
        state.items.reduce((total,item) => total + item.quantity,0)
    );


    return(
        <div className=' fixed flex gap-2  left-1/2 -translate-x-1/2 items-center justify-center bottom-10'>
        <Link
        href='/shop/basket'
         className='  z-50 flex gap-1  px-[20px] w-[object-fit] py-[10px] rounded-3xl bg-[rgba(217,217,217,0.5)]   font-["Oppo Sans Medium"]'
        //  onClick={handleCartClick}
         >
            <TrolleyIcon className='w-6 h-6' />
          <p className="whitespace-nowrap">Shopping Cart ({itemsCount})</p>
        </Link>
        {/* <Button>Click me</Button> */}
        <ClerkLoaded>
            <div className='flex items-center  px-[10px] py-[10px] rounded-3xl bg-[rgba(217,217,217,0.5)] '>
        {user ? (
            <div className="flex items-center space-x-2">
                <UserButton />
                {/* <div className="hidden sm:block text-s">
                
                    <p className='text-gray-400 whitespace-nowrap'>{user.fullName}</p>
                </div> */}
            </div>
        ):(
            <div className='px-[10px]'>
            <SignInButton mode='modal'/>
            </div>
        )}
        </div>
        </ClerkLoaded>

        
        </div>
    )
}