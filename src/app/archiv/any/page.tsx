"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


import { getPostBySlug } from "../../lib/api";
import { useRouter } from "next/navigation";
import { ArchivPost } from "../../lib/types";
import Markdown from "react-markdown";

import rehypeRaw from "rehype-raw";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaClipboard } from "react-icons/fa"; // Import your chosen icon

import moment from "moment";
import { toast } from "react-hot-toast";

const handleCopyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!"); // Show toast on error
  } catch (err) {
    console.error("Failed to copy code: ", err);
  }
};


const Page = ({ params }: { params: { slug: string } }) => {

  const { slug } = params;
  const [post, setPost] = useState< ArchivPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        try {
          // Fetch the post using the slug
          const fetchedPost = await getPostBySlug(slug);
          setPost(fetchedPost);
        } catch (err) {
          setError("Error fetching post.");
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };

  

    fetchPost();
  }, [slug]);


  if (loading)
    return (
      <div >
        Loading...
      </div>
    );

    if (error) return <p className="max-w-screen-md mx-auto">Error: {error}</p>;
  if (!post) return <p className="max-w-screen-md mx-auto">No post found.</p>;
  console.log(post);




  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   // 假设从 Strapi 获取数据
  //   const fetchData = async () => {
  //       try{
  //           const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/archivs/fgpiu4ztbb7zfy8i09mbbvr7`,           
  //       {
  //         headers: {
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //        }}
  //       );
  //     const data = await response.data.data;
  //     setContent(data.Content); // 假设 `content` 包含了 markdown 格式的内容
  //     console.log('API Response:', data.Content);
  //   }catch (err) {
  //         console.log(err);
  //        }
  //     };

  //     fetchData();
  //   }, []);


  return (
    <div className="content-container">
      {/* 使用 react-markdown 渲染 markdown */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default Page;
