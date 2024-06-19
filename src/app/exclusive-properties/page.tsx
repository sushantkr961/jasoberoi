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
    <Container className="m-auto flex flex-col items-center  py-14 md:py-24 ">
        <div className="grid md:grid-cols-2 max-w-[1340px]  w-full md:gap-8 lg:gap-10 xl:gap-2 gap-y-8 lg:gap-y-8  lg:justify-between place-content-center place-items-center">
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
