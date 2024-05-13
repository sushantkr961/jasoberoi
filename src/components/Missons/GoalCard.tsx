import React from 'react'

type Props = {
    icon: React.ReactNode;
    name: string;
}
const GoalCard = (props: Props) => {
    return (
        <div className=' flex flex-col md:flex-row justify-left items-center  py-5 md:pr-3 md:pl-7 gap-4 border-2 w-full hover:transform hover:scale-105 duration-300'
            style={{ boxShadow: '0px 0px 9px 0px rgba(0, 0, 0, 0.12)' }}>
            {props.icon}
            <p className='text-center md:text-left text-[15px] sm:text-[18px] md:text-[21px] font-poppins font-[300] text-[#2D2D2D]'>{props.name}</p>
        </div>
    )
}

export default GoalCard