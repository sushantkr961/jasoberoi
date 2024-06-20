"use client";

import axios from "axios";
import React, { useState } from "react";

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

const AddProperty = () => {
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
      <form onSubmit={handleSumbit}>
        <div className="bg-white rounded-xl shadow">
          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
            <div className="space-y-4 sm:space-y-6">


              {/* Details and Additional Details */}
              <div>
                <div className="text-xl py-2 mt-10">
                  Details
                </div>


                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property ID
                  </label>
                  <input
                    id="af-submit-app-project-name"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter project name"
                    value={formData.propertyId}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyId: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property name
                  </label>
                  <input
                    id="af-submit-app-project-name"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter project name"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property price
                  </label>
                  <input
                    id="af-submit-app-project-name"
                    type="number"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter project price"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property status (Sold)
                  </label>
                  <label
                    htmlFor="AcceptConditions"
                    className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
                  >
                    <input
                      type="checkbox"
                      id="AcceptConditions"
                      className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                      checked={formData.sold}
                      onChange={(e) =>
                        setFormData({ ...formData, sold: !formData.sold })
                      }
                    />

                    <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
                      <svg
                        data-unchecked-icon
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <svg
                        data-checked-icon
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property LandArea
                  </label>
                  <input
                    id="af-submit-app-project-name"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter project name"
                  />
                </div>


                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-project-name"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property Area Size:
                  </label>
                  <input
                    id="af-submit-app-project-name"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Enter project name"
                  />
                </div>

                <p>Here Give One Add More Field Option </p>
              </div>

              <div>
                <div className="text-xl py-2 mt-10">
                  Addetional Details (Optional)
                </div>
                <p>
                  Give Add More Field Option
                </p>
              </div>



              <div>

                <div className="text-xl py-2 mt-10">
                  Address
                </div>

                {/* Adddress Section */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                  <div className="h-32 rounded-lg">
                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-project-url"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                      >
                        Address
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.so"
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
                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-project-url"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                      >
                        Country
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.so"
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
                  </div>
                  <div className="h-32 rounded-lg">
                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-project-url"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                      >
                        City
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.so"
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
                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-project-url"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                      >
                        Zip or Postal Code
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.so"
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
                  </div>
                  <div className="h-32 rounded-lg">
                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-project-url"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                      >
                        State
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.so"
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

                    <div className="space-y-2">
                      <label
                        htmlFor="af-submit-project-url"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                      >
                        Property Map Location URL
                      </label>

                      <input
                        id="af-submit-project-url"
                        type="text"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="https://example.so"
                        value={formData.gmapLink}
                        onChange={(e) =>
                          setFormData({ ...formData, gmapLink: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-bold flex-col gap-4">
                <div className="text-xl py-2 mt-10">
                  Description
                </div>
                <div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-upload-images"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      Single Image Required
                    </label>

                    <label
                      htmlFor="af-submit-app-upload-images"
                      className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                    >
                      <input
                        id="af-submit-app-upload-images"
                        name="af-submit-app-upload-images"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <svg
                        className="size-10 mx-auto text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                      <span className="mt-2 block text-sm text-gray-800">
                        Browse your device or{" "}
                        <span className="group-hover:text-blue-700 text-blue-600">
                          drag 'n drop'
                        </span>
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        Maximum file size is 2 MB
                      </span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-app-description"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Description/RTE Same as blog give option
                  </label>

                  <textarea
                    id="af-submit-app-description"
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    rows={6}
                    placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>

                  {/*  */}
                  <div>
                    <label
                      htmlFor="af-submit-app-description"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      MultiImage Image Give Radio Button for multi image
                    </label>
                    <div>
                      <input
                        name="af-submit-app-upload-images"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />

                    </div>
                  </div>
                </div>
              </div>

              <div className="font-bold flex-col gap-4">
                <div className="text-xl py-2 mt-10">
                  Mortgage Calculator
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-project-url"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Principal & Interest
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="https://example.so"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-project-url"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Property Tax
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="https://example.so"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-project-url"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    Home Insurance
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="https://example.so"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="af-submit-project-url"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                  >
                    PMI
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="text"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="https://example.so"
                  />
                </div>
              </div>

              <div className="font-bold flex-col gap-4">
                <div className="text-xl py-2 mt-10">
                  Slider (Give Radio Button)
                </div>

                <div className="space-y-2">
                  {/*  */}
                  <div>
                    <label
                      htmlFor="af-submit-app-description"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                      MultiImage Image For Slider
                    </label>
                    <div>
                      <input
                        name="af-submit-app-upload-images"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />

                    </div>
                  </div>
                </div>
              </div>



            </div>

            <div className="mt-5 flex justify-center gap-x-2">
              <button
                type="submit"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Submit your project
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
