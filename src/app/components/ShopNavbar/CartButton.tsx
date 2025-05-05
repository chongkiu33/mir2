"use client"

import { useShoppingCart } from 'use-shopping-cart';
import { Button } from "@/components/ui/button";
import { TrolleyIcon } from "@sanity/icons" 
import { ClerkLoaded, useUser, SignInButton, UserButton} from '@clerk/nextjs';


export default function CartButton(){
    const {user} = useUser();

     const {handleCartClick} = useShoppingCart();


    return(
        <div className=' fixed flex gap-2  left-1/2 -translate-x-1/2 items-center justify-center bottom-10'>
        <button
         className='  z-50 flex gap-1  px-[100px] w-[object-fit] py-[10px] rounded-2xl bg-[rgba(217,217,217,0.5)]   font-["Oppo Sans Medium"]'
         onClick={handleCartClick}
         >
            <TrolleyIcon className='w-6 h-6' />
          <p>Shopping Cart</p>
        </button>
        {/* <Button>Click me</Button> */}
        <ClerkLoaded>
        {user ? (
            <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                    <p className='text-gray-400'>Welcome Back</p>
                    <p className='text-gray-400'>{user.fullName}!</p>
                </div>
            </div>
        ):(
            <SignInButton mode='modal'/>
        )}
        </ClerkLoaded>

        
        </div>
    )
}