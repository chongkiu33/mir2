
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
import { Combineimages } from "./blocks/CombineImages"
import { TwomoreImage } from "./blocks/Twomoreimages"
import {Twoimagetext } from "./blocks/Twoimagetext"
import {Threeimagetext } from "./blocks/threeimagetext"
import { Columntext } from "./blocks/Columntext"
import { NarrowContent } from "./blocks/NarrowContent"
import { Singleimage } from "./blocks/Singleimage"
import { CarouselwithText } from "./blocks/CarouselwithText"
import { SpecialA } from "./blocks/SpeciaA"
import { Fourimagetext } from "./blocks/Fourimagestext"
import { ImgGalleryblock } from "./blocks/ImgGalleryblock"


type PageBuilderProps = {
  content: NonNullable<ARTICLE_QUERYResult>["content2"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    // <main >
    <div className="flex flex-col gap-20 md:gap-32 pb-24 ">
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
            return <Tripleimage key={block._key} {...block}  />;

        case "unalignimage":
          return <UnAlignImages key={block._key} {...block} />;

        case "combineimages":
          return <Combineimages key={block._key} {...block}  />;
        case "twotothreeimages":
          return <TwomoreImage key={block._key} {...block}  />;

        case "twoimagetext":
          return <Twoimagetext key={block._key} {...block}  />;
        
        case "threeimagetext":
          return <Threeimagetext key={block._key} {...block}  />;

        case "columntext":
          return <Columntext key={block._key} {...block} />;

        case "narrowcontent":
          return <NarrowContent key={block._key} {...block}  />;

        case "singleimage":
          return <Singleimage key={block._key} {...block}  />;

        case "carouselWText":
          return <CarouselwithText key={block._key} {...block}  />;

        case "specialA":
          return <SpecialA key={block._key} {...block}  />;
        
        case "fourimagestext":
          return <Fourimagetext key={block._key} {...block}  />;

        case "imggallery":
          return <ImgGalleryblock key={block._key} {...block}  />;
            
        default:
            
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}
      </div>
    
  );
}