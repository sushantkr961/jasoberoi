import YoutubeVideo from '@/components/Common/YoutubeVideo'
import Container from '@/components/Containers/Container'
import Image from 'next/image'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <section className='bg-[#F0F2F4]'>
            <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[100vh] mx-auto max-h-[600px] xl:max-h-full mt-[50px] ">
                {/* Youtube video */}
                <YoutubeVideo
                    src="https://www.youtube.com/embed/QN6rR1zuu_k?si=Zi48mup3kGDCDPZs"
                    height="100%"
                    width="100%"
                />
            </div>
            {/* BantingGalaw */}
            <div className='bg-[#111B1E] sm:py-[3%] flex justify-center pb-[10%] '>
                <Container >
                    <div className="flex flex-col md:flex-row items-center justify-between mt-[36px] sm:my-[44px]  lg:my-[70px]  text-white sm:px-6">
                        {/* Right Side Description */}
                        <div className="md:w-[51%] mt-7 md:mt-0 pr-3 lg:pr-0 text-center ">
                            <div className="heading text-center">
                                <Image
                                    src={`/assets/ourcontributions/BantingGalawhite.png`}
                                    height={700}
                                    width={580}
                                    alt="cluture"
                                    layout="responsive"
                                    className="md:block object-cover w-full "
                                />
                            </div>
                            <div className="flex flex-col gap-5 mt-7 tracking-[1px]">
                                <p className="font-poppins text-[15px] font-[400]">JAS OBEROI GROUP JOINS HANDS WITH DIABETES CANADA TO HOST THE BEST BANTING GALA OF 2022.</p>
                                <p className="font-poppins text-[15px] font-[400]">THE BLACK TIE EVENT WAS HELD AT THE ARIA BANQUET HALL ON NOVEMBER 5TH.</p>
                                <p className="font-poppins text-[15px] font-[400]">WITH THE SUPPORT OF THE COMMUNITY WE WERE ABLE TO COME TOGETHER AND HOST A BEAUTIFUL BLACK TIE GALA AND RAISED OVER $110,000</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[47%] flex justify-center mt-[35px] md:mt-[0px]">
                            <Image
                                src={`/assets/ourcontributions/DSC00562.jpg`}
                                height={700}
                                width={580}
                                alt="cluture"
                                layout="responsive"
                                className="hidden md:block object-cover w-full lg:max-h-[830px] lg:max-w-[500px] xl:max-w-[560px]"
                            />
                            <Image
                                src={`/assets/ourcontributions/DSC00562.jpg`}
                                height={700}
                                width={580}
                                alt="cluture"
                                className="md:hidden object-cover object-top max-h-[8 00px] w-full"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            {/* 3 Image Card */}
            <div className='h-[800px] lg:h-[400px]  grid grid-cols-1 lg:grid-cols-3'>
                <div className='relative h-full flex justify-center items-center'
                    style={{
                        backgroundImage: "url('/assets/ourcontributions/glass1.jpg')",
                        backgroundPosition: "top center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className=' h-full w-full opacity-[0.34] absolute z-10'></div>
                    <div className="relative elementor-widget-container tracking-[6.7px] leading-[1.4em] text-center z-30 text-white text-[26px] md:text-[39px]">
                        $110,000<br />
                        RAISED
                    </div>
                </div>
                <div className='relative h-full flex justify-center items-center'
                    style={{
                        backgroundImage: "url('/assets/ourcontributions/girlpurpledress.jpg')",
                        backgroundPosition: "top center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className='bg-[#000000] h-full w-full opacity-[0.34] absolute z-10'></div>
                    <div className="relative elementor-widget-container tracking-[6.7px] leading-[1.4em] text-center z-30 text-white text-[26px] md:text-[39px]">
                        20<br />
                        SPONSORS
                    </div>
                </div>
                <div
                    className='relative h-full flex justify-center items-center'
                    style={{
                        backgroundImage: "url('/assets/ourcontributions/table.jpg')",
                        backgroundPosition: "top center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className='bg-[#000000] h-full w-full opacity-[0.34] absolute z-10'></div>

                    <div className="relative elementor-widget-container tracking-[6.7px] leading-[1.4em] text-center z-30 text-white text-[26px] md:text-[39px]">
                        300+<br />
                        ATTENDEES
                    </div>
                </div>
            </div>

            {/* DR. BRIAN RODRIGUES & RUI SHANG. */}
            <Container className='flex flex-col gap-7 sm:gap-9 justify-center m-auto py-16 xl:py-0 xl:min-h-[864px]'>
                <div>
                    <Image
                        src={`/assets/ourcontributions/DSC00474.jpg`}
                        height={700}
                        width={580}
                        alt="cluture"
                        layout="responsive"
                        className="md:block object-cover w-full "
                    />
                </div>
                <div className='sm:px-3 flex flex-col text-center  justify-between w-full'>
                    <div className="text-[#111B1E] text-[14px] lg:text-[15px] ">DR. BRIAN RODRIGUES & RUI SHANG.</div>
                    <div>
                        <div className="text-[#111B1E] text-[12px] lg:text-[15px] leading-[1.3rem] lg:leading-[1.8rem] tracking-[1px] mt-4 ">
                            OVER 300 INDUSTRY LEADING
                            PROFESSIONALS GATHERED AT THE ARIA BANQUET
                            HALL TO ENJOY DELICIOUS FOOD,
                            DRINK, AND GOOD COMPANY.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default page