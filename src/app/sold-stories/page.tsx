"use client"

import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Loader from "@/components/Loader/Loader";
import Card from "@/components/SoldStoris/Card";
import axios from "axios";
import { useEffect, useState } from "react";

interface SoldStories {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  singleImage: string;
}

const SoldStoriesBlog = () => {
  const [soldStories, setSoldStories] = useState<SoldStories[]>([]);
  const [loader, setLoader] = useState<boolean>();
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 8;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const response = await axios.get("/api/admin/soldstories");
        setSoldStories(response.data.soldStories);
        setLoader(false);
      } catch (error) {
        console.error("Failed to fetch sold stories:", error);
        setLoader(false);
      }
    };
    fetchPosts();
  }, []);
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const displayedProperties = soldStories.slice(0, page * itemsPerPage);

  if (loader) {
    return <div className="overflow-hidden">
      <Loader />
    </div>
  }
  return (
    <section>
      <PageHeading
        heading="Sold Stories"
        imageSrc="assets/ourculture/asset 1.webp"
      />

      <Container className="m-auto flex flex-col items-center px-2 py-14 md:py-24 ">
        <div className="mx-auto -4 sm:px-6 lg:px-8 font-poppins">
          <div className="grid md:grid-cols-2 lg:grid-cols-3   gap-y-8 lg:gap-y-8  lg:justify-between gap-4">
            {
              displayedProperties?.map((soldStories, index) => (
                <Card
                  _id={soldStories._id}
                  content={soldStories.content}
                  createdAt={soldStories.createdAt}
                  imageUrl={soldStories.singleImage}
                  title={soldStories.title}
                  key={soldStories._id}
                />
              ))
            }
          </div>

          {soldStories.length > displayedProperties.length && (
            <div className="w-full flex justify-center ">
              <button
                className="mt-8 py-2 px-4   border  rounded-md bg-black text-white hover:bg-gray-800"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default SoldStoriesBlog;
