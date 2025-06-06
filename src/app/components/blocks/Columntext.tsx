import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import { Plaintextblock } from "./PlainTextblock"


type ColumntextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "columntext" }
>;

export function Columntext({text, spacing,}:ColumntextProps) {

    
    


      let currentStyle = {};
      if (spacing === 'narrow') {
        currentStyle = { gap: '20px' };
      } else{
        currentStyle  = { gap: '5vw' };
      }

  return (
    <section 
    style={currentStyle} 
    className="mx-auto flex flex-col md:flex-row md:gap-10 w-[80%]   gap-5 pb-5">


{text?.map((block) => {
        switch (block._type) {

        
          
           
    
            case "plaintext":
              return <Plaintextblock key={block._key} {...block} />;
            
            
        default:     
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}

            
         
    </section>
  );
}