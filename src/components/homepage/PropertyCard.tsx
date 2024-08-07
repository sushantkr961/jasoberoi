import Image from "next/image";

type Props = {
  imgUrl: string;
  imageName: string;
  title: string;
  index: number;
  href: string;
};

const PropertyCard = (props: Props) => {
  return (
    <div key={props.index} className="relative w-full md:px-5">
      <Image
        src={props.imgUrl}
        alt={props.imageName}
        width={500}
        height={300}
        className="hidden lg:block object-cover"
        loading="lazy"
        style={{ width: 'auto', height: 'auto' }}
      />
      <Image
        src={props.imgUrl}
        alt={props.imageName}
        width={200}
        height={300}
        loading="lazy"
        className="object-cover object-center block lg:hidden w-full max-h-[40rem] sm:max-h-[18rem]"
        style={{ width: '100%', height: '100%' }}
      />
      <a
        href={props.href}
        className="left-[50%] translate-x-[-50%] bottom-[40px] z-40 absolute bg-white text-black text-[16px] md:text-[18px] py-3 px-4 uppercase whitespace-nowrap overflow-hidden text-overflow-ellipsis min-w-[160px] w-auto">
        {props.title}
      </a>
    </div>
  );
};


export default PropertyCard;
