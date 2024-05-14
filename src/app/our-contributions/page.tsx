import YoutubeVideo from '@/components/Common/YoutubeVideo'
import Container from '@/components/Containers/Container'
import Image from 'next/image'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <section>
            <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[100vh] mx-auto max-h-[600px] xl:max-h-full mt-[50px]">
                {/* Youtube video */}
                <YoutubeVideo
                    src="https://www.youtube.com/embed/QN6rR1zuu_k?si=Zi48mup3kGDCDPZs"
                    height="100%"
                    width="100%"
                />
            </div>
            {/* Card */}
            <div className='bg-[#111B1E] sm:py-[4%] flex justify-center pb-[10%]'>
                <Container >
                    <div className="flex flex-col md:flex-row items-center justify-between mt-[36px] sm:mt-[44px] lg:mt-[108px] md:mb-[80px]  text-white sm:px-6">
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
        </section>
    )
}

export default page