"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import styles from './WaterRipple.module.css';




// 修改组件接收背景图片URL作为props
const WaterRipple = ({ backgroundImageUrl }: { backgroundImageUrl?: string }) => {
  const rippleRef = useRef<HTMLDivElement>(null);
  // 使用传入的背景图片URL或默认图片
  const [backgroundImage, setBackgroundImage] = useState<string>(backgroundImageUrl || '/bg2.jpg'); 

  useEffect(() => {
    // 如果有传入新的背景图片URL，则更新状态
    if (backgroundImageUrl) {
      setBackgroundImage(backgroundImageUrl);
    }
  }, [backgroundImageUrl]);

  useEffect(() => {
    // 动态加载Pixi.js脚本
    const script = document.createElement('script');
    script.src = '/js/pixi.min.js'; // 确保这个路径是正确的
    script.onload = () => {
      // 确保Pixi.js脚本加载完成后进行初始化
      const PIXI = (window as any).PIXI;

      const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xFFFFFF, // 将背景颜色改为白色
      });

      if (rippleRef.current) {
        rippleRef.current.appendChild(app.view);
      }

      const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        if (background) {
          background.width = window.innerWidth;
          background.height = window.innerHeight;
        }
      };

      window.addEventListener('resize', resize);

      let background: any = null; // 使用 any 类型

      app.loader.add('background', backgroundImage).load((loader: any, resources: any) => {
        background = new PIXI.Sprite(resources.background.texture);
        background.width = app.screen.width;
        background.height = app.screen.height;
        app.stage.addChild(background);

        const displacementSprite = PIXI.Sprite.from('/filter_NRM.jpg');
        const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        app.stage.addChild(displacementSprite);

        displacementSprite.scale.x = 1;
        displacementSprite.scale.y = 1;

        background.filters = [displacementFilter];

        app.ticker.add(() => {
          displacementSprite.x += 1;
          if (displacementSprite.x > displacementSprite.width) displacementSprite.x = 0;
          displacementSprite.y += 1;
          if (displacementSprite.y > displacementSprite.height) displacementSprite.y = 0;
        });

        const updateRipplePosition = (x: number, y: number) => {
          displacementSprite.x = x - displacementSprite.width / 2;
          displacementSprite.y = y - displacementSprite.height / 2;
        };

        window.addEventListener('mousemove', (event) => {
          updateRipplePosition(event.clientX, event.clientY);
        });

        window.addEventListener('touchmove', (event) => {
          event.preventDefault();
          const touch = event.touches[0];
          if (touch) {
            updateRipplePosition(touch.clientX, touch.clientY);
          }
        });

      });

      // 清理函数
      return () => {
        window.removeEventListener('resize', resize);
        app.destroy(true, { children: true, texture: true, baseTexture: true });
        if (rippleRef.current) {
          rippleRef.current.removeChild(app.view);
        }
      };
    };
    document.body.appendChild(script);

    // 清理函数
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [backgroundImage]); // 添加backgroundImage作为依赖项

  return (
    <>
      <div ref={rippleRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 ,overflow: 'hidden'}} />
      <div className={styles.textContainer1}>
        <div className={styles.text1}>MIR</div>
      </div>
      {/* <div className={styles.textContainer2}>
        <div className={styles.text2}>MIR</div>
      </div> */}
      
    </>
  );
};

export default WaterRipple;
