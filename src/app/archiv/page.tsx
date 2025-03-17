import React from 'react';
import Link from "next/link";
import Activity from '../components/activity/Activity';
import styles from './Archiv.module.css';
import Footer from '../components/footer/footer';
import { defineQuery } from "next-sanity";
import { sanityFetch } from  "../../sanity/lib/live";
import { client }from '../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source)
}


const ACTIVITIES_QUERY = defineQuery(`*[
  _type == "archiv" 
  && defined(slug.current)
  ] {
  _id,
  title,
  slug,
  publishDate,
  "tags": tag[]->TagName,
  description,
  author,
  coverImage,
} | order(publishDate desc)`);

export const dynamic = 'force-dynamic'
export const revalidate = 0;


export default async function Archiv() {
  const { data: archivs } = await sanityFetch({ query: ACTIVITIES_QUERY });
  

  return (
    <div className={styles.archiv}>

{archivs.map((archiv:any) => (
        <Activity
          key={archiv._id}
          content={archiv.title}
          date={new Date(archiv.publishDate).toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          }).replace(/\//g, '-')}
          description={archiv.description}
          artistName={archiv.author}
          tag={archiv.tags || []}  
          imageUrl={urlFor(archiv.coverImage).width(300).url()}
          link={`/archiv/${archiv.slug.current}`}
        />
      ))}
         
      <div className={styles.footer}>
      <Footer />
      </div>
     
    </div>
  );
};




// function Archivs(){
//   const [archivs, setArchivs] = useState<ArchivPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [totalPages, setTotalPages] = useState(1); 
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   // Get the search query and page from the URL params
//   const searchQuery = searchParams.get("search") ?? "";
//   const pageParam = searchParams.get("page");
//   const currentPage = pageParam ? parseInt(pageParam) : 1; // Default to page 1 if not present

//   useEffect(() => {
//     const fetchArchivs = async (page: number) => {
//       try {
//         const { archivs, pagination } = await getAllArchivs(page, searchQuery);
//         setArchivs(archivs); // 映射数据到接口结构;
//         // console.log('Fetched Infos:', archivs);
//         setTotalPages(pagination.pageCount); // Set total pages
//       } catch (error) {
//         setError("Error fetching archivs.");
//         console.error("Error fetching archivs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArchivs(currentPage);
//   }, [currentPage, searchQuery]); // Re-fetch when page or search query changes

//   const handlePageChange = (newPage: number) => {
//     // Update the page parameter in the URL
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set("page", newPage.toString());
//     router.push(`?${newParams.toString()}`);
//     // setLoading(true); // Show loader while fetching
//   };

//   return (
    
//     <div>
//       {/* {loading && (
//         <div className="w-full flex items-center justify-center">
//           <Loader />
//         </div>
//       )} */}
//       {error && <p>{error}</p>}

//       {!loading && !error && (
//         <>
//           <div className={styles.archiv}>
//             {archivs.length > 0 ? (
//               archivs.map((archiv) => (

//                 <div
//                   key={archiv.id}
//                 >
//         <Activity
//           key={archiv.id}
//           content={archiv.title}
//           date={archiv.publishDate}
//           description={archiv.description}
//           artistName={archiv.artistName}
//           tag={`tag`}
//           imageUrl={archiv.cover}
//           link={`/archivs/${archiv.slug}`}
//         />

//         </div>


//               ))
//             ) : (
//               <p>No archiv available at the moment.</p>
//             )}

//       <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange} // Update page when pagination changes
//           />




// <div className={styles.footer}>
//       <Footer />
//        </div>
//           </div>

//           {/* Pagination Controls */}
         
//         </>
//       )}

//     </div>
    
//   );
// }


// export default function Archiv() {
//   return (
//     <Suspense >
//       <Archivs />
//     </Suspense>
//     )
  
// }



// const activities = [
//   {
//     content: "Forgotten Fantasy is located at Shanghai",
//     date: "24-03-14",
//     description: "Shanghai, July 2052 - The city of Shanghai is gearing up for an enchanting spectacle as the much-anticipated event, ‘Luna Luna: Forgotten Fantasy,’ prepares to cast its spell on the city's vibrant cultural scene. Slated for July 2052, this immersive event promises to transport attendees to a realm of forgotten myths and timeless tales, all within the bustling metropolis of Shanghai.",
//     artistName: "Luna Luna",
//     tag: "Tag",
//     imageUrl: "/image/archiv/luna Luna/5bb40e9e-c896-42eb-a551-9971a9ad5f98-wm202306luna01.jpg",
//     link: "/archiv/forgotten-fantasy"
//   },
//   {
//     content: "Art to the Horizon",
//     date: "24-05-10",
//     description: "MIR Gallery, an acclaimed international art gallery celebrated for its diverse and thought-provoking collection, is excited to announce an exclusive art sharing event titled 'Horizons of Art,' to be held at the breathtaking Mountain Summit venue. This event is designed to unite art aficionados, collectors, and creators from across the globe in a celebration of the intersection of art and the natural world.",
//     artistName: "Artist's Name 2",
//     tag: "Tag 2",
//     imageUrl: "/image/archiv/Art to the Horizon/LitFest22_Motivmathis_beutel_rgb-cut_q.jpg",
//     link: "/archiv/art-to-the-horizon"
//   },
//   {
//     content: "De Paprikabrug",
//     date: "24-05-10",
//     description: "Normally ceramicist Wietske van Leeuwen makes bowls and pots with lids. She does not use rigid walls. Van Leeuwen stacks the same shapes on top of each other. For example, she uses shells, strips of hogweed or pears. She makes dozens of clay prints of these, which she places on top of each other. The result is a sumptuous, baroque form with a careful finish. ",
//     artistName: "Wietske van Leeuwen",
//     tag: "Tag 2",
//     imageUrl: "/image/archiv/De Paprikabrug/IMG_2164-1536x1152.jpg",
//     link: "/archiv/woven-form"
//   },
//   {
//     content: "WOVEN FORMS",
//     date: "24-05-10",
//     description: "Woven Forms brings the craft of weaving into the third dimension. It shows the development of fully-woven sculptural textile-forms created on a Jacquard loom. These abstract objects were achieved by embedding form-giving mechanisms, such as multi-layering techniques and heat-reactive shrinking yarn. Sewing was not needed to create these woven objects. Different expressions were developed focusing on color and texture influencing the form outcomes. ",
//     artistName: "Artist's Name 3",
//     tag: "Tag 2",
//     imageUrl: "/image/archiv/Woven-Forms/Woven-Forms_Leonie-Burkhardt_photo-credit-Daniela-Ferro_2.webp",
//     link: "/archiv/fogotten-fantasy"
//   },
//   {
//     content: "The Dreamer: Stories from another world",
//     date: "24-05-10",
//     description: "The show includes not just archive images but artworks and sculptures specifically designed as tribute to China and the great Chinese tradition. ",
//     artistName: "Emiliano Ponzi",
//     tag: "Tag 2",
//     imageUrl: "/image/archiv/The Dreamer/4dc83374a3544f8899b3ab125d6b50e9.jpg",
//     link: "/archiv/fogotten-fantasy"
//   },
//   {
//     content: "Tips and Dates Where to go at the weekend?",
//     date: "24-05-10",
//     description: "Cultural experiences are a wonderful way to enrich your knowledge and understanding of the world. Here's how you can expand on the idea of visiting a city known for its museums, art galleries, or historical sites:",
//     artistName: "Artist's Name 4",
//     tag: "Tag 2",
//     imageUrl: "/image/archiv/Where to go at the weekend/016c55608e850511013e3b7d36d17b.jpg@1280w_1l_2o_100sh.jpg",
//     link: "/archiv/fogotten-fantasy"
//   }
  
// ];