"use client"
import useBasketStore from '@/store/store';
import { useAuth, useUser} from "@clerk/nextjs"
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import AddToBasketButton from '../../components/shopui/AddToBasketButton';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { SignInButton } from '@clerk/nextjs';
import { createCheckoutSession, Metadata } from '../../../actions/createCheckoutSession';
import Link from 'next/link';


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
    if(!isClient){
        return(
            <div className='flex justify-center  items-center h-screen'>
                <div className="custom-spin">
                <Image 
                    src="/logo9.svg"
                    alt="Home" 
                    width={50} 
                    height={50} 
                />
            </div>
            </div>
        )
    }

    if(groupedItems.length === 0){
        return(
            <div className="container mx-auto p-4 flex flex-col items-center justify-center
            min-h-[50vh]">
                <h1 className="text-2xl font-bold pt-[17vw] text-gray-800">Your basket</h1>
                <p className="text-gray-600 text-lg">is empty</p>
                <Link href="/shop" className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600"> Go to shop</Link>

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
           
            if(checkoutUrl) {
                window.location.href = checkoutUrl;
            } else {
                console.error("创建结账会话失败");
            }

        } catch(error){
            console.error("Checkout error:",error);
        } finally{
            setIsLoading(false);
        }

      
    }

    console.log("BASKET ITEMS",groupedItems);

    
    return(

        <div className="bg-[url('/shopbg/AIChatbotConcept02.png')] h-screen bg-contain bg-center bg-no-repeat pt-[17vw] ">
        <div  className="container mx-auto px-4   ">
            
            <div className="flex flex-col lg:flex-row gap-8 ">
                <div className="flex-grow  px-10  py-5 backdrop-blur-lg shadow-[0_1px_6px_rgba(0,0,0,0.2),inset_0px_0px_3px_2px_rgba(0,0,0,0.10)]  rounded-3xl bg-[rgba(122,122,122,0.1)]  ">
                <h2 className="text-2xl font-bold mb-4">Your basket</h2>
                    {groupedItems.map((item, index)=>(
                        <div 
                        key={item.product?._id} 
                        className={`mb-4 py-4 flex items-center ${index > 0 ? 'border-t' : ''} justify-between`}>

                        <div
                        className="flex  items-center cursor-pointer flex-1 min-w-0"
                        onClick={() => router.push(`/shop/${item.product?.slug?.current}`)}  //这个有问题有错误
                        >
                            <div className="w-20 h-20 sm:w-24  sm:h-24 flex-shrink-0 mr-4">
                                {item.product?.productimage &&(
                                    <Image
                                        src={urlFor(item.product?.productimage[0]).width(1000).url()}
                                        alt={item.product.name || 'Product Image'}
                                        width={96}
                                        height={96}
                                        className="rounded-lg shadow-[0_1px_6px_rgba(0,0,0,0.2)]"
                                    
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
                                {item.product && (
                                    <AddToBasketButton 
                                        product={item.product} 
                                        disabled={item.product.stock === 0}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-[90vw] fixed bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:w-88 lg:sticky lg:top-4 h-fit
                 p-6 order-first lg:order-last lg:left-auto lg:right-0 lg:max-w-md lg:mx-auto lg:w-full backdrop-blur-lg shadow-[inset_0px_0px_6px_3px_rgba(0,0,0,0.10)] rounded-3xl  bg-[rgba(122,122,122,0.1)]">
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
                        className="mt-4 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            {isLoading ? "Processing..." : "Checkout"}
                        </button>
                    ):(
                        <SignInButton mode="modal" >
                        <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-lg
                         hover:bg-blue-600">
                            Sign in to checkout
                         </button>
                         </SignInButton>
                    )}
                </div>
            </div>
        </div>

        </div>
    );
}