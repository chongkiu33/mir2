import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PRODUCT_BY_SLUG_QUERYResult } from '@/sanity/types';


import { devNull } from 'os';

export interface BasketItem{
    product:PRODUCT_BY_SLUG_QUERYResult;
    quantity:number;
}

export interface BasketState{
    items:BasketItem[];
    addItem: (product: Product) => void;
    removeItem: (productId:string) => void;
    clearBasket: () => void;
    getTotalPrice: () => number;
    getItemCount: (productId: string) => number;
    getGroupedItems: () => BasketItem[];
    
    
}

const useBasketStore = create<BasketState>()(
    persist(
        (set,get) => ({
            items:[],
            addItem: (product)=>
                set((state)=>{
                    const existingItem = state.items.find(
                        (item) => item.product?._id === product._id
                    );
                    if(existingItem){
                        return{
                            items:state.items.map((item) =>
                                item.product?._id === product._id
                                ? {...item, quantity: item.quantity + 1 }
                                :item
                            ),
                        };
                    } else {
                        return { items:[...state.items, { product, quantity:1 }] };
                    }
                }),
            removeItem: (productId) =>
                set((state)=>({
                    items: state.items.reduce((acc,item) => {
                        if (item.product?._id === productId) {
                            if (item.quantity > 1) {
                                acc.push({...item,quantity:item.quantity -1 })
                            }
                            } else {
                                acc.push(item);
                            }
                            return acc;
                        }, [] as BasketItem[]),         
                })),
            clearBasket: () => set({ items:[] }),
            getTotalPrice: () => {
                return get().items.reduce(
                    (total, item) => total +(item.product?.price ?? 0) * item.quantity,
                    0
                );
            },
            getItemCount: (productId)=> {
                const item = get().items.find((item) => item.product?._id === productId);
                return item ? item.quantity : 0;
            },
            getGroupedItems: () => get().items,

        }),
        {
            name:"basket-store"
        }
    )
);

// 定义简化版的 Product 类型
type Product = {
  _id: string;
  name: string | null;
  slug: Slug | null;
  stock: number | null;
  description: string | null;
  categories: null;
  price: number | null;
  productimage: Array<{
    asset: {
      url: string | null;
    } | null;
  }> | null;
}

export type Slug = {
    current: string;
    _type: 'slug';
  }

export default useBasketStore;


    