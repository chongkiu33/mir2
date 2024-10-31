"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import styles from './object.module.css';

// 定义接口
interface ImageData {
    position: [number, number, number];
    url: string;
    scale: [number, number];
    slug: string;
}

interface GifPlaneProps {
    position: [number, number, number];
    url: string;
    scale: [number, number];
}

// GIF平面组件
const GifPlane: React.FC<GifPlaneProps> = ({ position, url, scale }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);

    useEffect(() => {
        // 创建一个HTML图片元素来加载GIF
        const img = new Image();
        img.src = url;
        
        img.onload = () => {
            // 创建纹理
            const tex = new THREE.Texture(img);
            tex.needsUpdate = true;
            setTexture(tex);
            
            // 设置纹理参数
            tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.minFilter = THREE.LinearFilter;
        };
        
        // 使GIF动画持续更新
        let animationFrameId: number;
        const animate = () => {
            if (texture) {
                texture.needsUpdate = true;
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        
        return () => {
            if (texture) {
                texture.dispose();
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, [url]);

    return (
        <mesh ref={meshRef} position={position}>
            <planeGeometry args={[scale[0], scale[1]]} />
            <meshBasicMaterial 
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

// 场景组件
const Scene: React.FC = () => {
    const images: ImageData[] = [
        { position: [-1.6, 0.7, 0.5], url: "/image/gif/9.gif", scale: [1, 1.25], slug: "9" },
        { position: [-0.1, 0.1, 1], url: "/image/gif/18.gif", scale: [1, 1], slug: "18" },
    ];

    return (
        <>
            <ambientLight intensity={1} />
            {images.map((img) => (
                <GifPlane
                    key={img.slug}
                    position={img.position}
                    url={img.url}
                    scale={img.scale}
                />
            ))}
        </>
    );
};

const ObjectTest: React.FC = () => {
    return (
        <div className={styles.container}>
            <Canvas>
                <OrbitControls 
                    minDistance={1} 
                    maxDistance={10}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
                <Scene />
            </Canvas>
        </div>
    );
};

export default ObjectTest;