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
  file?: File;
}

const AddBlogPost: React.FC = () => {
  const [postData, setPostData] = useState<BlogPostData>({
    title: "",
    content: "",
    // author: "",
  });
  const editor = useRef(null);
  // const [file, setFile] = useState<File[]>([]);
  const [file, setFile] = useState<File | null>(null);

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setPostData({ ...postData, [name]: value });
  // };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const selectedFiles = e.target.files;
  //   if (selectedFiles) {
  //     console.log(88888, selectedFiles);
  //     setFile(Array.from(selectedFiles));
  //     // console.log(999999, file);
  //   }
  // };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleEditorChange = (newContent: string) => {
    setPostData((prevState) => ({ ...prevState, content: newContent }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(444, file);

    const formData = new FormData();
    if (file) {
      formData.set("file", file);
      try {
        const response = await axios.post("/api/upload", formData);
        alert("Blog post added successfully!");
        console.log(response.data);
      } catch (error) {
        console.error("Error adding blog post:", error);
        alert("Error adding blog post: " + error);
      }
    } else {
      console.error("No file selected");
      alert("Please select a file before submitting!");
      return;
    }
  };

  // const handleSubmit = async (event: FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("/api/admin/blog", postData);
  //     alert("Blog post added successfully!");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error adding blog post:", error);
  //     alert("Error adding blog post: " + error);
  //   }
  // };
  // const handleSubmit = async (event: FormEvent) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   console.log(999999, postData);
  //   formData.append("title", postData.title);
  //   formData.append("content", postData.content);

  //   console.log(999999, file);
  //   file.forEach((f) => {
  //     formData.append("files", f);
  //   });

  //   // for (let [key, value] of formData.entries()) {
  //   //   console.log(`${key}: ${value}`);
  //   // }

  //   try {
  //     const response = await axios.post("/api/admin/blog", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     alert("Blog post added successfully!");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error adding blog post:", error);
  //     alert("Error adding blog post: " + error);
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="space-y-12">
    //     <div className="border-b border-gray-900/10 pb-12">
    //       <h2 className="text-base font-semibold leading-7 text-gray-900">
    //         Add New Blog
    //       </h2>

    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         <div className="sm:col-span-4">
    //           <label
    //             htmlFor="title"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Blog Title
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="title"
    //               id="title"
    //               autoComplete="off"
    //               className="block w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               placeholder="Add Title"
    //               value={postData.title}
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>
    //         </div>

    //         <div className="col-span-full">
    //           <label
    //             htmlFor="content"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Content
    //           </label>
    //           <div className="mt-2">
    //             <JoditEditor
    //               ref={editor}
    //               value={postData.content}
    //               config={{
    //                 readonly: false,
    //               }}
    //               onBlur={(newContent) => handleEditorChange(newContent)}
    //               onChange={(newContent) => {}}
    //             />
    //           </div>

    //           <div className="mt-2">
    //             <textarea
    //               id="about"
    //               name="content"
    //               rows={3}
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               value={postData.content}
    //               onChange={handleChange}
    //               required
    //             />
    //           </div>

    //           <div className="col-span-full">
    //             <label
    //               htmlFor="cover-photo"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Blog Cover Image
    //             </label>
    //             <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
    //               <div className="text-center">
    //                 <div className="mt-4 flex text-sm leading-6 text-gray-600">
    //                   <label
    //                     htmlFor="file-upload"
    //                     className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
    //                   >
    //                     <span>Upload a file</span>
    //                     <input
    //                       id="file-upload"
    //                       name="file-upload"
    //                       type="file"
    //                       className="sr-only"
    //                       onChange={handleFileChange}
    //                     />
    //                   </label>
    //                   <p className="pl-1">or drag and drop</p>
    //                 </div>
    //                 <p className="text-xs leading-5 text-gray-600">
    //                   PNG, JPG, GIF up to 10MB
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-6 flex items-center justify-end gap-x-6">
    //     <button
    //       type="button"
    //       className="text-sm font-semibold leading-6 text-gray-900"
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       type="submit"
    //       className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //     >
    //       Save
    //     </button>
    //   </div>
    // </form>

    <form onSubmit={handleSubmit}>
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Blog Cover Image
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </form>
  );
};

export default AddBlogPost;
