
import { SplitImage } from "./blocks/SplitImage";
import { Plaintext } from "./blocks/Plaintext";
import { Plain } from "./blocks/Plain";
import { Videoblock } from "./blocks/Videoblock";
import { ARTICLE_QUERYResult } from "../../sanity/types";
import { Columimages } from "./blocks/Columimages";
import { Carousel } from "./blocks/Carousel";
import { FourtoSiximages } from "./blocks/FourtoSixImages"
import { Tripleimage } from "./blocks/Tripleimage";
import { UnAlignImages } from "./blocks/UnAlignImages"

type PageBuilderProps = {
  content: NonNullable<ARTICLE_QUERYResult>["content2"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    // <main >
    <>
      {content.map((block) => {
        switch (block._type) {
          
          case "splitImage":
            return <SplitImage key={block._key} {...block} />;
         
        case "plaintext":
            return <Plaintext key={block._key} {...block} />;
        case "plain":
            return <Plain key={block._key} {...block} />;
        case "videoblock":
            return <Videoblock key={block._key} {...block} />;
        case "columimages":
            return <Columimages key={block._key} {...block} />;
        case "carousel":
            return <Carousel key={block._key} {...block} />;

        case "gridimages":
            return  <FourtoSiximages key={block._key} {...block} />;

        case "tripeimage":
            return <Tripleimage key={block._key} {...block}  />

        case "unalignimage":
          return <UnAlignImages key={block._key} {...block} />
            
          default:
            
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}
      </>
    
  );
}