"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Page = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // 假设从 Strapi 获取数据
    const fetchData = async () => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/archivs/fgpiu4ztbb7zfy8i09mbbvr7`,           
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
         }}
        );
      const data = await response.data.data;
      setContent(data.Content); // 假设 `content` 包含了 markdown 格式的内容
      console.log('API Response:', data.Content);
    }catch (err) {
          console.log(err);
         }
      };

      fetchData();
    }, []);


  return (
    <div className="content-container">
      {/* 使用 react-markdown 渲染 markdown */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Page;
