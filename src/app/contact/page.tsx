"use client";

import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";

type Props = {};
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  lookingFor: string;
  additionalInfo: string;
}
interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  phone: boolean;
  email: boolean;
  lookingFor: boolean;
  additionalInfo: boolean;
}

const contact = (props: Props) => {
  const navigate = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    lookingFor: "",
    additionalInfo: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    lookingFor: false,
    additionalInfo: false,
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? false : true,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      phone: !formData.phone,
      email: !formData.email,
      lookingFor: !formData.lookingFor,
      additionalInfo: !formData.additionalInfo,
    };

    setFormErrors(newErrors);
    if (Object.values(newErrors).some((isError) => isError)) {
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    localStorage.setItem("formData", JSON.stringify(formData));
    setTimeout(() => {
      setSubmitted(false);
      navigate.push("/");
    }, 2000);
  };

  return (
    <section>
      <PageHeading imageSrc="assets/aboutus.jpg" heading="Contact Us" />
      <Container className="flex flex-col justify-center m-auto gap-7">
        <div className="flex flex-col md:flex-row justify-between  my-[80px] mx-[12px] md:mx-[80px]">
          <div className="left w-full md:w-[60%] flex flex-col gap-8">
            <div className="heading">
              <h2 className="font-poppins text-[30px] md:text-[46px] uppercase leading-[50px]">
                <strong className="font-[600] ">Get in</strong> touch
              </h2>

              <p className="text-[#D3AA54] text-[15px] md:text-[16px] font-poppins">
                Reach out to our dedicated team and we’ll help answer any
                questions.
              </p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="-mx-3 md:flex mb-2">
                <div
                  className="md:w-1/2 px-3 mb-6 md:mb-0"
                  style={{ transition: "border-color 0.3s ease" }}
                >
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name <span className="text-red-600 text-lg">*</span>
                  </label>
                  <input
                    className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstName && (
                    <p className="text-xs italic text-red-600">
                      Please fill out this field.
                    </p>
                  )}
                </div>
                <div
                  className="md:w-1/2 px-3 mb-6 md:mb-0"
                  style={{ transition: "border-color 0.3s ease" }}
                >
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name <span className="text-red-600 text-lg">*</span>
                  </label>
                  <input
                    className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-600 text-xs italic">
                      Please fill out this field.
                    </p>
                  )}
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div
                  className="md:w-1/2 px-3 mb-6 md:mb-0"
                  style={{ transition: "border-color 0.3s ease" }}
                >
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone <span className="text-red-600 text-lg">*</span>
                  </label>
                  <input
                    className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                    id="grid-phone"
                    type="number"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <p className="text-red-600 text-xs italic">
                      Please fill out this field.
                    </p>
                  )}
                </div>
                <div
                  className="md:w-1/2 px-3 mb-6 md:mb-0"
                  style={{ transition: "border-color 0.3s ease" }}
                >
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email <span className="text-red-600 text-lg">*</span>
                  </label>
                  <input
                    className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-600 text-xs italic">
                      Please fill out this field.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-2/2 mb-4 relative">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Looking for? <span className="text-red-600 text-lg">*</span>
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                    id="grid-state"
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleChange}
                  >
                    <option>-- Please Select --</option>
                    <option>Investor</option>
                    <option>Buying a house</option>
                    <option>commercial</option>
                    <option>selling my house</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 right-0 top-[50%] translate--[-50%] text-grey-darker">
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div
                  className="md:w-full px-3 mb-6 md:mb-0"
                  style={{ transition: "border-color 0.3s ease" }}
                >
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-additional-info"
                  >
                    Additional Information{" "}
                    <span className="text-red-600 text-lg">*</span>
                  </label>
                  <textarea
                    className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                    id="grid-additional-info"
                    placeholder="Enter any additional information"
                    style={{ width: "100%" }}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.additionalInfo && (
                    <p className="text-red-600 text-xs italic">
                      Please fill out this field.
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-black py-2 px-10  font-poppins text-white"
              >
                Submit
              </button>
            </form>
            {submitted && (
              <p className="text-green-600 text-md italic border border-green-600 rounded-lg py-2 px-5 bg-green-200">
                Form Submitted Successfully.
              </p>
            )}
          </div>

          {/* Right Side Black Part */}
          <div className="right w-full md:w-[36%] xl:min-w-[410px] mt-[50px] bg-black text-white p-[20px] flex flex-col gap-16 max-h-[416px]">
            <div className="flex flex-col gap-4 ">
              <h5 className="text-[20px] font-poppins">
                For Inquiries Contact
              </h5>
              <div>
                <h2 className="text-[14px] uppercase font-poppins">CALL</h2>
                <a className="text-[#caa468]" href="tel:7789947450">
                  778-994-7450
                </a>
              </div>
              <div>
                <h2 className="text-[14px] uppercase font-poppins">EMAIL</h2>
                <a className="text-[#caa468]" href="tel:7789947450">
                  778-994-7450
                </a>
              </div>
              <div>
                <h2 className="text-[14px] uppercase font-poppins">ADDRESS</h2>
                <p className="text-[#caa468]">
                  {" "}
                  #306 - 1493 foster Street,
                  <br />
                  white rock, BC , Canada
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-[40px] text-white ">
              <FaSquareInstagram />
              <FaSquareFacebook />
              <FaSquareYoutube />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20928.000849465756!2d-122.804293!3d49.029605000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c4bb0fb1f7e1%3A0xaa1e9aa1056c9966!2sJas%20Oberoi%20Group!5e0!3m2!1sen!2sus!4v1715508303712!5m2!1sen!2sus"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="elementor-widget-container text-[15px] md:text-[16px] p-[30px]">
            <p style={{ textAlign: "left" }}>
              <strong>Address</strong>: #306-1493, foster street, WhiteRock BC
              Candada –{" "}
              <a
                href="https://www.google.com/maps/place/Jas+Oberoi+Group/@49.0296085,-122.8068684,17z/data=!3m2!4b1!5s0x5485da43043b8b53:0x6c3dc098b2aafe8e!4m6!3m5!1s0x5485c4bb0fb1f7e1:0xaa1e9aa1056c9966!8m2!3d49.029605!4d-122.8042935!16s%2Fg%2F11csqfl6zt?entry=ttu"
                className="text-[#c1a468]"
                target="_blank"
                rel="noopener"
              >
                Get Directions
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default contact;
