import Image from "next/image";
import { title } from "process";
import React from "react";

type Props = {
  imgUrl: string;
  imageName: string;
  title: string;
};

const PropertyCard = (props: Props) => {
  return (
    <div className="relative w-full px-5 hidden md:block">
      <Image
        src={props.imgUrl}
        alt={props.imageName}
        width={500}
        height={300}
        layout="responsive"
        objectFit="cover"
        className=""
      />
      <button className="left-[50%] translate-x-[-50%] bottom-[40px] z-40 absolute bg-white text-black text-[18px] py-3 px-4 uppercase whitespace-nowrap overflow-hidden text-overflow-ellipsis min-w-[160px] w-auto">
        {props.title}
      </button>
    </div>
  );
};
export default PropertyCard;
