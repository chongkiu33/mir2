import CartProvider from "../components/shop/CartProvider";
import ShoppingCartModal from "../components/shop/ShoppingCartModal";
import CartButton from "../components/ShopNavbar/CartButton";
import ShopNavbar from "../components/ShopNavbar/ShopNavbar";

export default function RootLayout({
    children,

}:{
    children:React.ReactNode;
}
){
    return(
        <CartProvider>
            
          
            <CartButton />
            <ShoppingCartModal/>
            {children}
            
           
        </CartProvider>
    )
}