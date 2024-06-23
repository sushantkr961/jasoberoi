
"use client"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import AnimatedNumber from "animated-number-react";
import Container from "../Containers/Container";

type Props = {}

const Experience = (props: Props) => {

    const [ref, inView] = useInView({
        threshold: 0.5, // Trigger when 50% of the element is in view
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);
    return (

        <section className="mt-0 mb-0 py-11 lg:py-24 relative z-10 flex items-center justify-center">
            <Container className="flex flex-col lg:flex-row justify-between gap-7 ">
                <div className="w-full  lg:max-w-[48%] flex align-middle justify-center items-center ">
                    <div className="flex flex-col">
                        <div className="text-[2rem] leading-tight   lg:text-[3rem]  text-center w-full font-[300] font-poppins p-0 m-0 lg:pb-5">
                            <strong className="font-bold">HASSLE FREE</strong> EXPERIENCE
                        </div>
                        <div className="text-justify mt-2 lg:mt-0 text-[1.2rem] lg:text-[1.4rem] font-poppins font-[400] text-[#1e1d1d] leading-[1.6rem] lg:leading-[2.1rem]">
                            A keen eye on the market, a passion to excel, and a wide network
                            of industry professionals. Jas Oberoi Group is the best real
                            estate team in Surrey and we work to deliver the best experience
                            with Real Estate.
                        </div>
                        <div className="text-[16px]  lg:text-[1rem] font-poppins mt-4 mb-4">
                            <p className="text-justify ">
                                Doing more than just finding real estate and developing an
                                investment strategy. By working with Jas Oberoi Group, we
                                provide for every real estate need under one roof. We want to
                                emphasize that we are not sales associates- Jas Oberoi Group
                                is a home made up of only advisors and consultants dedicated
                                to imparting transparent and honest advice. Our values build
                                our character, our stories strengthen our reputation.
                            </p>
                        </div>
                        <div className="text-[3rem] font-great-vibes text-[#C0AC6A] text-center">
                            <h2>Jas Oberoi</h2>
                        </div>
                    </div>
                </div>

                <div ref={ref} id="experience-section" className="lg:max-w-[551px] 2xl:max-w-[651px] px-5 py-2 grid grid-cols-1 lg:grid-cols-2 items-center justify-center border-solid border-4 border-[#C0AC6A]">
                    {isVisible && (
                        <>
                            <div className="flex flex-col justify-center items-center  lg:p-[2rem]">
                                <div className="text-[58px]  lg:text-[5rem] 2xl:text-[6.5rem] tracking-tighter leading-[70px] lg:leading-[110px] font-crimson font-[500]">
                                    <AnimatedNumber value={800} formatValue={(value: number) => Math.round(value).toLocaleString()} />M+
                                </div>
                                <p className="text-[19px] lg:[1rem] xl:text-[1.2rem] font-poppins text-center">in Career Sales</p>
                            </div>
                            <div className="flex flex-col justify-center items-center  lg:p-[30px]">
                                <div className="text-[58px]  lg:text-[5rem] 2xl:text-[6.5rem] tracking-tighter leading-[70px] lg:leading-[110px] font-crimson font-[500]">
                                    <AnimatedNumber value={35} formatValue={(value: number) => Math.round(value).toLocaleString()} />+
                                </div>
                                <p className="text-[19px] lg:[1rem] xl:text-[1.2rem] font-poppins">Real Estate Awards</p>
                            </div>
                            <div className="flex flex-col justify-center items-center  lg:p-[30px]">
                                <div className="text-[58px]  lg:text-[5rem] 2xl:text-[6.5rem] tracking-tighter leading-[70px] lg:leading-[110px] font-crimson font-[500]">
                                    <AnimatedNumber value={8} formatValue={(value: number) => Math.round(value).toLocaleString()} />+
                                </div>
                                <p className="text-[19px] lg:[1rem] xl:text-[1.2rem] font-poppins">Year of Experience</p>
                            </div>
                            <div className="flex flex-col justify-center items-center  lg:p-[30px]">
                                <div className="text-[58px]  lg:text-[5rem] 2xl:text-[6.5rem] tracking-tighter leading-[70px] lg:leading-[110px] font-crimson font-[500]">
                                    <AnimatedNumber value={1} formatValue={(value: number) => Math.round(value).toLocaleString()} />K+
                                </div>
                                <p className="text-[19px] lg:[1rem] xl:text-[1.2rem] font-poppins">Total Sales Volume</p>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default Experience