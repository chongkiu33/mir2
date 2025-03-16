import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "./lib/image";
import { PortableText } from "@portabletext/react";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,

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
  },
};