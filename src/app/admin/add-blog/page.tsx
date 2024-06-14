"use client";

import dynamic from "next/dynamic";
import React, {
  useState,
  useRef,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface BlogPostData {
  title: string;
  content: string;
  // author: string;
}

const AddBlogPost: React.FC = () => {
  const [postData, setPostData] = useState<BlogPostData>({
    title: "",
    content: "",
    // author: "",
  });
  const editor = useRef(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleEditorChange = (newContent: string) => {
    setPostData((prevState) => ({ ...prevState, content: newContent }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/admin/blog", postData);
      alert("Blog post added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding blog post:", error);
      alert("Error adding blog post: " + error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add New Blog
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Blog Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="off"
                  className="block w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Add Title"
                  value={postData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Content
              </label>
              <div className="mt-2">
                <JoditEditor
                  ref={editor}
                  value={postData.content}
                  config={{
                    readonly: false,
                  }}
                  onBlur={(newContent) => handleEditorChange(newContent)}
                  onChange={(newContent) => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddBlogPost;
