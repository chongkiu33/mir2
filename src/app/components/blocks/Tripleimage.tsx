"use client"
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// 假设 "tripeimage" 是您在 Sanity 中为这个三宫格图定义的 _type
// 并且它包含 'layout' 和 'images' 字段
type TripleImageBlockProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "tripeimage" } // 请确保这个 _type 与您 Sanity schema 中的定义一致
>;

export function Tripleimage(props: TripleImageBlockProps) {
  // 从 props 中解构 layout 和 images
  // Sanity schema 中 layout 有 initialValue: 'left'，images 有数量校验
  const { layout = 'left', images } = props;

  if (!images || images.length !== 3) {
    console.warn("三宫格图组件需要正好 3 张图片。");
    return null; // 如果图片数量不为3，则不渲染任何内容
  }

  const imageCommonClass = "object-cover rounded-sm";

  // 渲染单张图片的辅助函数
  const renderImageCell = (image: any, index: number, altText: string, isLarge: boolean = false) => (
    <div
      key={image._key || `image-cell-${index}`}
      className={`relative w-full h-full ${isLarge ? '' : 'aspect-[16/9]'}`} // 大图不强制aspect ratio，小图保持4/3
    >
      <Image
        src={urlFor(image).width(isLarge ? 800 : 600).url()}
        alt={altText}
        fill
        className={imageCommonClass}
        sizes={isLarge ? 
               "(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw" :
               "(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 15vw"} // 根据布局调整sizes
      />
    </div>
  );

  return (
    <section 
      className="mx-auto grid grid-cols-2 grid-rows-2 gap-[2vw] pb-10 px-[10vw]"
    >
      {layout === 'left' ? (
        <>
          
          <div className="row-span-2">
            {renderImageCell(images[0], 0, "左侧图片", true)}
          </div>
         
          {renderImageCell(images[1], 1, "右上图片")}
         
          {renderImageCell(images[2], 2, "右下图片")}
        </>
      ) : ( 
        <>
         
          {renderImageCell(images[0], 0, "左上图片")}
         
      
          <div className="row-span-2">
            {renderImageCell(images[2], 2, "右侧图片", true)}
          </div>
    
          {renderImageCell(images[1], 1, "左下图片")}
        </>
      )}
    </section>
  );
}