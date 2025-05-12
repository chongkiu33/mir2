import CartProvider from "../components/shop/CartProvider";
import ShoppingCartModal from "../components/shop/ShoppingCartModal";
import CartButton from "../components/ShopNavbar/CartButton";
import ShopNavbar from "../components/ShopNavbar/CategorySelector";
import { ClerkProvider } from "@clerk/nextjs";



export default function RootLayout({
    children,

}:{
    children:React.ReactNode;
}
){
    return(
        <ClerkProvider dynamic>
            {/* <CartProvider> */}
       
                {/* <ShoppingCartModal/> */}
   
                {children}
        
         {/* </CartProvider> */}
        </ClerkProvider>
    )
}