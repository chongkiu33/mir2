import axios from 'axios';
import { ArchivPost } from "./types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // 配置基础 API URL
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // 配置公共请求头
  },
});

export const getPostBySlug = async (slug: string) => {
    try {
      const response = await api.get(
        `api/blogs?filters[slug]=${slug}&populate=*`
      ); // Fetch a single blog post using the slug parameter
      if (response.data.data.length > 0) {
        // If post exists
        return response.data.data[0]; // Return the post data
      }
      throw new Error("Post not found.");
    } catch (error) {
      console.error("Error fetching post:", error);
      throw new Error("Server error");
    }
  };
  

export default api;