import Product from '@/app/components/product/product';
import styles from './europeshop.module.css';
import Footer from '@/app/components/footer/footer';

const products = [
    {
        name:"Product1",
        price: 100,
        image: "/image/product/bag3.png",
        description: "This is a product description"
    },
    {
        name:"Product2",
        price: 200,
        image: "/image/product/bag3.png",
        description: "This is a product description"
    },
    {
        name:"Product3",
        price: 200,
        image: "/image/product/海报8.png",
        description: "This is a product description"
    },
    {
        name:"Product4",
        price: 200,
        image: "/image/product/bag3.png",
        description: "This is a product description"
    },
    {
        name:"Product5",
        price: 200,
        image: "/image/product/明信片1.png",
        description: "This is a product description"
    },
    {
        name:"Product6",
        price: 200,
        image: "/image/product/BOXY HOODIE2.png",
        description: "This is a product description"
    },
    {
        name:"Product1",
        price: 100,
        image: "/image/product/bag3.png",
        description: "This is a product description"
    },
    {
        name:"Product2",
        price: 200,
        image: "/image/product/包包2.png",
        description: "This is a product description"
    },
    {
        name:"Product3",
        price: 200,
        image: "/image/product/海报8.png",
        description: "This is a product description"
    },
    {
        name:"Product4",
        price: 200,
        image: "/image/product/画册1.png",
        description: "This is a product description"
    },
    {
        name:"Product5",
        price: 200,
        image: "/image/product/明信片1.png",
        description: "This is a product description"
    },
    {
        name:"Product6",
        price: 200,
        image: "/image/product/BOXY HOODIE2.png",
        description: "This is a product description"
    }
];


export default function Shopping() {

    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
            <div className={styles.material}>
                <div className={styles.textTitle}>Material</div>
                <div className={styles.textContent}>CategoryA</div>
                <div className={styles.textContent}>CategoryB</div>
                <div className={styles.textContent}>CategoryC</div>
            </div>
            <div className={styles.type}>
                <div className={styles.textTitle}>Type</div>
                <div className={styles.textContent}>CategoryA</div>
                <div className={styles.textContent}>CategoryB</div>
                <div className={styles.textContent}>CategoryC</div>
            </div>

            <div className={styles.artist}>
                <div className={styles.textTitle}>Artist</div>
                <div className={styles.textContent}>CategoryA</div>
                <div className={styles.textContent}>CategoryB</div>
                <div className={styles.textContent}>CategoryC</div>
            </div>
        </div>

        <div className={styles.productContainer}>
            
            {products.map((product, index) => (
                <div className={styles.product} key={product.image}>
                <Product 
                key={index}
                price={product.price} 
                image = {product.image} 
                name={product.name} description={product.description}/>
                </div>
            ))}
            
            
        </div>
        <div className={styles.footer}>
            
        <Footer />
        </div>
      </div>
    );
  }