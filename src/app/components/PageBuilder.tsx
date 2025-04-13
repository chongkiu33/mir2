import { Hero } from "./blocks/Hero";
import { Features } from "./blocks/Features";
import { SplitImage } from "./blocks/SplitImage";
import { FAQs } from "./blocks/FAQs";
import { ARTICLE_QUERYResult } from "../../sanity/types";

type PageBuilderProps = {
  content: NonNullable<ARTICLE_QUERYResult>["content2"];
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) {
    return null;
  }

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "hero":
            return <Hero key={block._key} {...block} />;
          case "features":
            return <Features key={block._key} {...block} />;
          case "splitImage":
            return <SplitImage key={block._key} {...block} />;
          case "faqs":
            return <FAQs key={block._key} {...block} />;
          default:
            // 添加类型断言解决 never 类型问题
            return <div key={(block as any)._key}>Block not found: {(block as any)._type}</div>;
        }
      })}
    </main>
  );
}