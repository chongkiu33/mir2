"use client"
import React, { useRef , useState } from'react';
import styles from './imgGallery.module.css';
import { Canvas , useFrame , useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from "three";
import { OrbitControls } from '@react-three/drei';
import {Image} from '@react-three/drei';


const images = [
    { position: [3.3, 1.3, 0.3], url: "/image/png/1.png",scale: [1, 0.75]},
    { position: [-0.5, -1.8, 1],  url: "/image/png/2.png", scale: [1, 1*1.5]},
    { position: [1.4, -0.4, 2], url: "/image/png/3.png" , scale: [1, 0.65]},
    { position: [-2.5, 1.7, 1], url: "/image/png/4.png" , scale: [1, 1.5]},
    { position: [-3.7, 0.4, 1], url: "/image/png/5.png",scale: [1, 1.5]},
    { position: [2.2, 0.8, 0.1], url: "/image/png/6.png",scale: [0.8, 0.8*0.8]},
    { position: [2, 0, -1.5], url: "/image/png/7.png",scale: [1, 0.67]},
    { position: [3.8, -1.5, 0], url: "/image/png/8.png",scale: [1, 1]},
    { position: [-1.6, 0.7, 0.5], url: "/image/png/9.png",scale: [1, 1.25]},
    { position: [2.3, -2.3, 0], url: "/image/png/10.png",scale: [1, 1*1.25]},
    { position: [-2.4, -1.6, 0], url: "/image/png/11.png",scale: [1, 1*1.24]},
    { position: [1.4, -2.2, -1.5], url: "/image/png/12.png",scale: [1, 1*1.15]},
    { position: [4.2, 0, 0], url: "/image/png/13.png",scale: [1.3, 1.3*0.69]},
    { position: [-3.5, 0.5, 0], url: "/image/png/14.png",scale: [0.6, 0.6*1.33]},
    { position: [1.1, 1.6, 1.7], url: "/image/png/15.png",scale: [1, 1*1.5]},
    { position: [-2.9, -0.7, 0.9], url: "/image/png/16.png",scale: [0.9, 0.9*1.5]},
    { position: [-2, -1.2, -2], url: "/image/png/17.png",scale: [1, 1*1.5]},
    { position: [-0.1, 0.1, 1], url: "/image/png/18.png",scale: [1, 1]},
    { position: [-0.8, 2.3, -1], url: "/image/png/19.png",scale: [1, 1*1.5]},
    { position: [0.5, 1.3, -0.5], url: "/image/png/20.png",scale: [0.6, 0.6*1.29]},
  ]

const ImgGallery = () => {

    return(
        <div className={styles.container}>
            <Canvas>
                <OrbitControls minDistance={1} maxDistance={10} />
                
                {images.map((image, index) => (
          <ImgItem key={image.url} {...image} />
        ))}
            </Canvas>
        </div>
    );
};

export default ImgGallery;



function ImgItem({ url, position, scale }: { url: string; position: any; scale: any }){
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const rotationAngle = useRef(0); // 用于跟踪旋转角度

    useFrame((state, delta) => {
       
       
        if (mesh.current) {
            
            rotationAngle.current -= delta * 0.03; // 调整旋转速度

            // 计算图片围绕Y轴旋转后的新位置
            const x = position[0] * Math.cos(rotationAngle.current) - position[2] * Math.sin(rotationAngle.current);
            const z = position[0] * Math.sin(rotationAngle.current) + position[2] * Math.cos(rotationAngle.current);

            // 设置图片的新位置
            mesh.current.position.set(x, position[1], z);
            mesh.current.quaternion.copy(state.camera.quaternion);  
            
            // 设置缩放大小
            const targetScale = hovered ? [scale[0] * 1.2, scale[1] * 1.2] : scale;
            mesh.current.scale.lerp(new THREE.Vector3(...targetScale, 1), 0.2);
        }  
    });

    return(
       
        <mesh>
            <Image  ref={mesh} onPointerOver={() => setHovered(true)} // 当鼠标悬停时触发
            onPointerOut={() => setHovered(false)} // 当鼠标移出时触发
            url={url} position={position} scale={scale}  toneMapped={false} transparent={true} /> 
        </mesh>
 
    )
}