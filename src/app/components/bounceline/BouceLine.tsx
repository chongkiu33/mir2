"use client"
import React, { useEffect, useState, useRef } from 'react';
import styles from './BouceLine.module.css';
import { Tween, Easing, update as tweenUpdate } from '@tweenjs/tween.js';

const BouceLine = () => {
 
  const [svgWidth, setSvgWidth] = useState(0);
  const [curveh, setCurveh] = useState(75);
  const [svgPath, setSvgPath] = useState('');
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tweening = useRef<boolean>(false);

  
  const initializeDimensions = () => {
    const newWidth = window.innerWidth * 0.9;
    setSvgWidth(newWidth);
    setSvgPath(`M0,75 Q${newWidth/2},75 ${newWidth},75`);
  };

 
  useEffect(() => {
    initializeDimensions();
  }, []);

  const handleMouseLeave = () => {
    if(!tweening.current){
      tweening.current = true;
      const initialCurveh = curveh;
      new Tween({ y: initialCurveh })
        .to({ y: 75 }, 800)
        .easing(Easing.Elastic.Out)
        .onUpdate(({ y }) => {
          setCurveh(y);
          setSvgPath(`M0,75 Q${svgWidth/2},${y} ${svgWidth},75`);
        })
        .onComplete(() => {
          tweening.current = false;
        })
        .start();
    }
  };

 

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const svgElement = event.currentTarget;
    const rect = svgElement.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    setCurveh(top);
    setSvgPath(`M0,75 Q${left},${top} ${svgWidth},75`);
  };

  const handleTouchMove = (event: React.TouchEvent<SVGSVGElement>) => {
    const touch = event.touches[0];
    const svgElement = event.currentTarget;
    const rect = svgElement.getBoundingClientRect();
    const left = touch.clientX - rect.left;
    const top = touch.clientY - rect.top;
    setCurveh(top);
    setSvgPath(`M0,75 Q${left},${top} ${svgWidth},75`);
  }

  useEffect(() => {
    const animate = (time: number) => {
      tweenUpdate(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newSvgWidth = window.innerWidth * 0.9;
      setSvgWidth(newSvgWidth);
      setSvgPath(`M0,75 Q${newSvgWidth/2},${curveh} ${newSvgWidth},75`);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [curveh]);

  // 如果svgWidth为0，不渲染内容
  if (!svgWidth) return null;

  return (
    <div ref={containerRef} className={styles.container}>
      <svg 
        height="150" 
        width={svgWidth} 
        xmlns="http://www.w3.org/2000/svg"
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseLeave}
        
      >
        <path 
          ref={pathRef} 
          id="curve" 
          d={svgPath} 
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5" 
          

          className={styles.curve}
        />
      </svg>
    </div>
  );
};

export default BouceLine;