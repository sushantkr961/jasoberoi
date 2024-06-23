"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

const AdminDashboard: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const getAdminDetails = async () => {
    try {
      const res = await axios.get("/api/admin");
      // console.log(555555, res.data);
      setUser(res.data.data);
    } catch (error) {
      console.error("Error fetching admin details:", error);
    }
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  useEffect(() => {
    if (user && !user.isAdmin) {
      logout();
    }
  }, [user]);

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      // toast.success("Logout successful");
      // console.log("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <section>
      <h5 className="mb-1 text-xl text-center font-medium text-gray-900 dark:text-white mt-10">
        Welcome Admin
      </h5>
      {user ? (
        <div className="w-full max-w-sm bg-white border justify-center align-middle border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-10">
              {user.username}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
            <div className="flex mt-4 md:mt-6">
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default AdminDashboard;
