import Experience from "@/components/homepage/Experience";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <HeroSection />
     <Experience />
      <section className="relative bg-white flex items-center justify-center">
        <div className="bg-black max-w-[1340px]">
          <div className="relative flex justify-between items-center">
            <div>
              <Image
                src="/assets/jas-oberoi-team.jpg"
                alt="team"
                width={800}
                height={528}
                className="block max-w-full"
              />
            </div>
            <div>
              <p className="text-white">
                AT JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS WITH A
                VAST NETWORK OF INDUSTRY PROFESSIONALS SO THAT ALL YOUR REAL
                ESTATE NEEDS ARE UNDER ONE ROOF.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}


