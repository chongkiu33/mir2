import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "./lib/image";
import { PortableText } from "@portabletext/react";

export const components: PortableTextComponents = {
  types: {
    image: (props) => {
      if (!props.value?.asset) {
        console.warn(
          "Sanity Image: Asset data is missing for image, cannot render. Value:",
          props.value
        );
        return null;
      }

      return (
        <Image
        style={{marginBottom: '20px'}}
          className="mx-auto rounded-lg  shadow-md"
          src={urlFor(props.value)
            .width(1000)   
            .quality(80)
            .auto("format")
            .url()}
          alt={props.value.alt || " "}
          width={600}
          height={600}
          loading="lazy"
          layout="responsive"
        />
      );
    },

    video: (props) => {
      // 从YouTube URL中提取视频ID
      const getYouTubeVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      if (!props.value?.url) return null;
      
      const videoId = getYouTubeVideoId(props.value.url);
      if (!videoId) return <p>无效的YouTube链接</p>;
      
      return (
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' ,marginBottom: '20px',marginTop: '20px'}}>
    <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      
    </div>
      );
    },

    columns: (props) => {
      if (!props.value?.columns || !Array.isArray(props.value.columns)) {
        return null;
      }
      
      // 获取列数
      const columnCount = props.value.columnCount || 'two'; // 默认为两列
      
      // 确保有明确的50px间距
      return (
        <div className="flex flex-col md:flex-row w-full my-8" style={{ gap: '20px' }}>
          {props.value.columns.map((column:any) => (
            <div key={column._key} className="flex-1 w-full">
              {column.content && (
                <PortableText
                  value={column.content}
                  components={components}
                />
              )}
            </div>
          ))}
        </div>
      );
    },

    ColumnImages: (props) => {
      if (!props.value?.images || !Array.isArray(props.value.images) || props.value.images.length === 0) {
        return null;
      }

      const { images, spacing, imageWidthRatio } = props.value;
      const imageCount = images.length;

      // 根据 spacing 设置间距
      // const gapStyle = spacing === 'wide' ? { gap: '10vw' } : { gap: '1rem' }; // 1rem 约等于 gap-4

      // 动态计算图片宽度
      const getImageWidthStyle = (index: number) => {
        if (imageCount === 2 && imageWidthRatio && imageWidthRatio.left && imageWidthRatio.right) {
          const totalRatio = imageWidthRatio.left + imageWidthRatio.right;
          if (index === 0) {
            return { flex: `${imageWidthRatio.left / totalRatio}` };
          }
          if (index === 1) {
            return { flex: `${imageWidthRatio.right / totalRatio}` };
          }
        }
        // 对于单张或三张图片，或者没有比例设置时，平均分配
        return { flex: `1 1 ${100 / imageCount}%` };
      };

      return (
        <div
          className={`flex flex-row my-8  gap-4 ${spacing === 'wide' ? 'md:gap-[10vw]' : ''}`}
        >
          {images.map((image: any, index: number) => (
            image && image.asset ? (
              <div key={image._key || index} className="flex-1" style={getImageWidthStyle(index)}>
                <Image
                  className="w-full h-full object-cover "
                  src={urlFor(image)
                    .quality(80)
                    .auto("format")
                    .url()}
                  alt={image?.alt || ""}
                  width={600} // 可以根据需要调整或移除，如果父容器已控制大小
                  height={400} // 可以根据需要调整或移除
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 响应式尺寸提示
                />
              </div>
            ) : null
          ))}
        </div>
      );
    },
  },
  // 新增 block 类型渲染器来自定义块级元素的渲染
  block: {
    
    normal: ({ value, children }) => {
   
      const hasTextContent = value.children.some(
        (child: any) => child._type === 'span' && typeof child.text === 'string' && child.text.trim() !== ''
      );

      if (!hasTextContent) {
        return <p style={{ maxWidth: '900px', margin: '0 auto' }}><br /></p>;
      }
      
      return <p className="font-oppoheavy text-[14px] leading-[28px] md:text-[14px]  " style={{ textAlign: "justify", margin: '0 auto' }}>{children}</p>;
    },
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-5" style={{  margin: '0 auto' }}>{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl  font-bold mb-5" style={{  margin: '0 auto' }}>{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl  font-bold mb-5" style={{ margin: '0 auto' }}>{children}</h3>,
    
   
  },
  
 
  marks: {
   
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,

 
    left: ({ children }) => <div style={{ textAlign: "left" }}>{children}</div>,

    center: ({ children }) => <div style={{ textAlign: "center" }}>{children}</div>,

    right: ({ children }) => <div style={{ textAlign: "right" }}>{children}</div>,
  },
};