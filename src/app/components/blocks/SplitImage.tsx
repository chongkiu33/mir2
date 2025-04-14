import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { stegaClean } from "next-sanity";

type SplitImageProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "splitImage" }
>;

export function SplitImage({  imageLeft, imageRight, orientation }: SplitImageProps) {
  return (
    <section
      className="container mx-auto flex gap-10 py-16 data-[orientation='imageRight']:flex-row-reverse"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      {imageLeft ? (
        <Image
          className="rounded-xl w-1/2 h-auto"
          src={urlFor(imageLeft).width(800).height(600).url()}
          width={800}
          height={600}
          alt=""
        />
      ) : null}
       {imageRight ? (
        <Image
          className="rounded-xl w-1/2 h-auto"
          src={urlFor(imageRight).width(800).height(600).url()}
          width={800}
          height={600}
          alt=""
        />
      ) : null}
      {imageRight ? (
        <Image
          className="rounded-xl w-1/2 h-auto"
          src={urlFor(imageRight).width(800).height(600).url()}
          width={800}
          height={600}
          alt=""
        />
      ) : null}
      
    
    </section>
  );
}