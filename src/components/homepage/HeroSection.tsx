import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      className="relative  pt-16 pb-4 overflow-hidden sm:pt-[7rem] sm:pb-[2rem] md:pb-0 md:py-24 min-h-full lg:min-h-[470px]  xl:min-h-[670px] w-full flex items-center justify-center "
      // style={{
      //   backgroundImage: "url('/assets/webp/background.webp')",
      //   backgroundPosition: "top center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% auto",
      // }}
    >
      <Image
        src={"/assets/webp/background.webp"}
        alt="JASOBEROI"
        height={1000}
        width={1000}
        className="w-full object-cover absolute top-0 z-[-1]"
      >

      </Image>
      
      <div className="min-w-full h-auto flex justify-center items-center p-[10px]">
        <div className="text-center">
          <div className="md:mb-8">
            <Image
              src="/assets/webp/Belleza-White-.webp"
              alt="JASOBEROI"
              width={768}
              height={128}
              loading="lazy"
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
