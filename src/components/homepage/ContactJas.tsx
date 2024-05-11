import Image from 'next/image'
import React from 'react'
import Container from '../Containers/Container'

type Props = {}

const ContactJas = (props: Props) => {
    return (
        <section className="relative bg-white flex items-center justify-center">
            <Container className='bg-black  py-[80px] px-[36px]'>
                <div className="relative flex ">
                    <div className='w-[47%] flex justify-center'>
                        <img
                            src="/assets/jas-oberoi-team.jpg"
                            alt="team"
                            // width={800}
                            // height={389}
                            className="h-[389px] block max-w-full"
                        />
                    </div>
                    <div className=' pr-[10%] pl-[7%] '>
                            {/* padding: 0% 19% 0% 7%; */}
                        <h2 className="text-white font-[300] text-[1.6rem] uppercase leading-[3rem] tracking-[0.8px] font-poppins">
                            AT JAS OBEROI GROUP, WE ARE A TEAM OF EXPERT ADVISORS WITH A
                            VAST NETWORK OF INDUSTRY PROFESSIONALS SO THAT ALL YOUR REAL
                            ESTATE NEEDS ARE UNDER ONE ROOF.
                        </h2>
                    </div>
                </div>
                <div>

                </div>
            </Container>
        </section>
    )
}

export default ContactJas