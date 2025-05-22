
import { SplitImage } from "./blocks/SplitImage";
import { Plaintext } from "./blocks/Plaintext";
import { Plain } from "./blocks/Plain";
import { Videoblock } from "./blocks/Videoblock";
import { ARTICLE_QUERYResult } from "../../sanity/types";
import { Columimages } from "./blocks/Columimages";
import { Carousel } from "./blocks/Carousel";
import { FourtoSiximages } from "./blocks/FourtoSixImages"

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
            
          default:
            
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}
      </>
    /* <div className="mx-auto grid grid-cols-10">
      <div className="flex col-start-2 col-end-10  w-full h-[20vh] pt-[2vh] pb-[10vh] font-oppo-sans-medium text-gray-500 justify-between">
        <div>MIR.DOG</div>
        <div>MIRART@</div>
      </div>
      </div> 
    </main>*/
  );
}