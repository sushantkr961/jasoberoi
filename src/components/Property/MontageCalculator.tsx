import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

type Props = {}

const MontageCalculator = (props: Props) => {
    return (
        <div className='flex  items-center'>

            <div className='left basis-[50%]'>
                <div className='h-[170px] flex justify-center items-center'>


                    <PieChart
                        lineWidth={20}
                        data={[
                            { title: 'One', value: 10, color: '#A5DFDF' },
                            { title: 'Two', value: 15, color: '#9AD0F5' },
                            { title: 'Three', value: 20, color: '#FFE6AA' },
                        ]}

                    />
                    <div className='absolute flex items-center justify-center w-full h-full'>
                        <div className='text-center'>
                            <span className='text-lg font-bold'>Centered Text</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right w-full basis-[50%]'>
                <ul className='flex flex-col gap-2'>
                    <li className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='h-2 w-2 rounded-full p-2 border-2 border-red-800'>

                            </div>
                            <div>
                                hello
                            </div>
                        </div>
                        <div>
                            $10
                        </div>
                    </li>
                    <div className='border-[1px] border-b-gray-50 '></div>

                    <li className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='h-2 w-2 rounded-full p-2 border-2 border-red-800'>

                            </div>
                            <div>
                                hello
                            </div>
                        </div>
                        <div>
                            $10
                        </div>
                    </li>
                    <div className='border-[1px] border-b-gray-50 '></div>

                    <li className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='h-2 w-2 rounded-full p-2 border-2 border-red-800'>

                            </div>
                            <div>
                                hello
                            </div>
                        </div>
                        <div>
                            $10
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default MontageCalculator