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
    
    className={`mx-auto flex  w-[80%] gap-8 md:gap-12 lg:gap-20 pb-5 ${layout === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        {image?(
            <div
              className="relative"
              style={{ flex: `${imageFlexVal} ${imageFlexVal} 0%` }}
            >
            <Image
              src={urlFor(image).url()}
              alt={ ""}
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            
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