"use client"
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { urlFor } from "@/sanity/lib/image";
import React, { useRef , useState ,Suspense} from'react';
import styles from './imgGallery.module.css';
import { Canvas , useFrame , useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from "three";
import { OrbitControls } from '@react-three/drei';
import {Image} from '@react-three/drei';
import { client }from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

// 定义图片类型
interface SanityImage {
  _type: 'image';
  _id: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
}



type ImgGalleryblockProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "imggallery" }
>;

export function ImgGalleryblock({ images }: ImgGalleryblockProps) {
  if (!Array.isArray(images)) {
    return null;
  }

  return (
    
    <section 
    
     style={{
        height: '90vh',
        marginBottom:'-100px'
       
     }}
    >

        <Canvas>
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false}  />
                
                {images.map((image,index) => (
                    <ImgItem key={index} url={urlFor(image).width(500).url()}  />
                ))}
         </Suspense>
            </Canvas>
      
       
    
    </section>
  );
}

function ImgItem({ url}: { url: string}){
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const rotationAngle = useRef(0);
    const texture = useLoader(THREE.TextureLoader, url)
    const aspectRatio = texture.image.height/texture.image.width;
    const scale = [1, aspectRatio];

    // 使用 useMemo 确保 randomPosition 只生成一次
    const randomPosition = React.useMemo(() => [
        Number((Math.random() * 5 - 2.5).toFixed(1)), // x: -2 到 2
        Number((Math.random() * 5 - 2.5).toFixed(1)), // y: -2 到 2
        Number((Math.random() * 4 - 2).toFixed(1))  // z: -2 到 2
    ], []); // 空依赖数组意味着这个值只会在组件挂载时计算一次

    useFrame((state, delta) => {
        if (mesh.current) {
            rotationAngle.current -= delta * 0.03;
            
            const x = randomPosition[0] * Math.cos(rotationAngle.current) - randomPosition[2] * Math.sin(rotationAngle.current);
            const z = randomPosition[0] * Math.sin(rotationAngle.current) + randomPosition[2] * Math.cos(rotationAngle.current);

            mesh.current.position.set(x, randomPosition[1], z);
            mesh.current.quaternion.copy(state.camera.quaternion);
            
            // 设置缩放大小
            const targetScale = hovered ? [scale[0] * 1.2, scale[1] * 1.2] : scale;
            mesh.current.scale.lerp(new THREE.Vector3(...targetScale, 1), 0.2);
        }  
    });

   


    const handlePointerOver = () => {
        setHovered(true);
        document.body.style.cursor = "pointer"; // 设置鼠标样式
    };

    const handlePointerOut = () => {
        setHovered(false);
        document.body.style.cursor = "grab"; // 恢复鼠标样式
    };

    return(
        
        <mesh 
        
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        >
            <Image  ref={mesh} onPointerOver={() => setHovered(true)} // 当鼠标悬停时触发
            onPointerOut={() => setHovered(false)} // 当鼠标移出时触发
            url={url} position={randomPosition as [number, number, number]}  scale={scale as [number, number]}   toneMapped={false} transparent={true}  /> 
        </mesh>
        
 
    )
}
