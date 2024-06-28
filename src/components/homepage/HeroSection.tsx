import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      className="relative  pt-16 pb-4 overflow-hidden sm:pt-[7rem] sm:pb-[2rem] md:pb-0 md:py-24 min-h-full lg:min-h-[470px]  xl:min-h-[670px] w-full flex items-center justify-center "
    
    >
      <Image
        src={"/assets/webp/background.webp"}
        alt="JASOBEROI"
        loading="eager"
        layout="fill" // Ensures the image takes up the entire parent div's dimensions
        objectFit="cover" // Adjust as per your design needs
        
        className="z-[-1]"
      />


      <div className="min-w-full h-auto flex justify-center items-center p-[10px]">
        <div className="text-center">
          <div className="md:mb-8">
            <Image
              src="/assets/webp/Belleza-White-.webp"
              alt="JASOBEROI"
              width={768}
              height={128}
              className="block max-w-full"
            />
          </div>
          <div className="flex items-end justify-center lh:p-[10px] md:mb-6 xl:mb-0">
            <button
              className="hidden md:block px-10 py-4 lg:py-4 rounded bg-white text-black font-semibold transition-colors sm:text-[1rem] font-poppins uppercase "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
