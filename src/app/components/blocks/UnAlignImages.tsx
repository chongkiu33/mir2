"use client"
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type UnAlignImagesProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "unalignimage" }
>;

export function UnAlignImages({ images, align }: UnAlignImagesProps) {
  if (!Array.isArray(images)) {
    return null;
  }

  const alignClass = align === 'top' ? 'items-start' : 'items-end';

  return (
    <section 
      className={`mx-auto flex w-[80%] ${alignClass} gap-[2vw] pb-[2vw] `}
    >
       {images?.map((image, index) => {
            if (image && image.imageFile) {
              // 获取span值，如果不存在则默认为1
              const span = (image.imageFile as any).span || 1;
              return (
                <div
                  key={image._key || `image-${index}`}
                  style={{flex: span}}
                  className="relative w-0 flex-grow"
                >
                  <Image
                    src={urlFor(image.imageFile).width(600).url()}
                    alt={""}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-sm"
                  />
                </div>
              );
            }
            return null;
          })}
    </section>
  );
}