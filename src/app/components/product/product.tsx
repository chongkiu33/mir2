import Image from "next/image";
import styles from "./product.module.css";


type ProductProps = {
    name: string;
    price: number;
    description: string;
    image: string;
}

const Product = ({ name, price, description, image }: ProductProps) => {
    return (
      <Image src={image} alt="" fill className={styles.image}/>
    );
};



export default Product;