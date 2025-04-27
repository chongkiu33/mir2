"use client"
import { ReactNode} from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";


export default function CartProvider({children}:{children:ReactNode}){
    return(
        <USCProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
            successUrl={`http://localhost:3000/shop/success`}
            cancelUrl={`http://localhost:3000/shop/error`}
            currency="EUR"
            billingAddressCollection={true}
            language="en-US"
            shouldPersist={true}
        >
            {children}
        </USCProvider>
    )
}