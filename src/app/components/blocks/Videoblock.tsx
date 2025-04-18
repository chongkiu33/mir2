import { ARTICLE_QUERYResult } from "../../../sanity/types";

type VideoblockProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "videoblock" }
>;


export function Videoblock({  videolink , videotitle ,colstart ,colend }: VideoblockProps) {
    const getYouTubeVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      if (!videolink) return null;
      
      const videoId = getYouTubeVideoId(videolink);
      if (!videoId) return <p>无效的YouTube链接</p>;

      const colStartClasses: Record<number, string> = {
        1: "col-start-1",
        2: "col-start-2",
        3: "col-start-3",
        4: "col-start-4",
        5: "col-start-5",
        6: "col-start-6",
        7: "col-start-7",
        8: "col-start-8",
        9: "col-start-9",
        10: "col-start-10",
        11: "col-start-11",
      };

      const colEndClasses: Record<number, string> = {
        1: "col-end-1",
        2: "col-end-2",
        3: "col-end-3",
        4: "col-end-4",
        5: "col-end-5",
        6: "col-end-6",
        7: "col-end-7",
        8: "col-end-8",
        9: "col-end-9",
        10: "col-end-10",
        11: "col-end-11",
      };

    const startCol = colstart || 2;
    const endCol = colend || 10;
      

    
    return (
      <section className=" mx-auto grid grid-cols-10  pb-5">
        <div className={`${colStartClasses[startCol]} ${colEndClasses[endCol]}`} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
      <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
        
      </div>
        
       
        
       
       
      </section>
    );
  }