"use client"

import axios from "axios";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/admin/property");
        console.log(9999, response);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return <div>page</div>;
};

export default page;
