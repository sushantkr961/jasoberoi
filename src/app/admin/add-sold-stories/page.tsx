"use client";

import AddDetails from "@/components/Admin/AddDetails";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface SoldStoriesData {
    title: string;
    images: File[];
    singleImage: File[];
    content: string;
}

interface Attribute {
    key: string;
    value: string;
}

const AddSoldStoriesData = () => {
    const editor = useRef(null);
    const router = useRouter();
    const [useEditor, setUseEditor] = useState(true);
    const [content, setContent] = useState("");
    const [formData, setFormData] = useState<SoldStoriesData>({
        title: "",
        singleImage: [],
        images: [],
        content: "",
    });


    const handleEditorChange = (newContent: string) => {
        setContent(newContent);
      };

    const handleMultipleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.files) {
            setFormData({
                ...formData,
                images: Array.from(event.target.files),
            });
        }
    };


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFormData({
                ...formData,
                singleImage: Array.from(event.target.files),
            });
        }
    };
    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        try {
            const response = await axios.post("/api/admin/soldstories", {
                ...formData,content:content
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response);
            if (response.data.message && response.data.success == true) {
                toast.success(response?.data?.message)
            } else {
                toast.error(response?.data?.message)
            }
            router.push("/admin/sold-stories");
        } catch (error: any) {
            toast.error(error?.response.data.message);
            console.error("Error submitting property:", error);
        }
    };

    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <form onSubmit={handleSumbit}>
                {/* Sold Stories Details Start Here Here */}
                <section
                    id="propertydetails"
                    className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent"
                >
                    <div className="sm:col-span-12">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            Sold Stories Details
                        </h2>
                    </div>

                    {/* Property ID */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="af-submit-application-full-name"
                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                        >
                            Title
                        </label>
                    </div>
                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input
                                id="af-submit-application-full-name"
                                placeholder="Enter Your Property ID"
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                required
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="af-submit-application-resume-cv"
                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                        >   
                            Single Image
                        </label>
                    </div>
                    <div className="sm:col-span-9">
                        <label
                            htmlFor="af-submit-application-resume-cv"
                            className="sr-only"
                        >
                            Choose file
                        </label>
                        <input
                            type="file"
                            name="af-submit-application-resume-cv"
                            id="af-submit-application-resume-cv"
                            className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                            accept="image/*"
                            required
                            onChange={handleImageChange}
                        />
                    </div>



                    <div className="col-span-full">
                        {/* <div className="flex items-center mb-4">
                            <label
                                htmlFor="AcceptConditions"
                                className="block text-sm font-medium leading-6 text-gray-900 mr-10"
                            >
                                Use Advance Editor
                            </label>
                            <label
                                htmlFor="AcceptConditions"
                                className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-indigo-600"
                            >
                                <input
                                    type="checkbox"
                                    id="AcceptConditions"
                                    className="peer sr-only"
                                    checked={useEditor}
                                    onChange={() => setUseEditor(!useEditor)}
                                />

                                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
                            </label>
                        </div> */}

                        <label
                            htmlFor="content"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Content
                        </label>

                        {useEditor ? (
                            <JoditEditor

                                ref={editor}
                                value={content}
                                config={{ readonly: false }}
                                onBlur={(newContent) => handleEditorChange(newContent)}
                                onChange={() => { }}
                                className="showList"

                            />
                        ) : (
                            <textarea
                                id="about"
                                name="content"
                                rows={8}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={content}
                                onChange={(e) =>
                                    handleEditorChange(e.target.value)
                                }
                                required
                            />
                        )}
                    </div>
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="af-submit-application-resume-cv"
                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                        >
                            Gallery Images (Optional)
                        </label>
                    </div>
                    <div className="sm:col-span-9">
                        <label
                            htmlFor="af-submit-application-resume-cv"
                            className="sr-only"
                        >
                            Choose file
                        </label>
                        <input
                            type="file"
                            multiple
                            name="af-submit-application-resume-cv"
                            id="af-submit-application-resume-cv"
                            className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                            accept="image/*"
                            onChange={handleMultipleFileChange}
                        />
                    </div>
                </section>

                {/* Mortgage Calculator End Here */}
                <div className="mt-5 flex justify-center gap-x-2">
                    <button
                        type="submit"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Add Sold Stories
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSoldStoriesData;
