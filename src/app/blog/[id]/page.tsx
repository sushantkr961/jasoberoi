"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import truncate from 'html-truncate';
import parse from 'html-react-parser';
import Loader from '@/components/Loader/Loader';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: string;
}


const Post = ({ params }: any) => {
  const [visiblePosts, setVisiblePosts] = useState(2);
  const [copied, setCopied] = useState(false);
  const [visiblePostsMb, setVisiblePostsMb] = useState(2);


  // Function to handle the "Show more" button click
  const handleShowMore = () => {
    // Increase the number of visible posts by 3
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
  };
  const handleShowMoreMb = () => {
    setVisiblePostsMb(prevVisiblePosts => prevVisiblePosts + 3);

  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>({
    imageUrl: "",
    _id: "",
    title: "",
    content: "",
    author: "",
    createdAt: "",
  });

  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setLoader(true);
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/admin/blog`);
        setPosts(response.data.blogs);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    const fetchSinglePost = async () => {
      try {
        const response = await axios.get(`/api/admin/blog/as?id=${params.id}`);
        setPost(response.data);

      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }


    Promise.all([fetchPosts(), fetchSinglePost()]).then(() => {
      setLoader(false);
    });
  }, [params]);

  if (loader) {
    return <Loader />
  }

  return (

    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto font-poppins">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link className="inline-flex items-center gap-x-1.5 text-sm text-[#C1a468] decoration-2 hover:underline " href="/blog" >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                Back to Blog
              </Link>

              <h2 className="text-2xl font- lg:text-4xl font-poppins  lg:leading-10 ">{post?.title}</h2>

              <div className="flex items-center gap-x-5">
                <Link className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200  " href="/blog">
                  Blog
                </Link>
                <p className="text-xs sm:text-sm text-gray-800 ">{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>


              <div className="text-center">
                <figure>
                  <img className="w-full object-cover rounded-md" src={post?.imageUrl} alt="Image Description" />
                </figure>

              </div>
              <div className="text-sm md:text-lg text-gray-800 font-poppins showList" style={
                {
                  listStyle: "initial !important"

                }
              }>
                {
                  parse(post?.content!)
                }
              </div>

              <div className="  lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">

                <div className="flex justify-end items-center gap-x-1.5">
                  <div className="hs-dropdown relative inline-flex">
                    <button

                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 2000);
                      }}

                      type="button" id="blog-article-share-dropdown" className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 ">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" x2="12" y1="2" y2="15" /></svg>
                      Share
                    </button>

                  </div>
                  {copied && (
                    <p className=' z-10 rounded-md bg-slate-100 p-1 *:'>
                      Link copied!
                    </p>
                  )}
                </div>
                <div>
                </div>
              </div>



              {/* Related Post */}
              <div>

                <div className="top-0 start-0 py-8 lg:ps-8">
                  <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-6 mb-5 ">
                    <a className="group grow block" href="">
                      <h5 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 ">
                        Related Post
                      </h5>
                    </a>
                  </div>


                  <div className="sm:hidden space-y-6">

                    {
                      posts.slice(0, visiblePostsMb).map((post, index) => (
                        <Link className="group flex items-center gap-x-6" href="#" key={post._id}>
                          <div className="flex flex-col grow">
                            <span className="text-sm font-bold group-hover:text-[#C1A468]  text-black  ">
                              {post.title}
                            </span>
                            {/* <span className="text-sm text-gray-900 font- text-ellipsis  ">
                              {parse(truncate(post.content,100))}
                            </span> */}
                          </div>
                          <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                            <img className="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description" />
                          </div>
                        </Link>
                      ))
                    }
                    <div>
                      {visiblePostsMb < posts.length && (
                        <div className="col-span-1 lg:col-span-3 flex justify-center">
                          <button
                            className="bg-black text-white font-bold text-sm py-2 px-4 rounded-full mt-4"
                            onClick={handleShowMoreMb}
                          >
                            Show more
                          </button>
                        </div>
                      )}

                    </div>

                  </div>
                </div>
                {/* After Sm */}
                <div className="hidden sm:grid  sm:grid-cols-2  md:grid-cols-3  gap-y-8 lg:gap-y-8  lg:justify-between gap-4">

                  {
                    posts.slice(0, visiblePosts).map((post, index) => (
                      <Link href={`/blog/${post._id}`} className="cursor-pointer text-[12px] md:text-[15px] text-[#C1A468] font-semibold  " key={index}>
                        <div className="group w-full rounded-md cursor-pointer  overflow-hidden">
                          <div className="flex items-center  relative z-0   ">
                            {/* <img alt="blogs tailwind section" className="bg-gray-500  h-full object-cover w-full rounded-none" /> */}
                            <img src="https://pagedone.io/asset/uploads/1696244356.png" alt="blogs tailwind section" className="bg-gray-500  h-full   object-cover w-full rounded-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                          </div>
                          <div className="py-4 lg:py-6 transition-all duration-300 cursor-pointer px-3">
                            <span className="text-[#C1A468] text-sm font-medium mb-3 block">{new Date(post.createdAt).toLocaleDateString()}</span>
                            <h4 className=" text-gray-900 font-medium text-md md:text-xl mb-1 md:mb-3">{truncate(post.title, 20)}</h4>
                            <p className="text-[#636363] mb-1 md:mb-2 text-[14px] md:text-[15px]">{parse(truncate(post.content, 50))}</p>
                            <Link href={`/blog/${post._id}`} className="cursor-pointer text-[12px] md:text-[15px] text-[#C1A468] font-semibold  ">Read more..</Link>
                          </div>
                        </div>
                      </Link>
                    ))
                  }


                </div>
                <div className='hidden sm:block'>
                  {visiblePosts < posts.length && (
                    <div className="col-span-1 lg:col-span-3 flex justify-center">
                      <button
                        className="bg-black text-white font-bold text-sm py-2 px-4 rounded-full mt-4"
                        onClick={handleShowMore}
                      >
                        Show more
                      </button>



                    </div>
                  )}

                </div>
              </div>


              {/* comment  */}
              <div>
                <div>
                  <h5 className="font-medium text-2xl leading-8 text-gray-900 mb-4 md:mb-6">Join The Discussion</h5>

                  <form action="" className='flex flex-col gap-4'>
                    <div className="reply bg-gray-100 rounded-md p-5 border border-solid border-gray-300 w-full">
                      <div className="flex items-center gap-x-9 gap-y-4 flex-col sm:flex-row mb-5">

                        <textarea
                          className="font-medium text-md border-none focus:ring-0 outline-none focus:shadow-none active:outline-none focus:outline-none focus:border-none  active:border-none md:text-lg leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full md:h-28"
                          placeholder="Join The Discussion"
                          style={{ border: 'none !important', outline: 'none !important' }} // Ensur
                        ></textarea>
                      </div>
                    </div>

                    <div className='flex gap-2 flex-col md:flex-row  '>
                      <input
                        className=" bg-gray-100 rounded-md py-1 px-2 border border-solid border-gray-300 font-medium text-sm md:text-md leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full "
                        placeholder="Join The Discussion" />

                      <input
                        className=" bg-gray-100 rounded-md py-1 px-2 border border-solid border-gray-300 font-medium text-sm md:text-md leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full "
                        placeholder="Join The Discussion" />

                    </div>


                    <button
                      type="submit"
                      className="bg-black md:max-w-[160px] rounded-md py-2 px-10  font-poppins text-white"
                    >
                      Join
                    </button>
                  </form>
                </div>

              </div>

            </div>
          </div>
        </div>


        {/* Right Section */}
        <div className=" hidden lg:block lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent ">
          <div className="sticky top-0 start-0 py-8 lg:ps-8">
            <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-6 mb-5 ">
              <h5 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 ">
                Recent Post
              </h5>
            </div>


            <div className="space-y-6">
              {
                posts.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Sort posts by createdAt in descending order
                  .slice(0, 5).map((post, index) => (
                    <Link key={post._id} className="group flex items-center gap-x-6" href={`/blog/${post._id}`}>
                      <div className="grow">
                        <span className="text-sm font-bold group-hover:text-[#C1A468]  text-black  ">
                          {post?.title}
                        </span>
                      </div>
                      <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                        <img className="size-full absolute top-0 start-0 object-cover  rounded-lg" src={post?.imageUrl} alt="Image Description" />
                      </div>
                    </Link>

                  ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
