"use client";
import PageHeading from "@/components/Common/PageHeading";
import Container from "@/components/Containers/Container";
import React, { FormEvent, useState } from "react";

type Props = {};

const mortgageCalculator = (props: Props) => {
  const [propertyPrice, setPropertyPrice] = useState<string>("");
  const [downPayment, setDownPayment] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [years, setYears] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const calculateMortgage = (e: FormEvent) => {
    e.preventDefault();
    const principalAmount = parseFloat(propertyPrice) - parseFloat(downPayment);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(years) * 12;

    const part1 = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const monthly =
      (principalAmount * part1 * monthlyInterestRate) / (part1 - 1);

    setMonthlyPayment(monthly.toFixed(2));
    setShowResults(true);
  };

  return (
    <section>
      <PageHeading
        imageSrc="assets/ourculture/asset 1.webp"
        heading="Mortgage Calculator"
      />
      <Container className="flex m-auto justify-center my-14 md:my-16">
        <div className="left w-full md:w-[60%] flex flex-col gap-8">
          <div className="heading">
            <h2 className="font-poppins text-[30px] md:text-[48px] text-[#2d2d2d] font-[700] uppercase md:leading-[50px]">
              HOW MUCH HOUSE CAN YOU AFFORD?{" "}
            </h2>
          </div>
          <form
            action=""
            className="rounded-lg  md:py-4"
            onSubmit={calculateMortgage}
          >
            <div className="-mx-3 md:flex mb-2">
              <div
                className="md:w-1/2 px-3 mb-6 md:mb-0"
                style={{ transition: "border-color 0.3s ease" }}
              >
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Property Price <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                  id="grid-first-name"
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(e.target.value)}
                  placeholder="$2,000,000.00"
                  required
                />
              </div>
              <div
                className="md:w-1/2 px-3 mb-6 md:mb-0"
                style={{ transition: "border-color 0.3s ease" }}
              >
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Downpayment <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="$3,000,000.00"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div
                className="md:w-1/2 px-3 mb-6 md:mb-0"
                style={{ transition: "border-color 0.3s ease" }}
              >
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  Length of Mortgage{" "}
                  <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                  id="grid-phone"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="30 Years"
                  name="phone"
                  required
                />
              </div>
              <div
                className="md:w-1/2 px-3 mb-6 md:mb-0"
                style={{ transition: "border-color 0.3s ease" }}
              >
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Annual Interest Rate{" "}
                  <span className="text-red-600 text-lg">*</span>
                </label>
                <input
                  className="transition-all duration-200 outline-none focus:outline-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:border-gray-500"
                  id="grid-email"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="3%"
                  required
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="calculations-amortization" />
              <label
                htmlFor="calculations-amortization"
                className="text-[18px] text-[#2d2d2d] font-bold font-poppins"
              >
                Show me the calculations and amortization
              </label>
            </div>
            <div className="text-[14px] font-poppins text-[#2d2d2d] my-6">
              THIS MORTGAGE CALCULATOR CAN BE USED TO FIGURE OUT MONTHLY
              PAYMENTS OF A HOME MORTGAGE LOAN, BASED ON THE HOME'S SALE PRICE,
              THE TERM OF THE LOAN DESIRED, BUYER'S DOWN PAYMENT PERCENTAGE, AND
              THE LOAN'S INTEREST RATE.
            </div>
            <button
              type="submit"
              className="bg-black mb-4 py-3 font-bold px-10 w-full font-poppins text-white"
            >
              CALCULATE
            </button>
            {showResults && (
              <p className="text-[18px] font-poppins text-[#2d2d2d] my-6">
                Monthly Payment: <strong>${monthlyPayment}</strong>
              </p>
            )}
          </form>

          {/* This One hidden before calculate */}
        </div>
      </Container>
    </section>
  );
};

export default mortgageCalculator;
