"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    isAdmin: false,
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Preve
    try {
      setLoading(true);
      const response = await axios.post("/api/signup", user);

      console.log(response);

      // console.log("Signup success", response.data);
      // console.log(88888, router);
      // router.push("/login");
    } catch (error: any) {
      // console.log("Signup failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Users
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSignup}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  checked={user.isAdmin}
                  onChange={() => setUser({ ...user, isAdmin: !user.isAdmin })}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Mark as Admin
                </label>
              </div>
            </div>
            <div>
              <button
                disabled={loading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? "Loading" : "Add User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}