import Image from "next/image";
import styles from "./product.module.css";
import Link from "next/link";


type ProductProps = {
   
    image: string;
    slug: string;
}

const Product = ({ image, slug }: ProductProps) => {
    return (
      <Link href={`/shop/${slug}`}>
        <Image src={image} alt="" fill className={styles.image}/>
      </Link>
    );
};



export default Product;