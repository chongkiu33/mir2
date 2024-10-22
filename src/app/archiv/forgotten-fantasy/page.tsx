import React from 'react';
import Image from 'next/image';
import styles from './ForgottenFantasy.module.css';

const ForgottenFantasy: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.imageGrid}>
        <div className={styles.row}>
          <Image src="/image/archiv/De Paprikabrug/DH679_1529.jpg" alt="Image 1" width={800} height={800} className={styles.image}/>
          <Image src="/image/archiv/De Paprikabrug/DH679_1533.jpg" alt="Image 2" width={800} height={800} className={styles.image}/>
        </div>
        <div className={styles.row}>
          <div className={styles.imageWideContainer}>
            <Image src="/image/archiv/De Paprikabrug/IMG_2164-1536x1152.jpg" alt="Image 3" layout="responsive" width={1600} height={800} className={styles.imageWide}/>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/image/archiv/De Paprikabrug/DH679_1525.jpg" alt="Image 4" layout="responsive" width={800} height={800} className={styles.image}/>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>De Paprikabrug</h1>
      <div className={styles.textContent}>
        <h2 className={styles.subTitle}>Artwork Description</h2>
        <p className={styles.paragraph}>
          Artwork Description<br/>
          Text<br/>
        </p>
        <p className={styles.paragraph}>
          Normally ceramicist Wietske van Leeuwen makes bowls and pots with lids. She does not use rigid walls. Van Leeuwen stacks the same shapes on top of each other. For example, she uses shells, strips of hogweed or pears. She makes dozens of clay prints of these, which she places on top of each other. The result is a sumptuous, baroque form with a careful finish. Van Leeuwen is inspired by collections of exotic objects from nature, such as those gathered in cabinets of curiosities (read: predecessors of the museum) in the sixteenth and seventeenth centuries.
        </p>
        <p className={styles.paragraph}>
          In 2006, Stroom Den Haag, together with the Wateringse Veld development combination, invited Van Leeuwen to think up a ceramic work for this new neighbourhood. It became a monumental application on a bridge. Just like Hans van Bentem, Dora Dolz and Tejo Philips, Van Leeuwen was told that her design should refer to the horticultural industry that used to be present here.
        </p>
        <p className={styles.paragraph}>
          For the middle of the bridge, Van Leeuwen made a large relief measuring three by one metre. It shows a collage of leeks surrounded by white and blue grapes. In the middle, there is a pepper with a bulb of garlic as a kind of anemone on top. On the culverts on either side of the bridge, there are four large rosettes made up of tomatoes, red peppers, balls of garlic and a single vineyard snail. Actually, the relief was already finished in 2009. Due to the 2008 crisis, the sale of the houses and thus the construction of Wateringse Veld stagnated. Van Leeuwen&apos;s reliefs were installed at the end of 2011.
        </p>
        <p className={styles.paragraph}>
          Remarkably enough, after the creation of this design for the bridge, peppers and pumpkins also appear in Van Leeuwen&apos;s free work. This commission apparently gave a new dimension or impulse to her oeuvre. In 2009, she even made an entire pepper dish.
        </p>
        {/* 添加更多段落 */}
      </div>
    </div>
  );
};

export default ForgottenFantasy;
