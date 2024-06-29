"use client"
import dynamic from "next/dynamic";
import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { stripHtml } from "string-strip-html";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: string;
}

const page = ({ params }: any) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<Post>({
    imageUrl: "",
    _id: "",
    title: "",
    content: "",
    author: "",
    createdAt: "",
  });
  const router = useRouter();
  const editor = useRef<any>(null);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await axios.get(`/api/admin/blog/single?id=${params.id}`);
        const postData: Post = response.data;

        // Update state with fetched data
        setPost(postData);
        setTitle(postData.title);
        setContent(postData.content);
        setImageUrl(postData.imageUrl);
        // Assuming other fields like author, createdAt need to be set if required
      } catch (error) {

        router.push("/admin/blogs");
        console.error("Failed to fetch post:", error);
      }
    };

    if (params.id) {
      fetchSinglePost();
    }
  }, [params.id]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0])); // Set image URL for preview
    } else {
      setImage(null);
      setImageUrl("");
    }
  };

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);

  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (stripHtml(content).result == "") {
      toast.error("Content field is required.");
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("id", params.id);
    if (image) {
      formData.append("file", image);
    }

    try {
      const response = await axios.put(`/api/admin/blog/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data.message);
      router.push("/admin/blogs");
    } catch (error: any) {
      console.error("Error updating blog post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:pb-12 mx-auto shadow-xl rounded-xl  border-gray-100 border-2 ">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div >
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
              Update Blog
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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

                <JoditEditor
                  ref={editor}
                  value={content}
                  config={{ readonly: false, height: "320px" }}
                  onBlur={(newContent) => handleEditorChange(newContent)}
                  onChange={() => { }}
                  className="showList"
                />


                <div className="col-span-full mt-4">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Blog Cover Image
                  </label>
                  <div className="sm:col-span-9">
                    <label htmlFor="file-upload" className="sr-only">
                      Blog Cover Image
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                      accept="image/*"
                      onChange={handleImageChange}
                      name="file-upload"
                    />
                    {imageUrl && (
                      <div className="mt-2">
                        <img src={imageUrl} alt="Selected Image" className="h-40 rounded-lg shadow-md mt-2" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-5 flex justify-center gap-x-2">

          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
            {loading ? "Submitting..." : "Update Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
