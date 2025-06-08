
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


type NarrowContentProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "narrowcontent" }
>;

export function NarrowContent({ contentElements }: NarrowContentProps) {

  if (!Array.isArray(contentElements)) {
  
    return null;
  }

  const numImages = contentElements.length;



  

  return (
    
    <section 
  
      className="mx-auto flex flex-col gap-[2vw] w-[40%]   pb-[10px]"
    >
      
       {contentElements?.map((image,index) => (
                  

                        <div
                        key={image._key || `image-${index}`} // 使用 _key 或索引作为 key
                        className="relative" // 'aspect-square' 保持每个格子的宽高比为1:1
                      >
                        <Image
                          src={image?.asset ? urlFor(image).width(600).url() : ''} // 添加安全检查
                          alt={`图片`}
                          width={600}
                          height={600}
                          layout="responsive"
                          className="rounded-sm"
                        />
                      </div>
                        
                        
            
                    
               
                ))}
    
    </section>
  );
}