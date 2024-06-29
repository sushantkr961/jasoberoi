"use client";

import AddDetails from "@/components/Admin/AddDetails";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { stripHtml } from "string-strip-html";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface PropertyData {
  propertyId: string;
  title: string;
  price: string;
  sold: boolean;
  slider: boolean;
  contactListingAgent: boolean;
  featured: boolean;
  hotOffer: boolean;
  sale: boolean;
  address: {
    fullAddress: string;
    city: string;
    state: string;
    zipOrPostalCode: string;
    country: string;
  };
  mortgage: {
    totalAmount: string;
    downPayment: string;
    interestRate: string;
    loanYears: string;
    propertyTax: string;
    insurance: string;
    pmi: string;
  };
  areaSize: string;
  gmapLink?: string;
  yearBuilt: string;
  images: File[];
  singleImage: File[];
  mapImages: File[];
  propertyDocuments: {
    name: string;
    url: string;
  }[];
  description: string;
  additionalDetails?: Attribute[];
}

interface Attribute {
  key: string;
  value: string;
}

const AddProperty = () => {
  const editor = useRef(null);
  const router = useRouter();
  const [useEditor, setUseEditor] = useState(true);
  const [toggleSlider, setToggleSlider] = useState(false);
  const [content, setContent] = useState("");

  const [formData, setFormData] = useState<PropertyData>({
    propertyId: "",
    title: "",
    price: "",
    sold: false,
    slider: false,
    contactListingAgent: false,
    featured: false,
    hotOffer: false,
    sale: false,
    address: {
      fullAddress: "",
      city: "",
      state: "",
      zipOrPostalCode: "",
      country: "",
    },
    mortgage: {
      totalAmount: "",
      downPayment: "",
      interestRate: "",
      loanYears: "",
      propertyTax: "",
      insurance: "",
      pmi: "",
    },
    areaSize: "",
    yearBuilt: "",
    propertyDocuments: [],
    singleImage: [],
    mapImages: [],
    images: [],
    description: "",
    gmapLink: "",
    additionalDetails: [],
  });
  const [loading, setLoading] = useState(false);
  const [currentField, setCurrentField] = useState<Attribute>({
    key: "",
    value: "",
  });

  const handleContactListingAgentToggle = () => {
    setFormData((prevData) => ({
      ...prevData,
      contactListingAgent: !prevData.contactListingAgent,
      price: !prevData.contactListingAgent ? "Contact Listing Agent" : "",
    }));
  };

  const handleAdditionalDetailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCurrentField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const removeAdditionalDetails = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      additionalDetails: (prev.additionalDetails || []).filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleAddField = () => {
    if (currentField.key && currentField.value) {
      setFormData((prevData) => ({
        ...prevData,
        additionalDetails: [
          ...(prevData.additionalDetails || []),
          currentField,
        ],
      }));
      setCurrentField({ key: "", value: "" });
    }
  };

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        singleImage: Array.from(event.target.files),
      });
    }
  };

  const handleMapImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        mapImages: Array.from(event.target.files),
      });
    }
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

  //handle checkbox 
  const handleCheckboxToggle = (name: keyof PropertyData) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: !prevData[name],
    }));
  };

  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (stripHtml(content).result == "") {
      toast.error("Content field is required.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/admin/property", { ...formData, description: content }, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message && response.data.success == true) {
        toast.success(response?.data?.message)
      } else {
        toast.error(response?.data?.message)
      }
      // router.push("/admin/property");
    } catch (error: any) {
      toast.error(error?.response.data.message);
      console.error("Error submitting property:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:pb-12 mx-auto shadow-xl rounded-xl  border-gray-100 border-2 ">
      <form onSubmit={handleSumbit}>
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
                required
                value={formData.propertyId}
                onChange={(e) =>
                  setFormData({ ...formData, propertyId: e.target.value })
                }
              />
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
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          {/* Property Price */}
          <div className="sm:col-span-3">
            <div className="inline-block">
              <label
                htmlFor="af-submit-application-phone"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Manual Property Price
              </label>
            </div>
          </div>
          <div className="sm:col-span-9">
            {!formData.contactListingAgent ? (
              <input
                id="listsagent"
                type="number"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter Property Price"
                required
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            ) : (
              <div className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm text-gray-500">
                Contact Listing Agent
              </div>
            )}
          </div>


          <div className="sm:col-span-full">
            <div className="sm:flex">
              <label htmlFor="hs-default-checkbox1" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <input checked={formData.featured} onChange={() => handleCheckboxToggle("featured")} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox1" />
                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Featured</span>
              </label>

              <label htmlFor="hs-default-checkbox2" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <input checked={formData.hotOffer} onChange={() => handleCheckboxToggle("hotOffer")} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox2" />
                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Hot Offer</span>
              </label>

              <label htmlFor="hs-default-checkbox3" className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <input checked={formData.sale} onChange={() => handleCheckboxToggle("sale")} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox3" />
                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Sale</span>
              </label>
            </div>
          </div>


          <div className="col-span-full">
            <div className="flex items-center mb-4">
              <label
                htmlFor="listagent"
                className="leading-6 mr-12 inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Contact Listing Agent
              </label>
              <label
                htmlFor="listagent"
                className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-indigo-600"
              >
                <input
                  type="checkbox"
                  id="listagent"
                  className="peer sr-only"
                  checked={formData.contactListingAgent}
                  onChange={handleContactListingAgentToggle}
                />

                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
              </label>
            </div>
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
              type="number"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Property Area Size"
              value={formData.areaSize}
              onChange={(e) =>
                setFormData({ ...formData, areaSize: e.target.value })
              }
            />
          </div>
          {/* built year */}
          <div className="sm:col-span-3">
            <div className="inline-block">
              <label
                htmlFor="af-submit-application-phone"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Property Built Year
              </label>
            </div>
          </div>
          <div className="sm:col-span-9">
            <input
              id="af-submit-application-phone"
              type="number"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Enter Property Built Year"
              value={formData.yearBuilt}
              onChange={(e) =>
                setFormData({ ...formData, yearBuilt: e.target.value })
              }
            />
          </div>
          {/* Add More Fields */}
          <div className="col-span-12 ">
            <label
              htmlFor="af-submit-project-url"
              className="inline-block text-sm font-medium mb-2 text-gray-800 mt-2.5"
            >
              Extra Fields Property
            </label>
            <AddDetails
              currentField={currentField}
              handleFieldChange={handleAdditionalDetailChange}
              handleAddField={handleAddField}
            />
            <div className="mt-4">
              <h2 className="text-sm font-medium">Added Fields</h2>
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <tbody className="divide-y divide-gray-200">
                  {formData.additionalDetails?.map((attr, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {attr.key}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {attr.value}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <button
                          onClick={() => removeAdditionalDetails(index)}
                          className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                    placeholder="Enter Full Address"
                    required
                    value={formData.address.fullAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: {
                          ...formData.address,
                          fullAddress: e.target.value,
                        },
                      })
                    }
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
                    placeholder="Enter State"
                    required
                    value={formData.address.state}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: {
                          ...formData.address,
                          state: e.target.value,
                        },
                      })
                    }
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
                    placeholder="Enter City"
                    required
                    value={formData.address.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: {
                          ...formData.address,
                          city: e.target.value,
                        },
                      })
                    }
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
                    placeholder="Enter Country"
                    required
                    value={formData.address.country}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: {
                          ...formData.address,
                          country: e.target.value,
                        },
                      })
                    }
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
                    placeholder="Enter Zip or Postal Code"
                    required
                    value={formData.address.zipOrPostalCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: {
                          ...formData.address,
                          zipOrPostalCode: e.target.value,
                        },
                      })
                    }
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
                    placeholder="Enter Map Location URL"
                    value={formData.gmapLink}
                    onChange={(e) =>
                      setFormData({ ...formData, gmapLink: e.target.value })
                    }
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
              accept="image/*"
              required
              onChange={handleImageChange}
            />
          </div>
          {/* Here Come Rte */}

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

            <JoditEditor
              ref={editor}
              value={content}
              config={{ readonly: false }}
              onBlur={(newContent) => handleEditorChange(newContent)}
              onChange={() => { }}
              className="showList"
            />

          </div>
        </div>
        {/* Description Section End Here */}
        {/* Slider Section Start Here */}

        <section className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
          <div className="sm:col-span-12">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Multi Images{" "}
            </h2>
          </div>

          <>
            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-resume-cv"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Multi Images
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

            <div className="sm:col-span-3">
              <label
                htmlFor="af-submit-application-resume-cv"
                className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
              >
                Map Image (Optional)
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
                onChange={handleMapImage}
              />
            </div>
          </>
          {/* )} */}
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
                    value={formData.mortgage.totalAmount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          totalAmount: e.target.value,
                        },
                      })
                    }
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
                    value={formData.mortgage.downPayment}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          downPayment: e.target.value,
                        },
                      })
                    }
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
                    value={formData.mortgage.interestRate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          interestRate: e.target.value,
                        },
                      })
                    }
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
                    value={formData.mortgage.loanYears}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          loanYears: e.target.value,
                        },
                      })
                    }
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
                    value={formData.mortgage.propertyTax}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          propertyTax: e.target.value,
                        },
                      })
                    }
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
                    value={formData.mortgage.insurance}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          insurance: e.target.value,
                        },
                      })
                    }
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
                    value={formData.mortgage.pmi}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mortgage: {
                          ...formData.mortgage,
                          pmi: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mortgage Calculator End Here */}
        <div className="mt-5 flex justify-center gap-x-2">
          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? "Loading..." : "Add Your Property"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
