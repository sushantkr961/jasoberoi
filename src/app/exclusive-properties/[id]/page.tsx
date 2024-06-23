"use client"
import Container from '@/components/Containers/Container';
import Breadcrumb from '@/components/Property/Breadcrumb';
import { CiHeart } from "react-icons/ci";
import { FaMap, FaRegCalendarAlt } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPrintshop } from "react-icons/md";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Slider from '@/components/Property/Slider';
import MontageCalculator from '@/components/Property/MontageCalculator';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGalleryC from '@/components/Property/ImageGalleryC';
// import Gallery from 'react-image-video-gallery';

type AdditionalDetail = {
    key: string;
    value: string;
    _id: string;
};

type Address = {
    fullAddress: string;
    city: string;
    state: string;
    zipOrPostalCode: string;
    country: string;
};

type Mortgage = {
    totalAmount: string;
    downPayment: string;
    interestRate: string;
    loanYears: string;
    propertyTax: string;
    insurance: string;
};

type Property = {
    address: Address;
    mortgage: Mortgage;
    _id: string;
    propertyId: string;
    title: string;
    price: string;
    sold: boolean;
    areaSize: string;
    gmapLink: string;
    yearBuilt: string;
    propertyType: string | null;
    singleImage: string;
    images: string[];
    mapImage: string[];
    description: string;
    additionalDetails: AdditionalDetail[];
    propertyDocuments: any[];
    createdAt: any;
    updatedAt: string;
    __v: number;
    galleryItems?: any[];
};

type Props = {
    params: {
        id: string
    };
}

const page = ({ params }: Props) => {

    const router = useRouter();
    const [property, setProperty] = useState<Property>();
    const [loader, setLoader] = useState<boolean>(true);
    useEffect(() => {
        setLoader(true);
        const fetchSinglePost = async () => {
            setLoader(true);
            try {
                const response= await axios.get(`/api/admin/property/as?id=${params.id}`);
                const propertyData: Property =await response.data;
                console.log(property?.images);
                setProperty(propertyData);

                setLoader(false);
            } catch (error) {
                router.push("/exclusive-properties");
                console.error("Failed to fetch posts:", error);
                setLoader(false);
            }
        }

        fetchSinglePost();

    }, [params]);

    return (
        <Container className='mx-auto px-11 '>
            <div className='lg:max-w-[95%] xl:max-w-[88%] mx-auto'>
                {/* Slider Here */}
              

                {/* Heading  */}
                <div className='flex justify-end sm:justify-between py-4'>
                    <div className='hidden sm:block '>
                        <Breadcrumb
                            title={property?.title}
                        />
                    </div>
                    <div className='flex justify-end text-[1rem]  gap-3 items-center '>
                        <button className='border-[1px] border-black p-[5px]  rounded-[3px]  hover:bg-black hover:text-white'>
                            <CiHeart />
                        </button>
                        <button className='border-[1px] border-black p-[5px]  rounded-[3px]  hover:bg-black hover:text-white'>
                            <FiShare2 />
                        </button>
                        <button className='border-[1px] border-black p-[5px]  rounded-[3px]  hover:bg-black hover:text-white'>
                            <MdOutlineLocalPrintshop />
                        </button>
                    </div>
                </div>
                <section>
                    <div className='flex flex-col'>
                        <div className='flex gap-3'>
                            <span className='bg-[#000000A6] max-w-max text-white py-1 px-2 text-[10px] xl:hidden'>FOR SALE</span>
                        </div>
                        <div className='mt-2 xl:mt-0 flex flex-col gap-2  xl:flex-row justify-between'>
                            <h1 className='text-[20px] lg:text-[26px] xl:text-[30px] font-poppins text-[#2D2D2D] font-[400]'>{property?.title}</h1>
                            <h2 className='text-[14px] lg:text-[20px] xl:text-[30px] font-poppins text-[#2D2D2D]  font-semibold'>{property?.price}</h2>
                        </div>
                        <div className='flex gap-3'>

                            <span className='bg-[#000000A6] mt-1 max-w-max text-white py-1 px-2 text-[12px] hidden xl:inline-block'>FOR SALE</span>
                            <span className='bg-[#000000A6] mt-1 max-w-max text-white py-1 px-2 text-[12px] hidden xl:inline-block'>HOT SALE</span>
                        </div>
                        <div className='text-[#636363] mt-1 text-[14px] xl:text-[16px] flex items-center gap-2 py-2'>
                            <div><IoLocationOutline fontSize={20} /></div>
                            <div>{property?.address?.fullAddress}</div>
                        </div>
                    </div>
                </section>

                {/* Overview & Description */}
                <section className='my-5 font-poppins'>
                    <div>
                        <h1 className='text-[18px] text-[#2D2D2D] mb-[25px]'>Description</h1>
                        <div className='border-[1px] border-b-gray-50 '></div>

                        <div className="mx-auto   font-poppins my-9">
                            <div className="text-center">
                                <figure>
                                    <img className="w-full max-h-[576px] object-cover mx-auto rounded-md" src={property?.singleImage} alt="Image Description" />
                                </figure>

                            </div>

                            <div className='my-6'>
                                <p className="text-[#636363] mb-2 text-[15px]">At preline, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow.</p>
                                <p
                                    style={{ fontFamily: "Poppins !important" }}
                                    className="text-[#636363] mb-2 text-[15px]"
                                >{property?.description}</p>

                            </div>
                            <div className="text-center">
                                {

                                    property?.images &&(
                                        <ImageGalleryC 
                                        images={property.images}
                                        ></ImageGalleryC>
                                    )
                                }


                                <div className="grid lg:grid-cols-2 gap-3">
                                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                                        <figure className="relative w-full h-60">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-md" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                                        </figure>
                                        <figure className="relative w-full h-60">
                                            <img className="size-full absolute top-0 start-0 object-cover rounded-md" src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
                                        </figure>
                                    </div>
                                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                                        <img className="size-full absolute top-0 start-0 object-cover rounded-md" src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="Image Description" />
                                    </figure>
                                </div>

                                <span className="mt-3 block text-sm text-center text-gray-500 dark:text-neutral-500">
                                    Working process
                                </span>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>



                {/* Address */}
                <section className='my-5 font-poppins'>
                    <div>
                        <div className='mb-[25px] flex justify-between '>
                            <h1 className='text-[18px] text-[#2D2D2D] '>Address</h1>
                            {
                                property?.gmapLink && (
                                    <button
                                        onClick={() => router.push(property?.gmapLink)
                                        }
                                        className='bg-[#C1A468] rounded-md text-white font-semibold px-2 py-2 flex items-center gap-2 text-[12px]'>
                                        <FaMap />
                                        Open on Google Maps
                                    </button>

                                )
                            }
                        </div>
                        <div className='border-[1px] border-b-gray-50 '></div>
                    </div>

                    {/* Depth */}
                    <ul className='grid lg:grid-cols-2 gap-x-6 gap-y-2 px-4'>
                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>Address</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.address.fullAddress}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>
                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>City</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.address.city}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>
                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>State</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.address.state}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>

                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>Country</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.address.country}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>
                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>Zip/Postal Code</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.address?.zipOrPostalCode}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>
                    </ul>
                </section>


                {/* Additional Details */}
                <section className='my-5 font-poppins mt-9'>
                    <div>
                        <div className='mb-[25px] flex justify-between flex-col gap-1 md:gap-0 md:flex-row '>
                            <h1 className='text-[18px] text-[#2D2D2D] '>Details</h1>
                            <div className=' text-[#636363] text-[12px] flex gap-2 items-center'>
                                <FaRegCalendarAlt />
                                Created On
                                {
                                    new Date(property?.createdAt).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' })
                                }
                            </div>
                        </div>
                        <div className='border-[1px] border-b-gray-50 '></div>
                    </div>

                    {/* Depth */}
                    <ul className='grid lg:grid-cols-2 gap-x-6 gap-y-2  bg-[#E5F7FF] border-2 border-[#C8AF7C] rounded-md  my-7 p-9 '  >


                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>Price</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.price}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>

                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>Property Id</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.propertyId}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>
                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>Year Build</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.yearBuilt}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>

                        <li className=''>
                            <div className='py-[10px] flex justify-between '>
                                <div className='text-[15px] text-[#2D2D2D] font-semibold '>AreaSize(sq)</div>
                                <div className='text-[15px] text-[#2D2D2D]'>{property?.areaSize}</div>
                            </div>
                            <div className='border-[1px] border-b-gray-50 '></div>
                        </li>
                        {
                            property?.additionalDetails.map((propertydetail) => (
                                <li key={propertydetail._id}>
                                    <div className='py-[10px] flex justify-between '>
                                        <div className='text-[15px] text-[#2D2D2D] font-semibold '>{propertydetail.key}</div>
                                        <div className='text-[15px] text-[#2D2D2D]'>{propertydetail.value}</div>
                                    </div>
                                    <div className='border-[1px] border-b-gray-50 '></div>
                                </li>
                            ))
                        }
                    </ul>
                </section>




                {/* Moratage Calcultor */}


                <section className='my-5 font-poppins'>
                    <div className='mb-[25px]'>
                        <div className='mb-[25px] flex justify-between '>
                            <h1 className='text-[18px] text-[#2D2D2D] '>Mortgage Calculator</h1>
                        </div>
                        <div className='border-[1px] border-b-gray-50 '></div>
                    </div>
                    <div>

                        <MontageCalculator />
                    </div>
                </section>
            </div >
        </Container >
    )
}

export default page