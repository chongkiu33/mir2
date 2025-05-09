"use server";
import stripe from "@/lib/stripe";
import { BasketItem } from "@/store/store";
import { urlFor } from "@/sanity/lib/image";

export type Metadata ={
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    clerkUserId: string;
}

export type GroupedBasketItem = {
    product:BasketItem["product"];
    quantity:number;
}

export async function createCheckoutSession(
    items:GroupedBasketItem[],
    metadata:Metadata,
){
    try{
        //check if any grouped items have no price
        const itemsWithoutPrice = items.filter((item) => !item.product?.price);
        if(itemsWithoutPrice.length > 0){
            throw new Error("Missing price for some items");
        }

        //Search for existing customer by email
        const customers = await stripe.customers.list({
            email:metadata.customerEmail,
            limit:1,
        });

        let customerId:string | undefined;
        if(customers.data.length > 0){
            customerId = customers.data[0].id;
        }

    const session = await stripe.checkout.sessions.create({
        customer:customerId,
        customer_creation: customerId ? undefined : "always",
        customer_email: !customerId ? metadata.customerEmail : undefined,
        metadata,
        mode:"payment",
        allow_promotion_codes:true,
        success_url:`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
        cancel_url:`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL}/basket`,
        line_items:items.map((item) => ({
            price_data:{
                currency:"eur",
                unit_amount: Math.round(item.product?.price! * 100),
                product_data:{
                    name:item.product?.name || "Unamed Product",
                    description: `Product ID: ${item.product?._id}`,
                    metadata:{
                        id:item.product._id || "",
                    },
                    images:item.product.productimage?.[0]?[urlFor(item.product?.productimage[0]).width(1000).url()] : undefined,
                    
                },
                

            },
            quantity:item.quantity,
        })),
    });
        
    return session.url;
            
    }catch(error){
        console.error("Checkout session creation error:",error);
        return null;
    }
}