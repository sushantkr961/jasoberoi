"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

const page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/admin/users");
        console.log(2222, response);
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);
  return <div>page</div>;
};

export default page;
