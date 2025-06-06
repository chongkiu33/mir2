import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";


type TwomoreimagesProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "twotothreeimages" }
>;

export function TwomoreImage({images, spacing, imageWidthRatio}: TwomoreimagesProps) {

    
    const imageCount = images?.length;

    const getImageWidthStyle = (index: number) => {
        if (imageCount === 2 && imageWidthRatio && imageWidthRatio.left && imageWidthRatio.right) {
          const totalRatio = imageWidthRatio.left + imageWidthRatio.right;
          if (index === 0) {
            return { flex: `${imageWidthRatio.left / totalRatio}` };
          }
          if (index === 1) {
            return { flex: `${imageWidthRatio.right / totalRatio}` };
          }
        }
        // 对于单张或三张图片，或者没有比例设置时，平均分配
        // 检查 imageCount 是否是有效的正数，以避免除以 undefined 或 0
        if (typeof imageCount === 'number' && imageCount > 0) {
          return { flex: `1 1 ${100 / imageCount}%` };
        }
      
        return { flex: '1' }; // 默认情况下，让项目平均分配空间
      };


      let currentStyle = {};
      if (spacing === 'narrow') {
        currentStyle = { gap: '2vw' };
      } else{
        currentStyle  = { gap: '5vw' };
      }

  return (
    <section 
    style={currentStyle} 
    className="mx-auto flex flex-row w-[80%]   gap-20 pb-10">

            {images?.map((image: any, index: number) => (
              image && image.asset ? (
                <div key={image._key || index} className="flex-1" style={getImageWidthStyle(index)}>
                  <Image
                    className="w-full h-full object-cover rounded-sm"
                    src={urlFor(image)
                      .quality(80)
                      .auto("format")
                      .url()}
                    alt={image?.alt || ""}
                    width={600} // 可以根据需要调整或移除，如果父容器已控制大小
                    height={400} // 可以根据需要调整或移除
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 响应式尺寸提示
                  />
                  {image.alt && (<p className="text-center text-sm text-gray-600 mt-2">{image.alt}</p>)}
                </div>

                
                
              ) : null
            ))}
         
    </section>
  );
}