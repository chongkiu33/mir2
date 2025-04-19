import { PortableText } from "next-sanity";
import Image from "next/image";
import { components } from "@/sanity/portableTextComponents";

import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";

type PlaintextProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "plaintext" }
>;


export function Plaintext({  text  }: PlaintextProps) {
    return (
      <section className=" mx-auto grid grid-cols-10  py-5">
        
          <div className={`col-start-2 col-end-10  h-full object-cover`}>
          <div className="prose-lg lg:prose-xl  ">
            {text ? <PortableText  value={text} components={components}  /> : null}
          </div>
          </div>
 
      </section>
    );
  }