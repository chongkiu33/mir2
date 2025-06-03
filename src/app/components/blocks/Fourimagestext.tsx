import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { PortableText } from "next-sanity";

import { components } from "@/sanity/portableTextComponents";


type FourimagetextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "fourimagestext" }
>;

export function Fourimagetext({images,text}: FourimagetextProps) {


   
  return (
    <section 
    
    className={`mx-auto h-auto flex flex-col md:flex-row justify-center items-center w-[80%] gap-5 md:gap-12 lg:gap-20 pb-5 `}>
       {images && images.length>0  && (
        <div className="w-full  flex-auto md:flex-[4_1_0%] grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              image?.asset && ( // 确保 image 和 image.asset 存在
                <div key={image._key || index} className="relative aspect-[4/3] bg-gray-100 rounded-lg">
                  <Image
                    src={urlFor(image).width(900).url()}
                    alt={ `image-${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />
            </div>
              )
            ))}
        </div>
       )}
        


        <div
          className="w-full flex-auto md:flex-[3_1_0%]"
         
        >
          <div className=" text-base lg:text-lg ">
            {text ? <PortableText  value={text} components={components}  /> : null}
          </div>
          </div>

         
    </section>
  );
}