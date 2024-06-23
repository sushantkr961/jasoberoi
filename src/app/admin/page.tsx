"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Users {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getAdminDetails = async () => {
    const res = await axios.get("/api/admin");
    console.log(res.data);
    setData(res.data.data._id);
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      // toast.success("Logout successful");
      console.log("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <section>
      ADmin dashboard {data}
      <button
        onClick={getAdminDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        GetUser Details
      </button>
    </section>
  );
};

export default AdminDashboard;
