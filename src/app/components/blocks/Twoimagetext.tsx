import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { PortableText } from "next-sanity";

import { components } from "@/sanity/portableTextComponents";


type TwoimagetextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "twoimagetext" }
>;

export function Twoimagetext({layout,widthRatio,image,text}: TwoimagetextProps) {

    const imageFlexVal = widthRatio?.image ?? 1;
    const textFlexVal = widthRatio?.text ?? 1;
   
  return (
    <section 
    
    className={`mx-auto  flex w-[80%] items-center gap-5 md:gap-12 lg:gap-20 pb-5 flex-col ${layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {image?(
            <div
              className="relative "
              style={{ flex: `${imageFlexVal} ${imageFlexVal} 0%` }}
            >
            <Image
              src={urlFor(image).url()}
              alt={image.alt || ""}
              width={800}
              height={800}
              className="w-full h-auto object-contain rounded-sm"
            />

      {image.alt && (<p className="text-center text-sm text-gray-600 mt-2">{image.alt}</p>)}
            
            
          </div>

        ):null}
        


        <div
          className=""
          style={{ flex: `${textFlexVal} ${textFlexVal} 0%` }}
        >
          <div className=" text-base lg:text-lg ">
            {text ? <PortableText  value={text} components={components}  /> : null}
          </div>
          </div>

         
    </section>
  );
}