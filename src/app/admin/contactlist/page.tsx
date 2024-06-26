"use client";
import Dialog from "@/components/Admin/Dialog";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface User {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
}
interface Contact {

    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    lookingFor: string;
    additionalInfo: string;
    createdAt: string; // ISO 8601 format string
    updatedAt: string; // ISO 8601 format string
    __v: number; // Mongoose version key
}

const page = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = useState<boolean>(false);
    const [deleteContactId, setDeleteContactId] = useState("");

    const [totalCount, setTotalCount] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const postsPerPage =10;

    useEffect(() => {
        fetchPosts();
    }, [currentPage]); //

    const fetchPosts = async () => {
        try {

            const response = await axios.get(
                `/api/admin/contact?page=${currentPage}&limit=${postsPerPage}`
            );
            const { contacts, totalPages, totalCount } = response.data;

            setContacts(contacts);
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

    // Delete User
    const deleteUser = async (userId: any) => {
        try {
            // alert(postId);
            const response = await axios.delete(`/api/admin/contact?id=${userId}`);
            // console.log("Post deleted successfully:", response.data);
            fetchPosts();
        } catch (error) {
            console.error("Failed to delete the post:", error);
        }
    };

    // Filter users based on search query
    const filteredContacs = contacts.filter(
        (contact) =>
            contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <section>
            <div>
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                                {/* Table Header */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                            Users
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            delete and view
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <div>
                                                <div className="block">
                                                    <label htmlFor="icon" className="sr-only">
                                                        Search
                                                    </label>
                                                    <div className="relative min-w-72 md:min-w-80">
                                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                                            <svg
                                                                className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
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
                                                                <circle cx="11" cy="11" r="8" />
                                                                <path d="m21 21-4.3-4.3" />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            id="icon"
                                                            name="icon"
                                                            value={searchQuery}
                                                            onChange={(e) => setSearchQuery(e.target.value)}
                                                            className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                            placeholder="Search"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                Contact Form Details
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                {/* End Table Header */}

                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        FirstName
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Phone
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        email
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        lookingFor
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start"></th>
                                            <th scope="col" className="px-6 py-3 text-start"></th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {filteredContacs.map((contactUser) => (
                                            <tr key={contactUser._id}>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                {contactUser.firstName}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                {contactUser.phone}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                {contactUser.email}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="ps-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                {contactUser.lookingFor}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <button
                                                            className="inline-flex items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                                            onClick={() => {
                                                                setDeleteContactId(contactUser._id);
                                                                setOpen(true);
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="size-px whitespace-nowrap">
                                                    <div className="px-6 py-1.5">
                                                        <button
                                                            className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"

                                                        >
                                                            View
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                        {/* Dialog Box Here */}
                                        <Dialog
                                            isOpen={open}
                                            setIsOpen={setOpen}
                                            id={deleteContactId}
                                            handleDelete={deleteUser}
                                        />
                                    </tbody>
                                </table>
                                {/* End Table */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            Showing{" "}
                                            <span className="font-medium">{`${(currentPage - 1) * postsPerPage + 1
                                                }-${Math.min(
                                                    currentPage * postsPerPage,
                                                    totalCount
                                                )}`}</span>{" "}
                                            of{" "}
                                            <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                                {totalCount}
                                            </span>{" "}
                                            results
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button
                                                onClick={handlePrevPage}
                                                disabled={currentPage === 1}
                                                type="button"
                                                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                            >
                                                <svg
                                                    className="flex-shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="m15 18-6-6 6-6" />
                                                </svg>
                                                Prev
                                            </button>

                                            <button
                                                onClick={handleNextPage}
                                                disabled={currentPage === totalPages}
                                                type="button"
                                                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                            >
                                                Next
                                                <svg
                                                    className="flex-shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path d="m9 18 6-6-6-6" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
