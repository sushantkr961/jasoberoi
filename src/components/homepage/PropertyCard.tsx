import React from 'react'

type Props = {
  imgUrl: string;
  imageName: string;
}

const PropertyCard = (props: Props) => {
  return (
    <div className='relative w-full h-[400px] lg:h-[512px]'>
      <img src={props.imgUrl} className='object-cover h-full w-full absolute' alt={props.imageName} />
      <button className='left-[50%] translate-x-[-50%] bottom-[40px] z-40 absolute bg-white text-black text-[18px] py-3 px-4 '>
        RESIDENTIAL
      </button>
    </div>
  )
}
export default PropertyCard