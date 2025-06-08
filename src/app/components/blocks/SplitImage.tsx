import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";


type SplitImageProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult >["content2"]>[number],
  { _type: "splitImage" }
>;

export function SplitImage({ imageLeft, imageRight, leftSpan, rightSpan }: SplitImageProps) {
    const colEndClasses: Record<number, string> = {
        1: "col-end-1",
        2: "col-end-2",
        3: "col-end-3",
        4: "col-end-4",
        5: "col-end-5",
        6: "col-end-6",
        7: "col-end-7",
        8: "col-end-8",
        9: "col-end-9",
        10: "col-end-10",
        11: "col-end-11"
      };
      
      const colStartClasses: Record<number, string> = {
        1: "col-start-1",
        2: "col-start-2",
        3: "col-start-3",
        4: "col-start-4",
        5: "col-start-5",
        6: "col-start-6",
        7: "col-start-7",
        8: "col-start-8",
        9: "col-start-9",
        10: "col-start-10"
      };
    const leftColEnd = 2 + (leftSpan ?? 0);
    const rightColEnd = leftColEnd + (rightSpan ?? 0);    

  return (
    <section className="mx-auto  grid grid-cols-10 gap-3 pb-5">
      {leftSpan&&imageLeft ? (
        <Image
          className={`col-start-2 ${colEndClasses[leftColEnd]}  h-full object-cover`}
          src={urlFor(imageLeft).width(800).url()}
          width={800}
          height={600}
          alt=""
        />
      ) : null}
      {leftSpan&&imageRight ? (
        <Image
          className={`${colStartClasses[leftColEnd]} ${colEndClasses[rightColEnd]}  h-full object-cover`}
          src={urlFor(imageRight).width(800).url()}
          width={800}
          height={600}
          alt=""
        />
      ) : null}
    </section>
  );
}