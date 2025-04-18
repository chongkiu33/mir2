import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";

type ImageBlockProps = NonNullable<
Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "columimages" }
>["colums"]
>[number];

export function ImageBlock({ image, alt, caption, colstart, colend }: ImageBlockProps) {
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

      const startCol = colstart || 2;
    const endCol = colend || 10;

    return (
      
        <div 
          className={`${colStartClasses[startCol]} ${colEndClasses[endCol]}`}
        >
          {image && (
            <div className="relative w-full">
              <Image
                src={urlFor(image).url()}
                alt={alt || ""}
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
              {caption && (
                <p className="mt-2 text-sm text-gray-600">{caption}</p>
              )}
            </div>
          )}
        </div>
    
    );
}