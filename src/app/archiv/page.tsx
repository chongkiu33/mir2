"use client";

import React, { useEffect , useState , useRef } from 'react';
import Activity from '../components/activity/Activity';
import styles from './Archiv.module.css';
import BouceLine from '../components/bounceline/BouceLine';
import Footer from '../components/footer/footer';
import { Tween, Easing , update as tweenUpdate } from '@tweenjs/tween.js';

const activities = [
  {
    content: "Forgotten Fantasy is located at Shanghai",
    date: "24-03-14",
    description: "Shanghai, July 2052 - The city of Shanghai is gearing up for an enchanting spectacle as the much-anticipated event, ‘Luna Luna: Forgotten Fantasy,’ prepares to cast its spell on the city's vibrant cultural scene. Slated for July 2052, this immersive event promises to transport attendees to a realm of forgotten myths and timeless tales, all within the bustling metropolis of Shanghai.",
    artistName: "Luna Luna",
    tag: "Tag",
    imageUrl: "/image/archiv/luna Luna/5bb40e9e-c896-42eb-a551-9971a9ad5f98-wm202306luna01.jpg",
    link: "/archiv/forgotten-fantasy"
  },
  {
    content: "Art to the Horizon",
    date: "24-05-10",
    description: "MIR Gallery, an acclaimed international art gallery celebrated for its diverse and thought-provoking collection, is excited to announce an exclusive art sharing event titled 'Horizons of Art,' to be held at the breathtaking Mountain Summit venue. This event is designed to unite art aficionados, collectors, and creators from across the globe in a celebration of the intersection of art and the natural world.",
    artistName: "Artist's Name 2",
    tag: "Tag 2",
    imageUrl: "/image/archiv/Art to the Horizon/LitFest22_Motivmathis_beutel_rgb-cut_q.jpg",
    link: "/archiv/art-to-the-horizon"
  },
  {
    content: "De Paprikabrug",
    date: "24-05-10",
    description: "Normally ceramicist Wietske van Leeuwen makes bowls and pots with lids. She does not use rigid walls. Van Leeuwen stacks the same shapes on top of each other. For example, she uses shells, strips of hogweed or pears. She makes dozens of clay prints of these, which she places on top of each other. The result is a sumptuous, baroque form with a careful finish. ",
    artistName: "Wietske van Leeuwen",
    tag: "Tag 2",
    imageUrl: "/image/archiv/De Paprikabrug/IMG_2164-1536x1152.jpg",
    link: "/archiv/woven-form"
  },
  {
    content: "WOVEN FORMS",
    date: "24-05-10",
    description: "Woven Forms brings the craft of weaving into the third dimension. It shows the development of fully-woven sculptural textile-forms created on a Jacquard loom. These abstract objects were achieved by embedding form-giving mechanisms, such as multi-layering techniques and heat-reactive shrinking yarn. Sewing was not needed to create these woven objects. Different expressions were developed focusing on color and texture influencing the form outcomes. ",
    artistName: "Artist's Name 3",
    tag: "Tag 2",
    imageUrl: "/image/archiv/Woven-Forms/Woven-Forms_Leonie-Burkhardt_photo-credit-Daniela-Ferro_2.webp",
    link: "/archiv/fogotten-fantasy"
  },
  {
    content: "The Dreamer: Stories from another world",
    date: "24-05-10",
    description: "The show includes not just archive images but artworks and sculptures specifically designed as tribute to China and the great Chinese tradition. ",
    artistName: "Emiliano Ponzi",
    tag: "Tag 2",
    imageUrl: "/image/archiv/The Dreamer/4dc83374a3544f8899b3ab125d6b50e9.jpg",
    link: "/archiv/fogotten-fantasy"
  },
  {
    content: "Tips and Dates Where to go at the weekend?",
    date: "24-05-10",
    description: "Cultural experiences are a wonderful way to enrich your knowledge and understanding of the world. Here's how you can expand on the idea of visiting a city known for its museums, art galleries, or historical sites:",
    artistName: "Artist's Name 4",
    tag: "Tag 2",
    imageUrl: "/image/archiv/Where to go at the weekend/016c55608e850511013e3b7d36d17b.jpg@1280w_1l_2o_100sh.jpg",
    link: "/archiv/fogotten-fantasy"
  }
  
];

const Archiv: React.FC = () => {
  

  return (
    <div className={styles.archiv}>

      {activities.map((activity, index) => (
        <>
        <Activity
          key={index}
          content={activity.content}
          date={activity.date}
          description={activity.description}
          artistName={activity.artistName}
          tag={activity.tag}
          imageUrl={activity.imageUrl}
          link={`/archiv/${activity.content.replace(/\s+/g,'-').toLowerCase()}`}
        />

        </>
      ))}
         
      <div className={styles.footer}>
      <Footer />
      </div>
     
    </div>
  );
};

export default Archiv;
