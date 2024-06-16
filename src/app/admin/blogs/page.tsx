"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/admin/blog");
        console.log(4444, response);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <Link key={post._id} href={`/blog/${post._id}`} passHref>
          <div style={{ cursor: "pointer" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Author: {post.author}</small>
            <br />
            <small>
              Posted on: {new Date(post.createdAt).toLocaleDateString()}
            </small>
            <Image
              src={post.imageUrl}
              alt="blog Image"
              width={500}
              height={500}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;