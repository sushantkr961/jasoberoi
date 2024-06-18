import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import ExCard from "@/components/Property/ExCard";
import React from "react";

type Props = {};

const exclusiveProperties = (props: Props) => {
  return <section>

    <PageHeading
      heading="Browse Our Exclusive Listings"
      imageSrc="assets/ourculture/asset 1.jpeg"
    />
    <Container className="m-auto border-2    flex flex-col items-center  py-14 md:py-24 ">
        <div className="grid md:grid-cols-2 max-w-[1340px] px-16  w-full  gap-y-8 lg:gap-y-8  lg:justify-between gap-20">
          <ExCard

          />
          <ExCard

          />
          <ExCard

          />
          <ExCard

          />
          <ExCard

          />
          <ExCard

          />
        </div>
    </Container>
  </section>;
};

export default exclusiveProperties;
