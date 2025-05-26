"use client"
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


type UnAlignImagesProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "unalignimage" }
>;

export function UnAlignImages({ images, align }: UnAlignImagesProps) {
  if (!Array.isArray(images)) {
    return null;
  }

  const alignClass = align === 'top' ? 'items-start' : 'items-end';


  return (
    
    <section 
      
      className={`mx-auto flex ${alignClass} gap-[10px] pb-10 px-[10vw]`}
    >
       
       {images?.map((image, index) => {
            if (image && image.imageFile) {
              return (
                <div
                  key={image._key || `image-${index}`}
                  className="relative flex-1"
                >
                  {/* <Image
                          src={urlFor(image).width(600).url()} // 根据需要调整图片宽度以优化质量和加载速度
                          alt={`图片`}
                          fill // 'fill' 使图片填充其父容器
                          className="object-cover rounded-sm" // 'object-cover' 保证图片覆盖整个区域同时保持比例，'rounded-md' 添加圆角
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px" // 根据您的布局调整 sizes 属性以优化图片加载
                        /> */}

                  <Image
                    src={urlFor(image.imageFile).width(600).url()}
                    alt={""}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              );
            }
            return null;
          })}
    
    </section>
  );
}