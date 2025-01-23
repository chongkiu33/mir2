import api from './api'; 
import { ArchivPost } from './types';

export const getAllArchivs = async (
    page: number = 1,
    searchQuery: string = ""
  ) :Promise<{ archivs: ArchivPost[]; pagination: any }> => {
    try {
      // If search query exists, filter posts based on title
      const searchFilter = searchQuery
        ? `&filters[title][$containsi]=${searchQuery}`
        : ""; // Search filter with the title
      // Fetch posts with pagination and populate the required fields
      const response = await api.get(
        `/archivs?populate=*&pagination[page]=${page}&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_LIMIT}${searchFilter}`
      );
      return {
        archivs: response.data.data.map(mapToArchivPost),
        pagination: response.data.meta.pagination, // Return data and include pagination data
      };
    } catch (error) {
      console.error("Error fetching archivs:", error);
      throw new Error("Server error"); // Error handling
    }
  };
  
  const mapToArchivPost = (item: any): ArchivPost => ({
    ...item.attributes,
    // id: item.id,
    // documentId: item.documentId, // 转换为符合接口定义的字段名
    title: item.ArchivTitle,
    slug: item.ArchivTitle.toLowerCase().replace(/\s+/g, "-"),
    // publishDate: item.publishDate,
    description: item.Description,
    content: item.Content,
    artistName: item.ArtistName,
    cover:item.CoverImage.url,
    tags: item.tags || [], // 确保 tags 是一个数组
  });
  
  export const getArchivsBySlug = async (slug: string) => {
    try {
      const response = await api.get(
        `/archivs?filters[slug]=${slug}&populate=*`
      ); // Fetch a single blog post using the slug parameter
      if (response.data.data.length > 0) {
        // If post exists
        return response.data.data[0]; // Return the post data
      }
      throw new Error("Post not found.");
    } catch (error) {
      console.error("Error fetching archiv:", error);
      throw new Error("Server error");
    }
  };
  
  // Get all archivs Tags
  export const getAllTags = async () => {
    try {
      const response = await api.get("/tags"); // Route to fetch Categories data
      return response.data.data; // Return all categories
    } catch (error) {
      console.error("Error fetching archiv:", error);
      throw new Error("Server error");
    }
  };
