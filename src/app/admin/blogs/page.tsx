"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

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
        console.log(9999, response);
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg p-2 border-2">
            <img
              alt="Blog Image"
              src={post.imageUrl}
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                10th Oct 2022
              </time>
              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
              </a>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.content),
                }}
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
              />
            </div>
            <div className="flex justify-between space-x-4 sm:space-x-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                Update
              </a>
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                Delete
              </a>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Blog;
