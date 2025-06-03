
import { ARTICLE_QUERYResult } from "../../../sanity/types";
import { ImageBlock } from "./ImageBlock";
import { TextBlock } from "./TextBlock";
import { Carousel } from "./Carousel";
import { FourtoSiximages } from "./FourtoSixImages"
import { Tripleimage } from "./Tripleimage";
import { UnAlignImages } from "./UnAlignImages"
import { TwomoreImage } from "./Twomoreimages"
import { SpecialA } from "./SpeciaA"
import { Twoimagetext } from "./Twoimagetext"
import { Threeimagetext } from "./threeimagetext"
import { Fourimagetext } from "./Fourimagestext"
import { CarouselwithText } from "./CarouselwithText"

type CombineimagesProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "combineimages" }
>;

export function Combineimages({ colums }: CombineimagesProps) {
  if (!Array.isArray(colums)) {
    return null;
  }

  return (
    <section className="mx-auto w-[100%] gap-[2vw] py-0 ">

       
      {colums.map((block) => {
        switch (block._type) {

        
          
            case "carousel":
                return <Carousel key={block._key} {...block} />;
    
            case "gridimages":
                return  <FourtoSiximages key={block._key} {...block} />;
    
            case "tripeimage":
                return <Tripleimage key={block._key} {...block}  />;
    
            case "unalignimage":
              return <UnAlignImages key={block._key} {...block} />;

            case "twotothreeimages":
               return <TwomoreImage key={block._key} {...block} />;

            case "specialA":
              return <SpecialA key={block._key} {...block} />;
            case "twoimagetext":
              return <Twoimagetext key={block._key} {...block} />;
            case "threeimagetext":
              return <Threeimagetext key={block._key} {...block} />;
            case "fourimagestext":
              return <Fourimagetext key={block._key} {...block} />;
            case "carouselWText":
              return <CarouselwithText key={block._key} {...block} />;
            
        default:     
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}
    
    </section>
  );
}