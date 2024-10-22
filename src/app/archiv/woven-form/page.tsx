import React from 'react';
import Image from 'next/image';
import styles from '../forgotten-fantasy/ForgottenFantasy.module.css';

const ForgottenFantasy: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.imageGrid}>
        <div className={styles.row}>
        <div className={styles.videoContainer}>
            <video controls className={styles.video}>
              <source src="/image/archiv/Woven-Forms/file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
        </div>
        <div className={styles.row}>
          <div className={styles.imageWideContainer}>
            <Image src="/image/archiv/Woven-Forms/Woven-Forms_Leonie-Burkhardt_photo-credit-Daniela-Ferro_4.webp" alt="Image 3" layout="responsive" width={1600} height={800} className={styles.imageWide}/>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/image/archiv/Woven-Forms/5.webp" alt="Image 4" layout="responsive" width={800} height={800} className={styles.image}/>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>WOVEN FORMS</h1>
      <div className={styles.textContent}>
        <h2 className={styles.subTitle}>Artwork Description</h2>
        <p className={styles.paragraph}>
        Artwork Description<br/>
        Text<br/></p>
        <p className={styles.paragraph}>
        How can form be generated from a flat woven surface?
        </p>

        <p className={styles.paragraph}>
        Woven Forms brings the craft of weaving into the third dimension. It shows the development of fully-woven sculptural textile-forms created on a Jacquard loom. These abstract objects were achieved by embedding form-giving mechanisms, such as multi-layering techniques and heat-reactive shrinking yarn. Sewing was not needed to create these woven objects. Different expressions were developed focusing on color and texture influencing the form outcomes. 
        </p>

        <p className={styles.paragraph}>
        Materials: linen and Pemotex as weft on a monofilament warp
        </p>
        
        {/* 添加更多段落 */}
      </div>
    </div>
  );
};

export default ForgottenFantasy;
