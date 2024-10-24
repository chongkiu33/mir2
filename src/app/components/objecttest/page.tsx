"use client";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Image } from '@react-three/drei';
import styles from './object.module.css';

const images = [
    { position: [3.3, 1.3, 0.3], url: "/image/png/1.png", scale: [1, 0.75], slug: "1" },
    { position: [-0.5, -1.8, 1], url: "/image/png/2.png", scale: [1, 1 * 1.5], slug: "2" },
    { position: [1.4, -0.4, 2], url: "/image/png/3.png", scale: [1, 0.65], slug: "3" },
    { position: [-2.5, 1.7, 1], url: "/image/png/4.png", scale: [1, 1.5], slug: "4" },
    { position: [-3.7, 0.4, 1], url: "/image/png/5.png", scale: [1, 1.5], slug: "5" },
    { position: [2.2, 0.8, 0.1], url: "/image/png/6.png", scale: [0.8, 0.8 * 0.8], slug: "6" },
    { position: [2, 0, -1.5], url: "/image/png/7.png", scale: [1, 0.67], slug: "7" },
    { position: [3.8, -1.5, 0], url: "/image/png/8.png", scale: [1, 1], slug: "8" },
    
];

export default function Object() {
    return (
        <div className={styles.container}>
            <Canvas>
                <OrbitControls minDistance={1} maxDistance={10} />
                {images.map((image) => (
                    <ImgItem key={image.url} {...image} />
                ))}
            </Canvas>
        </div>
    );
}

function ImgItem({ url, position, scale, slug }: { url: string; position: any; scale: any; slug: string }) {
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const rotationAngle = useRef(0);

    useFrame((state, delta) => {
        if (mesh.current) {
            rotationAngle.current -= delta * 0.03;

            const x = position[0] * Math.cos(rotationAngle.current) - position[2] * Math.sin(rotationAngle.current);
            const z = position[0] * Math.sin(rotationAngle.current) + position[2] * Math.cos(rotationAngle.current);

            mesh.current.position.set(x, position[1], z);
            mesh.current.quaternion.copy(state.camera.quaternion);

            const targetScale = hovered ? [scale[0] * 1.2, scale[1] * 1.2] : scale;
            mesh.current.scale.lerp(new THREE.Vector3(...targetScale, 1), 0.2);
        }
    });

    return (
        <mesh>
            <Image
                ref={mesh}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                url={url}
                position={position}
                scale={scale}
                toneMapped={false}
                transparent={true}
            />
        </mesh>
    );
}
