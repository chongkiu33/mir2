"use client"
import React, { useEffect , useState , useRef } from 'react';

import styles from './BouceLine.module.css';

import { Tween, Easing , update as tweenUpdate } from '@tweenjs/tween.js';

const BouceLine = () => {
 const [svgWidth, setSvgWidth] = useState(window.innerWidth * 0.9); 
  const [curveh, setCurveh] = useState(75); 
  const [svgPath, setSvgPath] = useState(`M0,75 Q${svgWidth/2},${curveh} ${svgWidth},75`); 
  const pathRef = useRef<SVGPathElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  
  
  
  const tweening = useRef<boolean>(false);

  

  const handleMouseLeave = () => {

    // setCurveh(75); 

    if(!tweening.current){
      tweening.current = true;
      const initialCurveh = curveh;

      new Tween({ y : initialCurveh })
       .to({ y : 75 }, 800)
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



  const handleMouseMove = (event:any) => {
    const svgElement = event.currentTarget; // 获取当前 SVG 元素
    const rect = svgElement.getBoundingClientRect(); // 获取元素的边界信息

    const left = event.clientX - rect.left; // 到左边的距离
    const top = event.clientY - rect.top; // 到顶部的距离
    setCurveh(top); 
    setSvgPath(`M0,75 Q${left},${top} ${svgWidth},75`);
   
  };  

  const updateSvgPath = () => {
    setSvgPath(`M0,75 Q${svgWidth / 2},${curveh} ${svgWidth},75`);
  };

  useEffect(() => {
    const animate = (time: number) => {
      tweenUpdate(time); // 更新 Tween
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate); // 开始动画循环
  }, []);


  

    useEffect(() => {


        const handleResize = () => {
            const newSvgWidth = window.innerWidth * 1;   
            setSvgWidth(newSvgWidth);   
            setSvgPath(`M0,75 Q${newSvgWidth / 2},${curveh} ${newSvgWidth},75`);
        };

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.container} >
            <svg 
                height="150" 
                width={svgWidth} 
                xmlns="http://www.w3.org/2000/svg" 
                
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
            <path ref={pathRef} id="curve" d={svgPath} fill="none" stroke="#000" strokeWidth="1.5" />
        </svg>
        </div>
    ) 
}

export default BouceLine;