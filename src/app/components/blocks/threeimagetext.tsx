import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { PortableText } from "next-sanity";

import { components } from "@/sanity/portableTextComponents";


type ThreeimagetextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "threeimagetext" }
>;

export function Threeimagetext({imageLeft,text,imageRight}: ThreeimagetextProps) {

  
   
  return (
    <section 
    
    className={`mx-auto flex  w-[80%] flex-col md:flex-row gap-8 lg:gap-8 pb-5 `}>
        {imageLeft?(
            <div
              className="relative flex-1"
              
            >
            <Image
              src={urlFor(imageLeft).url()}
              alt={""}
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            
          </div>

        ):null}
        


        <div
          className="flex-1"
          
        >
          <div className=" text-base lg:text-lg ">
            {text ? <PortableText  value={text} components={components}  /> : null}
          </div>
          </div>

          {imageRight?(
            <div
              className="relative flex-1"
              
            >
            <Image
              src={urlFor(imageRight).url()}
              alt={ ""}
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
            
          </div>

        ):null}

         
    </section>
  );
}