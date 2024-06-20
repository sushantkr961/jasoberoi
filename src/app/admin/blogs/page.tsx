"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Link from "next/link";

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
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const postsPerPage = 5;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]); //

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`/api/admin/blog?page=${currentPage}&limit=${postsPerPage}`);
      const { blogs, totalPages, totalCount } = response.data;
      setPosts(blogs);
      setTotalPages(totalPages);
      setTotalCount(totalCount);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>

      {/* Pagination */}
      <div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                {/* Table Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                      Blogs
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Add Blog, edit and more.
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <div className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                        Blog
                      </div>

                      <Link
                        href="/admin/add-blog"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        Add Blog
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Table Header */}

                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-800">
                    <tr>
                      <th scope="col" className="ps-6 py-3 text-start">
                        <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                          <input
                            type="checkbox"
                            className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-at-with-checkboxes-main"
                          />
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </th>

                      <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Name
                          </span>
                        </div>
                      </th>


                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Created
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-end"></th>
                      <th scope="col" className="px-6 py-3 text-end"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {posts.map((post) => (
                      <tr key={post._id}>
                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 py-3">
                            <label htmlFor={`post-${post._id}`} className="flex">
                              <input
                                type="checkbox"
                                id={`post-${post._id}`}
                                className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              />
                              <span className="sr-only">Checkbox</span>
                            </label>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <img
                                className="inline-block size-[38px] rounded-full"
                                src={post.imageUrl}
                                alt="Author Image"
                              />
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                  {post.title}
                                </span>
                                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                  {post.author}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                {new Date(post.createdAt).toLocaleDateString()}
                              </span>
                              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                {new Date(post.createdAt).toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="size-px whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button
                              type="button"
                              className="py-1 px-2 rounded text-sm text-white bg-blue-600"
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              className="py-1 px-2 rounded text-sm text-white bg-red-500"
                              onClick={() => setOpen(true)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>

                        <td className="size-px whitespace-nowrap">
                          <div className="flex justify-end">
                            <div className="inline-block relative px-3 py-2 text-sm font-semibold leading-tight text-gray-800 whitespace-nowrap select-none">
                              <a href="#">
                                <i className="fas fa-asterisk"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-asterisk"></i>
                              </a>
                            </div>
                          </div>
                        </td>


                      </tr>
                    ))}
                  </tbody>
                </table>

                <Dialog
                  isOpen={open}
                  setIsOpen={setOpen}
                  postId={1}
                />

                {/* End Table */}
              </div>
              <div className="px-6 py-4 flex justify-between items-center gap-3 border-t border-gray-200 dark:border-neutral-700">
                <div className="flex flex-wrap items-center justify-between sm:space-x-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing
                      <span className="font-medium">{`${(currentPage - 1) * postsPerPage + 1}-${Math.min(
                        currentPage * postsPerPage,
                        totalCount
                      )}`}</span>
                      of
                      <span className="font-medium">{totalCount}</span>results
                    </p>
                  </div>

                  <div>
                    <nav
                      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.707 10.293a1 1 0 010-1.414L9.95 4.636a1 1 0 111.414 1.414L8.828 10l2.536 2.536a1 1 0 11-1.414 1.414l-4.243-4.243z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div className="relative inline-flex items-center px-4 py-2 border text-sm font-medium text-gray-700 bg-white border-gray-300">
                        {currentPage}
                      </div>

                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.293 9.707a1 1 0 010 1.414L10.05 15.364a1 1 0 11-1.414-1.414l2.122-2.122-2.121-2.121a1 1 0 011.414-1.414l4.243 4.243z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Delete Dilog
const Dialog = ({ isOpen, setIsOpen, postId }: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postId: string | number;
}) => {
  const deletePost = async () => {
    try {
      const response = await axios.delete(`/api/admin/blog/${postId}`);
      console.log("Post deleted successfully:", response.data);
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
    setIsOpen(false);

  };

  if (!isOpen) return null;

  return (
    <div className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 size-full fixed top-0 left-0 z-[80] opacity-100 overflow-x-hidden transition-all overflow-y-auto pointer-events-auto">
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3 className="font-bold text-gray-800 dark:text-white">Confirm Delete</h3>
            <button
              type="button"
              className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <p className="mt-1 text-gray-800 dark:text-neutral-400">
              Are you sure you want to delete this post?
            </p>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={deletePost}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Blog;