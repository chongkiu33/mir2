import Link from 'next/link';
import styles from './shop.module.css';

export default function Shopping() {
    return (
      <div className={styles.bigcontainer}>
        <div className={styles.textContainer}>Please Select the region</div>
      <div className={styles.container}>
        <Link className={styles.box} href="/shop/china">
        <video className={styles.video} autoPlay muted  loop>
          <source src="/video/china.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        China
        </Link>
        <Link className={styles.box} href="/shop/europe">
        <video className={styles.video} autoPlay muted  loop>
          <source src="/video/europe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        Europe
        </Link>
      
        
      </div>


      
      
      </div>
    );
  }