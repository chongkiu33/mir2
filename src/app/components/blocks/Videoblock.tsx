import { ARTICLE_QUERYResult } from "../../../sanity/types";

type VideoblockProps = Extract<
  NonNullable<NonNullable<ARTICLE_QUERYResult>["content2"]>[number],
  { _type: "videoblock" }
>;


export function Videoblock({  videolink , videotitle, spacing }: VideoblockProps) {
    console.log("Videoblock props:", { videolink, videotitle });

    const getYouTubeVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      if (!videolink) {
        console.error("Videoblock: videolink prop is missing or empty.");
        return null;
      }
      
      const videoId = getYouTubeVideoId(videolink);
      console.log("Extracted videoId:", videoId);

      if (!videoId) {
        console.error(`Videoblock: Could not extract videoId from link: ${videolink}`);
        return <p>无效的YouTube链接或无法提取视频ID。提供的链接: {videolink}</p>;
      }
      
      

    
    return (
      
        <div className={` relative pb-[56.25%] h-0 overflow-hidden mx-auto bg-black rounded-lg ${spacing === "full" ? "w-full" : "w-4/5"}`}>
         
      <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videotitle || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
        
      </div>
  
       
        
       
       
      
    );
  }