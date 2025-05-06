"use server";

import { BasketItem } from "@/store/store";

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
    groupedItems:GroupedBasketItem[],
    metadata:Metadata,
){
    try{
        //check price
        const itemsWithoutPrice = groupedItems.filter((item) => !item.product.price);
        if(itemsWithoutPrice.length > 0){
            throw new Error("Missing price for some items");
        }

        //create checkout session
        
            
    }catch(error){
        console.error("Checkout session creation error:",error);
        return error;
    }
}