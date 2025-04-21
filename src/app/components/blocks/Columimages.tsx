
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { ImageBlock } from "./ImageBlock";
import { TextBlock } from "./TextBlock";

type ColumimagesProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "columimages" }
>;

export function Columimages({ colums }: ColumimagesProps) {
  if (!Array.isArray(colums)) {
    return null;
  }

  return (
    <section className="mx-auto grid grid-cols-10 gap-3 pb-10 ">
      {colums.map((block) => {
        switch (block._type) {
          
        case "imageBlock":
            return <ImageBlock key={block._key} {...block} />;
        case "textBlock":
            return <TextBlock key={block._key} {...block} />;         
        default:     
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}
    
    </section>
  );
}