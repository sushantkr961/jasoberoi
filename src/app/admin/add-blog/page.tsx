"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface BlogPostData {
  title: string;
  content: string;
  author: string;
}

const AddBlogPost: React.FC = () => {
  const [postData, setPostData] = useState<BlogPostData>({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/admin/blog", postData);

      console.log("Success:", response.data);
      alert("Blog post added successfully!");
      setPostData({ title: "", content: "", author: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding blog post: " + error);
    }
  };

  return (
    <div>
      <h1>Add New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={postData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={postData.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddBlogPost;
