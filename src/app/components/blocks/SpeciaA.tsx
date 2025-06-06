import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import { Plaintextblock } from "./PlainTextblock"


type SpecialAProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "specialA" }
>;

export function SpecialA({texta,textb,textc,ratio}:SpecialAProps) {

    
    const imageFlexVal = ratio?.textab ?? 1;
    const textFlexVal = ratio?.textc ?? 1;


    

  return (
    <section 
    
    className="mx-auto text-xl flex flex-col gap-2 md:flex-row  md:gap-12 lg:gap-20 w-[80%]    pb-5">

        <div 
        style={{
            flex: imageFlexVal
        }}
        className="flex flex-row  justify-between"
        >
            <h2>{texta}</h2>
            <h2>{textb}</h2>
            
        </div>

        <div
        style={{
            flex: textFlexVal
        }}
        className="text-black/40 md:text-black "
        >
            <h2>{textc}</h2>
        </div>

            
         
    </section>
  );
}