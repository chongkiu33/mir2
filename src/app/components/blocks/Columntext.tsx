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

    
    console.log('Columntext text prop:', text);


      let currentStyle = {};
      if (spacing === 'narrow') {
        currentStyle = { gap: '20px' };
      } else{
        currentStyle  = { gap: '5vw' };
      }

  return (
    <section 
    style={currentStyle} 
    className="mx-auto flex flex-row w-[80%]   gap-10 pb-5">

           
            {/* {text?.map((paragraph, index) => (
                 <div className={`flex-1`} key={index}>
                    <div className="text-base lg:text-lg w-full">
                        {paragraph? <PortableText  value={paragraph} components={components}  /> : null}
                    </div>
                    
                 </div>
                 
            ))} */}

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