import { PortableText } from "next-sanity";
import Image from "next/image";
import { components } from "@/sanity/portableTextComponents";

import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";

type PlaintextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "plaintext" }
>;


export function Plaintextblock({  text  }: PlaintextProps) {
    return (
      <section className=" mx-auto   py-5">
        
          <div className={`w-full  h-full object-cover`}>
          <div className=" text-base lg:text-lg ">
            {text ? <PortableText  value={text} components={components}  /> : null}
          </div>
          </div>
 
      </section>
    );
  }