"use client";

import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import link from '../../data/link.json'
import axios from "axios";
import toast from "react-hot-toast";
import Script from "next/script";
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
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Preve
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
    setLoading(true);

    try {
      const response = await axios.post("/api/admin/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSubmitted(true);

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        lookingFor: "",
        additionalInfo: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 2000);

    } catch (error: any) {
      console.error("Error adding blog post:", error);
    } finally {
      setLoading(false);
    }
  };




  const scriptContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.id = "mrpscript";
    script.type = "text/javascript";
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;

    // Check if the script already exists
    const existingScript = document.getElementById("mrpscript");
    if (existingScript) {
      // If the script already exists, remove it before appending the new one
      existingScript.remove();
    }


    return () => {
      // Cleanup function: remove the script when component unmounts
      if (scriptContainerRef.current) {
        scriptContainerRef.current.innerHTML = ""; // Clear script content
      }
    };
  }, []);
  // <script src="https://link.msgsndr.com/js/form_embed.js"></script>

  return (
    <section>
      <PageHeading imageSrc="assets/aboutus.webp" heading="Contact Us" />


      <div className="flex flex-col justify-center m-auto px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col lg:flex-row justify-between my-[80px] lg:mb-0  md:mx-[80px]">
          <div className="left w-full  flex ">
            <div className="min-h-[900px] max-h-[900px]  overflow-hidden w-full">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/CzGs82po9AE4GY0vItB7"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", padding: "0px", overflow: "hidden" }}
                id="inline-CzGs82po9AE4GY0vItB7"
                scrolling="no"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact us Page"
                data-height="806"
                data-layout-iframe-id="inline-CzGs82po9AE4GY0vItB7"
                data-form-id="CzGs82po9AE4GY0vItB7"
                title="Contact us Page"
              >
              </iframe>
            </div>
          </div>

          {/* Right Side Black Part */}
          <div className="px-4 lg:px-2">

          <div className="right w-full  lg:w-[36%] xl:min-w-[410px] mt-[50px] bg-black text-white p-[20px] flex flex-col gap-16 max-h-[416px]">
            <div className="flex flex-col gap-4 ">
              <h5 className="text-[20px] font-poppins">
                For Inquiries Contact
              </h5>
              <div>
                <h2 className="text-[14px] uppercase font-poppins">CALL</h2>
                <a className="text-[#caa468]" href={`tel:${link.phone}`}>
                  {link.phone}
                </a>
              </div>
              <div>
                <h2 className="text-[14px] uppercase font-poppins">EMAIL</h2>
                <a className="text-[#caa468]" href={`mailto:${link.email}`}>
                  {link.email}
                </a>
              </div>
              <div>
                <h2 className="text-[14px] uppercase font-poppins">ADDRESS</h2>
                <p className="text-[#caa468]">
                  {" "}
                  {link.address}
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-[40px] text-white ">

              <a href={link.facebook} target="_blank"><FaSquareFacebook /></a>
              <a href={link.instagram} target="_blank"><FaSquareInstagram /></a>
              <a href={link.youtube} target="_blank">  <FaSquareYoutube /></a>
              <a href={link.linkdin} target="_blank"><FaLinkedin /></a>
            </div>
          </div>
          </div>
        </motion.div>
        <motion.div

          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}

          className="map px-5 lg:px-2">
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
        </motion.div>
      </div>

    </section>
  );
};

export default contact;
