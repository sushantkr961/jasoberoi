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
    <section className="relative mt-[10%] bg-white w-full mb-[10%] md:mb-0">
      <div className="bg-white h-96 w-full hidden md:block"></div>

      <div className="bg-[url('https://jasoberoi.ca/wp-content/uploads/2023/11/jas-cities.jpg')] h-80 w-full bg-cover hidden md:block"></div>

      <Container className="md:absolute md:top-[50%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {categories.map((category, index) => (
            <PropertyCard
              imgUrl={category.image}
              imageName={category.name}
              title={category.name}
            />
        ))}
      </Container>
    </section>
  );
};

export default Property;
