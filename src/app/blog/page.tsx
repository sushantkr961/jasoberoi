"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link component
import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import parse from 'html-react-parser';
import Card from "@/components/Blog/Card";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl:string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/admin/blog");
        setPosts(response.data);
        
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section>
      <PageHeading
        heading="Blog"
        imageSrc="assets/ourculture/asset 1.jpeg"
      />

      <Container className="m-auto flex flex-col items-center px-2 py-14 md:py-24 ">
        <div className="mx-auto -4 sm:px-6 lg:px-8 font-poppins">
          <div className="grid md:grid-cols-2 lg:grid-cols-3   gap-y-8 lg:gap-y-8  lg:justify-between gap-4">
            {[
              {
                imgSrc: "https://pagedone.io/asset/uploads/1696244317.png",
                date: "Jan 01, 2023",
                title: "Clever ways to invest in product to organize your portfolio",
                description: "Discover smart investment strategies to streamline and organize your portfolio..",
              },
              {
                imgSrc: "https://pagedone.io/asset/uploads/1696244340.png",
                date: "Feb 01, 2023",
                title: "How to grow your profit through systematic investment with us",
                description: "Unlock the power of systematic investment with us and watch your profits soar. Our..",
              },
              {
                imgSrc: "https://pagedone.io/asset/uploads/1696244356.png",
                date: "Mar 01, 20233",
                title: "How to analyze every holdings of your portfolio",
                description: "Our comprehensive guide will equip you with the tools and insights needed to..",
              },
            ].map((blog, index) => (
              <div key={index} className="group w-full rounded-md overflow-hidden">
                <div className="flex items-center  relative z-0  md:min-h-[300px] bg-red-500">
                  <img src={blog.imgSrc} alt="blogs tailwind section" className="bg-gray-500  h-full md:min-h-[300px] object-cover w-full rounded-none" />
                  {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="py-4 lg:py-6 transition-all duration-300 group-hover:bg-gray-50">
                  <span className="text-[#C1A468] font-medium mb-3 block">{blog.date}</span>
                  <h4 className="text-xl text-gray-900 font-medium text-[16px] mb-3">{blog.title}</h4>
                  <p className="text-[#636363] mb-2 text-[15px]">{blog.description}</p>
                  <a href="" className="cursor-pointer text-[15px]  text-[#C1A468] font-semibold  ">Read more..</a>
                </div>
              </div>
            ))}

            {
              posts.map((post,index)=>(
                <Card 
                  _id={post._id}
                  content={post.content}
                  createdAt={post.createdAt}
                  imageUrl={post.imageUrl}
                  title={post.title}
                  key={post._id}
                />
              ))
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
 