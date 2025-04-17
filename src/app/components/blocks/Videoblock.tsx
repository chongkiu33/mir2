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

    
    return (
      <section className=" mx-auto grid grid-cols-10  py-5">
        <div className="col-start-2 col-end-10" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
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