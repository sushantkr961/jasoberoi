import React, { useEffect, useState } from 'react'
import { IoLogoUsd } from 'react-icons/io5'
import { PieChart } from 'react-minimal-pie-chart'

type Props = {
    value: {
        totalAmount?: string;
        downPayment?: string;
        interestRate?: string;
        loanYears?: string;
        propertyTax?: string;
        insurance?: string;
        pmi?: string;

    }
}

const MontageCalculator = ({ value }: Props) => {
    console.log(value);


    const [totalAmount, setTotalAmount] = useState<string>(value?.totalAmount ? value?.totalAmount : "0");
    const [downPayment, setDownPayment] = useState<string>(value?.downPayment ? value?.downPayment : "0");
    const [interestRate, setInterestRate] = useState<string>(value?.interestRate ? value?.interestRate : "0");
    const [years, setYears] = useState<string>(value?.loanYears ? value?.loanYears : "1");
    const [propertyTax, setPropertyTax] = useState<string>(value?.propertyTax ? value?.propertyTax : "0");
    const [homeInsurance, setHomeInsurance] = useState<string>(value?.insurance ? value?.insurance : "0");
    const [pMI, setPMI] = useState<string>(value?.pmi ? value?.pmi : "0");

    const isValidNumber = (value: any) => {
        return !isNaN(value) && value >= 0;
    };

    const [principalInterest, setPrincipalInterest] = useState<string>("0");
    const [calculatePropertyTax, setCalculatePropertyTax] = useState<string>("1");
    const [calculateHomeInsurance, setCalculateHomeInsurance] = useState<string>('0');
    const [calculatePMI, setCalculatePMI] = useState<string>("0");
    const [totalMonthlyPayment, setTotalMonthlyPayment] = useState("0");

    const handleCalculate = () => {
        if (
            !isValidNumber(totalAmount) ||
            !isValidNumber(downPayment) ||
            !isValidNumber(interestRate) ||
            !isValidNumber(years) ||
            !isValidNumber(propertyTax) ||
            !isValidNumber(homeInsurance) ||
            !isValidNumber(pMI)
        ) {
            alert("Please enter valid strings (0 or positive values only) for all fields.");
            return;
        }

        const P = parseFloat(totalAmount) - parseFloat(downPayment);
        const r = (parseFloat(interestRate) / 100) / 12;
        const n = parseFloat(years) * 12;

        const monthlyPrincipalAndInterest = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const monthlyPropertyTax = parseFloat(propertyTax) / 12;
        const monthlyHomeInsurance = parseFloat(homeInsurance) / 12;
        const monthlyPMI = parseFloat(pMI);
        setPrincipalInterest(monthlyPrincipalAndInterest.toFixed(2));
        setCalculatePropertyTax(monthlyPropertyTax.toFixed(2));
        setCalculateHomeInsurance(monthlyHomeInsurance.toFixed(2));
        setCalculatePMI(monthlyPMI.toFixed(2));

        const totalMonthly = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyHomeInsurance + monthlyPMI;
        setTotalMonthlyPayment(totalMonthly.toFixed(2));
    };

    useEffect(() => {
        handleCalculate();
    }, [])
    return (

        <section>


            <div className='flex flex-col gap-10 sm:gap-0 sm:flex-row items-center'>
                <div className='left basis-[50%]'>
                    <div className='h-[170px] flex justify-center items-center'>
                        <PieChart
                            lineWidth={20}
                            data={[
                                { title: 'Principal & Interest', value: Number(principalInterest), color: '#FF97CF' },
                                { title: ' Property Tax', value: Number(calculatePropertyTax), color: '#70C4F6' },
                                { title: ' Home Insurance', value: Number(calculateHomeInsurance), color: '#FFD966' },
                                { title: 'PMI', value: Number(calculatePMI), color: '#7FD6ED' },
                            ]}
                        />
                        <div className='absolute flex items-center justify-center w-full'>
                            <div className='text-center'>
                                <span className='text-lg font-bold'>${totalMonthlyPayment}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right w-full basis-[50%]'>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='h-2 w-2 rounded-full p-2 border-2 border-[#FF97CF]'>

                                </div>
                                <div>
                                    Principal & Interest
                                </div>
                            </div>
                            <div>
                                ${principalInterest}
                            </div>

                        </li>
                        <div className='border-[1px] border-b-gray-50 '></div>

                        <li className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='h-2 w-2 rounded-full p-2 border-2 border-[#70C4F6]'>

                                </div>
                                <div>
                                    Property Tax
                                </div>
                            </div>
                            <div>

                                ${calculatePropertyTax}
                            </div>
                        </li>
                        <div className='border-[1px] border-b-gray-50 '></div>

                        <li className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='h-2 w-2 rounded-full p-2 border-2 border-[#FFD966]'>

                                </div>
                                <div>
                                    Home Insurance
                                </div>
                            </div>
                            <div>
                                ${calculateHomeInsurance}
                            </div>
                        </li>
                        <div className='border-[1px] border-b-gray-50 '></div>

                        <li className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='h-2 w-2 rounded-full p-2 border-2 border-[#7FD6ED]'>

                                </div>
                                <div>
                                    PMI
                                </div>
                            </div>
                            <div>
                                ${calculatePMI}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Form Start */}

            <div>
                <form className='grid sm:gap-5 md:gap-0 sm:grid-cols-2 md:grid-cols-3 mt-8 sm:mt-5'>

                    <div
                        className=" md:px-3 "
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Total Amount <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(e.target.value)}
                            />

                        </div>
                    </div>


                    <div
                        className="md:px-3 "
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Down Payment <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={downPayment}
                                onChange={(e) => setDownPayment(e.target.value)}
                            />

                        </div>
                    </div>

                    <div
                        className=" md:px-3 "
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Interest Rate <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />

                        </div>
                    </div>

                    <div
                        className=" md:px-3 "
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Loan Terms (Years) <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={years}
                                onChange={(e) => setYears(e.target.value)}
                            />

                        </div>
                    </div>

                    <div
                        className=" md:px-3"
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Property Tax <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={propertyTax}
                                onChange={(e) => setPropertyTax(e.target.value)}
                            />

                        </div>
                    </div>

                    <div
                        className=" md:px-3 "
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            Home Insurance <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={homeInsurance}
                                onChange={(e) => setHomeInsurance(e.target.value)}

                            />

                        </div>
                    </div>


                    <div
                        className=" md:px-3 "
                        style={{ transition: "border-color 0.3s ease" }}
                    >
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                        >
                            PMI <span className="text-red-600 text-lg">*</span>
                        </label>
                        <div className='flex'>
                            <div className='flex justify-center items-center text-[20px]  bg-grey-lighter text-gray-500  border border-gray-500 border-r-0 rounded-r-none rounded py-3   px-4 mb-3 '>
                                <IoLogoUsd />
                            </div>
                            <input
                                className="transition-all duration-200 outline-none focus:outline-none appearance-none rounded-l-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3   px-4 mb-3 focus:border-gray-500"
                                id="grid-first-name"
                                type="number"
                                placeholder="$2,000,000.00"
                                required
                                value={pMI}
                                onChange={(e) => setPMI(e.target.value)}
                            />
                        </div>
                    </div>
                </form>

                <div className=' md:px-3'>

                    <button type='submit' onClick={handleCalculate} className='w-full  md:w-auto px-3 mb-6 md:mb-0 bg-[#FF6E00] py-2 text-white rounded-md font-semibold'>
                        Calculate
                    </button>

                </div>

            </div>
        </section>

    )
}

export default MontageCalculator