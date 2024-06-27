import Image from "next/image";
import PropertyCard from "./PropertyCard";
import Container from "../Containers/Container";

const Property = () => {
  const categories = [
    {
      name: "Residential",
      image: "/assets/asset 29.jpeg",
    },
    {
      name: "Commercial",
      image: "/assets/asset 30.jpeg",
    },
    {
      name: "Exclusive Properties",
      image: "/assets/asset 31.jpeg",
    },
  ];

  return (
    <section className="relative  bg-white w-full mt-[10%] lg:mt-[0%] mb-[10%] md:mb-0">
      <div className="bg-white lg:h-[20rem] w-full hidden md:block"></div>

      <div className="bg-[url('https://jasoberoi.ca/wp-content/uploads/2023/11/jas-cities.jpg')]  lg:h-[12rem] xl:h-80 w-full bg-cover hidden md:block"></div>

      <Container className="lg:absolute lg:top-[50%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {categories?.map((category, index) => (
          <PropertyCard
            key={category.name}
            imgUrl={category.image}
            imageName={category.name}
            title={category.name}
            index={index}
          />
        ))}
      </Container>
    </section>
  );
};

export default Property;
