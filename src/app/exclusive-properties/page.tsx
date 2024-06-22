"use client"
import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import Loader from "@/components/Loader/Loader";
import ExCard from "@/components/Property/ExCard";
import axios from "axios";
import React, { useEffect, useState } from "react";


type AdditionalDetail = {
  key: string;
  value: string;
  _id: string;
};

type Address = {
  fullAddress: string;
  city: string;
  state: string;
  zipOrPostalCode: string;
  country: string;
};

type Mortgage = {
  totalAmount: string;
  downPayment: string;
  interestRate: string;
  loanYears: string;
  propertyTax: string;
  insurance: string;
};

type Property = {
  address: Address;
  mortgage: Mortgage;
  _id: string;
  propertyId: string;
  title: string;
  price: string;
  sold: boolean;
  areaSize: string;
  gmapLink: string;
  yearBuilt: string;
  propertyType: string | null;
  singleImage: string;
  images: string[];
  mapImage: string[];
  description: string;
  additionalDetails: AdditionalDetail[];
  propertyDocuments: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {};

const exclusiveProperties = (props: Props) => {
  const [property, setProperty] = useState<Property[]>([]);
  const [loader, setLoader] = useState<boolean>();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const response = await axios.get("/api/admin/property");

        setProperty(response.data.propertys);


        setLoader(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoader(false);
      }
    };
    fetchPosts();
  }, []);

  if (loader) {
    return <div className="overflow-hidden">
      <Loader />
    </div>
  }

  return <section>

    <PageHeading
      heading="Browse Our Exclusive Listings"
      imageSrc="assets/ourculture/asset 1.jpeg"
    />
    <Container className="m-auto flex flex-col items-center  py-14 md:py-24 ">
      <div className="grid md:grid-cols-2 max-w-[1340px]  w-full md:gap-8 lg:gap-10 xl:gap-2 gap-y-8 lg:gap-y-8  lg:justify-between place-content-center place-items-center">
        {
          property?.map((property) => (
            <ExCard
              _id={property?._id}
              title={property?.title}
              address={property?.address?.fullAddress}
              pricing={property?.price}
              imageUrl={property?.singleImage}
            />
          ))
        }


      </div>
    </Container>
  </section>;
};

export default exclusiveProperties;
