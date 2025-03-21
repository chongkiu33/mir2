"use client"
import React, { useRef , useState ,Suspense} from'react';
import styles from './imgGallery.module.css';
import { Canvas , useFrame , useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from "three";
import { OrbitControls } from '@react-three/drei';
import {Image} from '@react-three/drei';
import { client }from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source)
}



const ImgGallery = ({objects}:{objects:any}) => {

    return(
        <div className={styles.container}>
            <Canvas>
            <Suspense fallback={null}>
                <OrbitControls minDistance={1} maxDistance={10} />
                
                {objects.map((object:any, index:number) => (
          <ImgItem key={object._id} url={urlFor(object.objectimage).width(500).url()} position={object.position} slug={object.slug.current} />
        ))}
         </Suspense>
            </Canvas>
        </div>
    );
};

export default ImgGallery;



function ImgItem({ url, position,slug }: { url: string; position: any; slug:string}){
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const rotationAngle = useRef(0); // 用于跟踪旋转角度
    const texture = useLoader(THREE.TextureLoader, url)
    const aspectRatio =  texture.image.height/texture.image.width;
    const scale = [1,  aspectRatio];

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

    const handleClick = () => {
        window.location.href = `/object/${slug}`; // 使用 window.location.href 跳转
    };


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
        onClick={handleClick} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        >
            <Image  ref={mesh} onPointerOver={() => setHovered(true)} // 当鼠标悬停时触发
            onPointerOut={() => setHovered(false)} // 当鼠标移出时触发
            url={url} position={position}  scale={scale as [number, number]}   toneMapped={false} transparent={true}  /> 
        </mesh>
        
 
    )
}


const images = [
    { position: [3.3, 1.3, 0.3], url: "/image/png/1.png",slug:"1"},
    { position: [-0.5, -1.8, 1],  url: "/image/png/2.png", slug:"2"},
    { position: [1.4, -0.4, 2], url: "/image/png/3.png" , slug:"3"},
    { position: [-2.5, 1.7, 1], url: "/image/png/4.png" , slug:"4"   },
    { position: [-3.7, 0.4, 1], url: "/image/png/5.png", slug:"5"},
    { position: [2.2, 0.8, 0.1], url: "/image/png/6.png",slug:"6"},
    { position: [2, 0, -1.5], url: "/image/png/7.png",slug:"7"},
    { position: [3.8, -1.5, 0], url: "/image/png/8.png", slug:"8"},
    { position: [-1.6, 0.7, 0.5], url: "/image/png/9.png",slug:"9"},
    { position: [2.3, -2.3, 0], url: "/image/png/10.png",slug:"10"},
    { position: [-2.4, -1.6, 0], url: "/image/png/11.png",slug:"11"},
    { position: [1.4, -2.2, -1.5], url: "/image/png/12.png",slug:"12"},
    { position: [4.2, 0, 0], url: "/image/png/13.png",slug:"13"},
    { position: [-3.5, 0.5, 0], url: "/image/png/14.png",slug:"14"},
    { position: [1.1, 1.6, 1.7], url: "/image/png/15.png",slug:"15"},
    { position: [-2.9, -0.7, 0.9], url: "/image/png/16.png",slug:"16"},
    { position: [-2, -1.2, -2], url: "/image/png/17.png",slug:"17"},
    { position: [-0.1, 0.1, 1], url: "/image/png/18.png",slug:"18"},
    { position: [-0.8, 2.3, -1], url: "/image/png/19.png",slug:"19"},
    { position: [0.5, 1.3, -0.5], url: "/image/png/20.png",slug:"20"},
  ]