import React from 'react';
import Image from 'next/image';
import styles from '../forgotten-fantasy/ForgottenFantasy.module.css';

const ForgottenFantasy: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.imageGrid}>
        <div className={styles.row}>
          <Image src="/image/archiv/Art to the Horizon/SNB_Moosbrand2020_Tag1_090_ThomasDashuber.jpg" alt="Image 1" width={800} height={800} className={styles.image}/>
        </div>
      </div>
      <h1 className={styles.title}>Art to the Horizon</h1>
      <div className={styles.textContent}>
        <h2 className={styles.subTitle}>Artwork Description</h2>
        <p className={styles.paragraph}>
          Artwork Description<br/>
          Text<br/>
        </p>
        <p className={styles.paragraph}>
          MIR Gallery, an acclaimed international art gallery celebrated for its diverse and thought-provoking collection, is excited to announce an exclusive art sharing event titled &quot;Horizons of Art,&quot; to be held at the breathtaking Mountain Summit venue. This event is designed to unite art aficionados, collectors, and creators from across the globe in a celebration of the intersection of art and the natural world.
        </p>
        <p className={styles.paragraph}>
          The day&apos;s agenda includes a thoughtfully curated exhibition of modern and contemporary artworks, hands-on art workshops, and insightful conversations with distinguished artists. Participants will have the unique chance to delve into the interplay between art and the environment, and to consider the ways in which art can influence our view of the world.
        </p>

        <p className={styles.paragraph}>
          &quot;Art is a powerful medium that can bridge divides and connect us to our surroundings,&quot; remarked [Gallery Director&apos;s Name], Director of MIR Gallery. &quot;By hosting &apos;Horizons of Art&apos; at the Mountain Summit, we aim to highlight the profound impact art can have when it is encountered in the context of nature.&quot;
        </p>

        <p className={styles.paragraph}>
          MIR Gallery has also committed to donating a part of the event&apos;s proceeds to a local environmental conservation initiative, aligning with their dedication to sustainability and the preservation of the natural beauty that so often serves as a muse for artists.
        </p>

        <p className={styles.paragraph}>
          For further details on the event and to register for attendance, visit MIR Gallery&apos;s official website at [gallery website URL].
        </p>

        <p className={styles.paragraph}>
          About MIR Gallery:
          Founded in [year], MIR Gallery has been at the forefront of promoting cultural dialogue and artistic innovation. With a dynamic array of exhibitions and programs, the gallery remains dedicated to expanding the reach and impact of the arts.
        </p>

        <p className={styles.paragraph}>
          Contact Information:
          For further inquiries or to request media credentials, please reach out to:
          [Gallery Public Relations Contact]
          [Contact Email]
          [Contact Phone Number]
        </p>
        {/* 添加更多段落 */}
      </div>
    </div>
  );
};

export default ForgottenFantasy;
