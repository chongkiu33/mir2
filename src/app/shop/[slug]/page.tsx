import styles from './page.module.css'
import Image from 'next/image'

export default function ShopPage() {
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <Image src="/image/product/bag3.png" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    Product Name
                </div>
                <div >
                    <h2  className={styles.secondtitle}>Product Introduction</h2>
                    <p className={styles.infotext}>xxxx</p>
                </div>
                <div className={styles.infobox}>
                    <h2  className={styles.secondtitle}>Category</h2>
                    <p className={styles.infotext}>xxxx</p>
                </div>
                <div className={styles.infobox}>
                    <h2  className={styles.secondtitle}>Material</h2>
                    <p className={styles.infotext}>xxxx</p>
                </div>
                <div className={styles.infobox}>
                    <h2  className={styles.secondtitle}>Price</h2>
                    <p className={styles.infotext}>xxxx</p>
                </div>
                
            </div>
        </div>
    )
}