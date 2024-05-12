import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="bg-black opacity-0">
      <div
        className="min-h-[200px] max-w-[1440px]"
        style={{
          backgroundImage: 'url(assets/023.jpg)',
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Content of the div, if any */}
      </div>
    </section>
  );
};

export default About;
