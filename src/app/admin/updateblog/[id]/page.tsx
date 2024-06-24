"use client"
import dynamic from "next/dynamic";
import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: string;
}

const UpdateBlog: React.FC<{ params: any }> = ({ params }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [useEditor, setUseEditor] = useState(true);
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

    if(content){
      toast.error("All Field Required");
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
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Update Blog
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className=" col-span-full">
              <div className="hidden flex items-center mb-4">
                <label
                  htmlFor="UseAdvancedEditor"
                  className="block text-sm font-medium leading-6 text-gray-900 mr-10"
                >
                  Use Advanced Editor
                </label>
                <label
                  htmlFor="UseAdvancedEditor"
                  className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-indigo-600"
                >
                  <input
                    type="checkbox"
                    id="UseAdvancedEditor"
                    className="peer sr-only"
                    checked={useEditor}
                    onChange={() => setUseEditor(!useEditor)}
                  />
                  <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
                </label>
              </div>

              <label
                htmlFor="content"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Content
              </label>

              {useEditor ? (
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={{ readonly: false }}
                  onBlur={(newContent) => handleEditorChange(newContent)}
                  onChange={() => { }}
                  className="showList"
                />
              ) : (
                <textarea
                  id="content"
                  name="content"
                  rows={8}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              )}

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
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default UpdateBlog;
