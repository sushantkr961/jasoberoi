"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type Props = {};

const AdminDashboard = (props: Props) => {
  const router = useRouter();

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
    <section>ADmin dashboard</section>
  );
};

export default AdminDashboard;
