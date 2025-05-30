'use client'

import {useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import useBasketStore from '@/store/store'
import {Button} from '@/components/ui/button'
import Link from 'next/link'



export default function SuccessPage(){
    const searchParams = useSearchParams();
    const orderNumber = searchParams.get('orderNumber');
    const clearBasket = useBasketStore((state) => state.clearBasket);
    const sessionId = searchParams.get('sessionId');


    useEffect(()=>{
        if (orderNumber){
            clearBasket();
        }
    },[orderNumber,clearBasket]);

    return(
        <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/shopbg/AIChatbotConcept05.png")] bg-contain bg-center bg-no-repeat'>
            <div className="p-12  max-w-2xl w-[90%]  -mx-4 backdrop-blur-lg shadow-[0_1px_6px_rgba(0,0,0,0.2),inset_0px_0px_3px_2px_rgba(0,0,0,0.10)]  rounded-3xl bg-[rgba(122,122,122,0.1)] ">
                <div className="flex justify-center mb-8">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        
                        >
                            <path strokeLinecap="round"
                             strokeLinejoin="round"
                              strokeWidth={2}
                               d="M5 13l4 4L19 7" />
                        </svg>

                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center mb-6">
                    Thank you for your order!
                </h1>

                <div className="border-t border-b border-gray-200 py-6 mb-6 w-full flex flex-col items-center justify-center">
                    <p className='text-lg text-gray-700 mb-4 text-center'>
                        Your order has been confirmed and will be shipped shortly.
                    </p>

                    <div className="space-y-2 ">
                    {orderNumber &&(
                        <p className="text-gray-600 flex items-center space-x-5">
                            <span>Order Number:</span>
                            <span className="font-mono text-sm text-gray-600">
                                {orderNumber}
                            </span>

                        </p>
                    )}
{/* 
                    {
                        {sessionId &&(
                            <p className="text-gray-600 flex justify-between">
                                <span>Transaction ID:</span>
                                <span className="font-mono text-sm">{sessionId}</span>
                            </p>
                        )}
                    } */}
                </div>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-600 text-center">
                        A confirmation email has been sent to your registered emaill address.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Button asChild className="bg-black hover:bg-gray-600">
                            <Link href="/shop/orders">
                                View Order Details
                            </Link>
                        </Button>

                        <Button asChild variant="outline">
                            <Link href="/shop">
                                Continue Shopping
                            </Link>
                        </Button>
                    </div>

                </div>
                



            </div>
            
        </div>
    )
    
}