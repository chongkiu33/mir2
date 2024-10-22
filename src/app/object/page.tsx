"use client"
import React from 'react';
import { useState, useEffect, useRef } from 'react';

import styles from './Object.module.css';
import ImgGallery from '../components/imgGallery/imgGallery';

export default function Object() {
  

  return (
    <div className={styles.container}>
      <ImgGallery />

    </div>
  );
}
