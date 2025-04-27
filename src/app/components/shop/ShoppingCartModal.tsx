"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,

  } from "@/components/ui/sheet"
  import { useShoppingCart } from "use-shopping-cart";
  import Image from "next/image";
export default function ShoppingCartModal(){

   const {cartCount, shouldDisplayCart ,handleCartClick, cartDetails,removeItem,totalPrice} = useShoppingCart();

    return(
       
                <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
                   
                    <SheetContent  >
                        <SheetHeader>
                        <SheetTitle>Shopping Cart</SheetTitle>
                       
                        </SheetHeader>

                        <div className="h-full flex flex-col justify-between">
                            <div className="mt-8 flex-1 overflow-y-auto">
                                <ul className="-my-6 divide-y divide-gray-200">
                                    {cartCount === 0 ? (
                                        <h1 className="py-6 font-oppomedium">No items in cart</h1>
                                    ):(
                                        <>
                                        {
                                            Object.values(cartDetails??{}).map((item)=>(
                                                <li key={item.id} className="flex gap-4 py-6">
                                                    
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <Image src={item.image as string} alt={item.name} width={200} height={200} className="object-contain" /> 
                                                        </div>

                                                        <div className="flex flex-1 flex-col font-oppomedium">
                                                            <div>
                                                                <div className="flex gap-16 justify-between text-base font-medium text-gray-900">
                                                                    <div className="flex flex-col justify-between">
                                                                    <p>{item.name}</p>
                                                                    <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                                                                    <p className="text-sm text-gray-500">QTY: {item.quantity}</p>

                                                                    <div className="flex">
                                                                        <button onClick={()=>removeItem(item.id)} className="text-sm text-primary hover:text-primary/80">Remove</button>
                                                                    </div>
                                                                    </div>
                                                                    <p>€{item.price}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                  
                                                </li>
                                            ))
                                        }

                                        <div className="border-t border-gray-200  py-6  ">
                                            <div className="flex justify-between text-sm font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>€{totalPrice}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500 font-oppomedium">
                                                Shipping and taxes are calculated at checkout.
                                            </p>

                                            <div className="mt-6 w-full flex  justify-end">
                                                <button className="px-[100px] py-3 right-0 bg-gray-300 rounded-xl">Checkout</button>
                                                <p>
                                                    OR{" "}
                                                    <button onClick={()=>handleCartClick()}>
                                                        Continue Shopping
                                                    </button>
                                                </p>
                                            </div>

                                            <div>

                                            </div>
                                        </div>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                        
                    </SheetContent>
                </Sheet>

       
    )
}