"use client";

import React, { useState, FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/login", user);
      const { isAdmin } = response.data;
      // console.log("dddd",isAdmin)

      if (isAdmin) {
        toast.success("Login successful");
        console.log("login success");
        router.push("/admin");
      } else {
        toast.error("You are not authorized to access this page.");
      }
    } catch (error: any) {
      console.error(
        "Login failed",
        error.response ? error.response.data.message : error.message
      );
      toast.error(
        error.response ? error.response.data.message : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
