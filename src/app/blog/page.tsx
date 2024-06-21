"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Card from "@/components/Blog/Card";
import Loader from "@/components/Loader/Loader";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loader, setLoader] = useState<boolean>();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const response = await axios.get("/api/admin/blog");
        setPosts(response.data.blogs);
        setLoader(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoader(false);
      }
    };
    fetchPosts();
  }, []);

  if (!loader) {
    return <div className="overflow-hidden">
      <Loader />
    </div>
  }
  return (
    <section>
      <PageHeading
        heading="Blog"
        imageSrc="assets/ourculture/asset 1.jpeg"
      />

      <Container className="m-auto flex flex-col items-center px-2 py-14 md:py-24 ">
        <div className="mx-auto -4 sm:px-6 lg:px-8 font-poppins">
          <div className="grid md:grid-cols-2 lg:grid-cols-3   gap-y-8 lg:gap-y-8  lg:justify-between gap-4">
            {
              posts?.map((post, index) => (
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
