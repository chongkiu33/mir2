import { PortableText } from "next-sanity";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";

type PlainProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "plain" }
>;


export function Plain({  arrangement }: PlainProps) {

    if (arrangement === "alignTop") {
        return null;
    }

    if (arrangement === "firstLineMarginTop") {
        return (
          <section className=" mx-auto grid grid-cols-10  py-5">
             <div style={{ height: `calc(14vw - 8rem)` }}></div>  
          </section>
        );
    }
    
    
;
}