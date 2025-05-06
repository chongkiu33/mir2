"use client"
import useBasketStore from '@/store/store';
import { useAuth, useUser} from "@clerk/nextjs"
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import AddToBasketButton from '../../components/shopui/AddToBasketButton';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { SignInButton } from '@clerk/nextjs';
import { createCheckoutSession, Metadata } from '@/actions/createCheckoutSession';



export default function BasketPage(){

    const groupedItems = useBasketStore((state) => state.getGroupedItems());
    const {isSignedIn} =useAuth();
    const {user} = useUser();
    const router = useRouter();

    const [isClient,setIsClient] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        setIsClient(true);
    },[]);

    // 待写
    // if(!isClient){
    //     return(
    //         <Loader />; 
    //     )
    // }

    if(groupedItems.length === 0){
        return(
            <div className="container mx-auto p-4 flex flex-col items-center justify-center
            min-h-[50vh]">
                <h1 className="text-2xl font-bold text-gray-800">Your basket</h1>
                <p className="text-gray-600 text-lg">is empty</p>

            </div>
        )
    }

    const handleCheckout = async () => {
        if(!isSignedIn) return;

        setIsLoading(true);

        try{
            const metaldata: Metadata ={
                orderNumber: crypto.randomUUID(),
                customerName:user?.fullName ??"Unknown",
                customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
                clerkUserId: user!.id,
            };

            const checkoutUrl = await createCheckoutSession(groupedItems,metaldata);

            if(checkoutUrl && typeof checkoutUrl === 'string'){
                window.location.href = checkoutUrl;
            } else {
                console.error("Invalid checkout URL received");
            }

        } catch(error){
            console.error("Checkout error:",error);
        } finally{
            setIsLoading(false);
        }

      
    }

    console.log("BASKET ITEMS",groupedItems);

    
    return(
        <div className="container mx-auto mt-[17vw] px-10">
            <h1 className="text-2xl font-bold mb-4">Your basket</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-grow">
                    {groupedItems.map((item)=>(
                        <div 
                        key={item.product?._id} 
                        className="mb-4 p-4 border rounded flex items-center justify-between">

                        <div
                        className="flex items-center cursor-pointer flex-1 min-w-0"
                        onClick={() => router.push(`/shop/${item.product?.slug?.current}`)}  //这个有问题有错误
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 mr-4">
                                {item.product?.productimage &&(
                                    <Image
                                        src={urlFor(item.product?.productimage[0]).width(1000).url()}
                                        alt={item.product.name || 'Product Image'}
                                        width={96}
                                        height={96}
                                    
                                    />
                                    
                                )}
                            </div>

                            <div className="min-w-0">
                                <h2 className='text-lg sm:text-xl font-semibold truncate'>
                                    {item.product?.name}
                                </h2>

                                <p className="text-sm sm:text-base">
                                    price: €{((item.product?.price ?? 0)*item.quantity).toFixed(2)}
                                </p>
                                </div>
                        </div >
                           

                            <div className="flex items-center ml-4 flex-shrink-0">
                                <AddToBasketButton product={item.product} disabled={item.product?.stock === 0}/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-88 lg:sticky lg:top-4 h-fit
                 bg-white p-6 border rounded order-first lg:order-last fixed bottom-0 left-0 lg:left-auto lg:right-0 lg:max-w-md lg:mx-auto lg:w-full">
                    <h3 className="text-xl font-semibold">Order Summary</h3>
                    <div className="mt-4 space-y-2">
                        <p className="flex justify-between">
                            <span>items:</span>
                            <span>{groupedItems.reduce((total,item) => total + item.quantity,0)}</span>
                        </p>

                        <p className="flex justify-between text-2xl font-bold border-t pt-2">
                            <span>Total:</span>
                            <span>€{useBasketStore.getState().getTotalPrice().toFixed(2)}</span>
                        </p>
                    </div>


                    {isSignedIn?(
                        <button
                        onClick={handleCheckout}
                        disabled={isLoading}
                        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            {isLoading ? "Processing..." : "Checkout"}
                        </button>
                    ):(
                        <SignInButton mode="modal" >
                        <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded
                         hover:bg-blue-600">
                            Sign in to checkout
                         </button>
                         </SignInButton>
                   
                    )}
                </div>


            </div>
        </div>
    )
}