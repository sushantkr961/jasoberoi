"use client";

import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

interface PropertyData {
  propertyId: string;
  title: string;
  price: string;
  sold: boolean;
  address: {
    fullAddress: string;
    city: string;
    state: string;
    zipOrPostalCode: string;
    country: string;
  };
  zoning: string;
  areaSize: number;
  gmapLink?: string; // Optional
  overview: string;
  yearBuilt: number;
  potentialHome: {
    size: string;
    description: string;
  };
  propertyType: string;
  images: File[];
  propertyDocuments: {
    name: string;
    url: string;
  }[];
  description: string;
}

const page = () => {
  const [formData, setFormData] = useState<PropertyData>({
    propertyId: "",
    title: "",
    price: "",
    sold: false,
    address: {
      fullAddress: "",
      city: "",
      state: "",
      zipOrPostalCode: "",
      country: "",
    },
    zoning: "",
    areaSize: 0,
    overview: "",
    yearBuilt: 0,
    potentialHome: {
      size: "",
      description: "",
    },
    propertyType: "",
    propertyDocuments: [],
    images: [],
    description: "",
    gmapLink: "",
  });

  const [useEditor, setUseEditor] = useState(false);

  const [content, setContent] = useState("");

  const editor = useRef(null);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        images: Array.from(event.target.files),
      });
    }
  };

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(4444, formData);

    try {
      const response = await axios.post("/api/admin/property", formData, {
        headers: {
          // Add any necessary headers, e.g., authorization token
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });

      console.log("Property added successfully:", response);
    } catch (error) {
      console.error("Error submitting property:", error); // Handle errors
    }
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 border-2   dark:bg-neutral-900">
        <form>
          {/* Property Details Start Here Here */}
          <section
            id="propertydetails"
            className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent"
          >
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Property Details
              </h2>
            </div>

            {/* Property ID */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-full-name"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Property ID
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="af-submit-application-full-name"
                  placeholder="Enter Your Property ID"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
                {/* <input
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            /> */}
              </div>
            </div>

            {/* Property Name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-email"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Property Name
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-email"
                type="text"
                placeholder="Enter Your Property Name"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>

            {/* Property Price */}
            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-phone"
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                >
                  Property Price
                </label>
              </div>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-phone"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Property Price"
              />
            </div>

            {/* Property LandArea */}
            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-phone"
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                >
                  Property LandArea
                </label>
              </div>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-phone"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Property LandArea"
              />
            </div>

            {/* Property Area Size */}
            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  htmlFor="af-submit-application-phone"
                  className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                >
                  Property Area Size
                </label>
              </div>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-submit-application-phone"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Property Area Size"
              />
            </div>
            {/* Add More Fields */}
            <div className="col-span-12 ">
              <fieldset className="border flex flex-col gap-4 border-gray-300 rounded-md p-4">
                <legend className="text-sm font-medium text-gray-500 px-2">
                  Extra Fields for Property
                </legend>
                <p>
                  You can add Your Extra Details Here for example
                  Bedrooms,room...
                </p>
                <div className="mt-3  flex justify-end  rounded-sm">
                  <button className="inline-flex bg-blue-600 rounded-md text-white py-2 px-4 items-center gap-x-1 text-sm decoration-2 hover:underline font-medium ">
                    <IoAddCircleOutline />
                    Add More Field
                  </button>
                </div>

                <div className="sm:col-span-9">
                  <div className="sm:flex">
                    <input
                      id="af-submit-application-full-name"
                      placeholder="Bedrooms"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                    <input
                      type="text"
                      placeholder="Enter Value Name"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </section>
          {/* Property Details End Here */}

          {/* Address  Section Start Here */}
          <section className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Address
              </h2>
            </div>
            {/* Address  */}
            <div className="col-span-12 ">
              <div className="sm:col-span-9">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                  {/* Address */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm font-medium mb-2 text-gray-800 mt-2.5"
                    >
                      Address
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Property Area Size"
                    />
                  </div>

                  {/* State */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      State
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Property Area Size"
                    />
                  </div>

                  {/* City */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      City
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Property Area Size"
                    />
                  </div>

                  {/* Country */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Country
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Property Area Size"
                    />
                  </div>

                  {/* Zip or Postal Code */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Zip or Postal Code
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Property Area Size"
                    />
                  </div>

                  {/* Property Map Location URL */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Property Map Location URL
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Property Area Size"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Address section End Here */}

          {/* Description Section Start Here */}
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Description
              </h2>
            </div>

            {/* Hero Image */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-resume-cv"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Hero Image /Signle Image
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
              />
            </div>

            {/* Here Come Rte */}

            <div className="col-span-full">
              <div className="flex items-center mb-4">
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
              </div>

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
                  onChange={() => {}}
                  className="showList "
                />
              ) : (
                <textarea
                  id="about"
                  name="content"
                  rows={8}
                  cols={20}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              )}
            </div>
            {/* Here Decription is over */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-resume-cv"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Multi Image
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
              />
            </div>
          </div>
          {/* Description Section End Here */}

          {/* Slider Section Start Here */}
          <section className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Slider With Toggle{" "}
              </h2>
            </div>

            <div className="col-span-full">
              <div className="flex items-center mb-4">
                <label
                  htmlFor="AcceptConditions"
                  className="block text-sm font-medium leading-6 text-gray-900 mr-10"
                >
                  Do You Went Slider?
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
              </div>
            </div>
            {/* Slider Imaged */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-resume-cv"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Slider Images
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
              />
            </div>
          </section>
          {/* Slider Section End Here */}

          {/* Mortgage Calculator Start Here */}
          <section className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
            <div className="sm:col-span-12">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Mortgage Calculator{" "}
              </h2>
            </div>
            {/* Mortgage Calculator  */}
            <div className="col-span-12 ">
              <div className="sm:col-span-9">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                  {/* Total Amount */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm font-medium mb-2 text-gray-800 mt-2.5"
                    >
                      Total Amount
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="$1"
                    />
                  </div>

                  {/* Down Payment*/}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Down Payment
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="$1"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Interest Rate
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="%"
                    />
                  </div>

                  {/* Loan Terms (Years) */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Loan Terms (Years)
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="1 year"
                    />
                  </div>

                  {/* Property Tax */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Property Tax
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="$1"
                    />
                  </div>

                  {/* Home Insurance */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      Home Insurance
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="$1"
                    />
                  </div>

                  {/* PMI */}
                  <div className="w-full">
                    <label
                      htmlFor="af-submit-project-url"
                      className="inline-block text-sm mb-2 font-medium text-gray-800 mt-2.5"
                    >
                      PMI
                    </label>
                    <input
                      id="af-submit-application-phone"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="$1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Mortgage Calculator End Here */}

          <div className="mt-5 gap-x-2">
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Submit application
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:ring-offset-gray-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
