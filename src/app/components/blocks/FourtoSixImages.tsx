
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


type FourtoSixImagesProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "gridimages" }
>;

export function FourtoSiximages({ images }: FourtoSixImagesProps) {

  if (!Array.isArray(images)) {
  
    return null;
  }

  const numImages = images.length;


  if(!(numImages === 4 || numImages === 5 || numImages === 6)) {
    // console.log(`FourtoSiximages: numImages is ${numImages}, not 4, 5, or 6. Returning null.`);
    return null;
  }

  let currentGridStyle = {};
  if (numImages === 4) {
    currentGridStyle = { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' };
  } else if (numImages === 5 || numImages === 6) {
    currentGridStyle = { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' };
  }

  return (
    
    <section 
      style={currentGridStyle} 
      className="mx-auto  grid w-full gap-[2vw] px-[10vw] pb-[10px]"
    >
      
       {images?.map((image,index) => (
                  

                        <div
                        key={image._key || `image-${index}`} // 使用 _key 或索引作为 key
                        className="relative" // 'aspect-square' 保持每个格子的宽高比为1:1
                      >
                        <Image
                          src={urlFor(image).width(800).url()} // 根据需要调整图片宽度以优化质量和加载速度
                          alt={`图片`}
                          // fill 
                          className="object-contain rounded-sm" // 'object-cover' 保证图片覆盖整个区域同时保持比例，'rounded-md' 添加圆角
                          width={800}
                          height={800}
                          layout="responsive"// 根据您的布局调整 sizes 属性以优化图片加载
                        />
                      </div>
                        
                        
            
                    
               
                ))}
    
    </section>
  );
}