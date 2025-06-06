import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ARTICLE_QUERYResult } from "../../../sanity/types";

type SingleimageProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "singleimage" }
>;

export function Singleimage({ spacing, image,alt }: SingleimageProps) {
   

    

    return (
      
        <div 
          className={`${spacing === "full" ? "w-full" : "w-4/5"} mx-auto` }
        >
          {image && (
            <div className="relative w-full">
              <Image
                src={urlFor(image).url()}
                alt={""}
                width={1000}
                height={1000}
                layout="responsive"
                className="w-full "
              />
              {alt && (
                <p className="mt-2 text-sm text-gray-600">{alt}</p>
              )}
            </div>
          )}
        </div>
    
    );
}