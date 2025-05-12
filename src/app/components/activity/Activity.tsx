"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Activity.module.css';
import BouceLine from '../bounceline/BouceLine';

type ActivityProps = {
    content: string;
    date: string;
    description: string;
    artistName: string;
    tag: string[];
    imageUrl: string;
    link: string;
};

const Activity: React.FC<ActivityProps> = ({ content, date, description, artistName, tag, imageUrl, link }) => {
    
    
    

   

    return (
        <Link href={link} className={styles.activityLink}>
            <div className={styles.activity}>
                
                    <BouceLine />
                
                <div className={styles.activityContent}>
                    <div className={styles.activityHeader}>
                        <h2>{content}</h2>
                        <p>{date}</p>
                    </div>
                    <div className={styles.activityDescription}>
                        <p className={styles.clampedText}>{description}</p>
                    </div>
                    <div className={styles.activityArtist}>
                        <h3>{artistName}</h3>
                        {tag.map((tagItem, index) => (
                                <p key={index}>{tagItem}</p>
                            ))}
                    </div>
                    <div className={styles.activityImage}>
                        <Image src={imageUrl} alt="Activity Image" width={100} height={100} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Activity;
