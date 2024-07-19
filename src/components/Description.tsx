import { unit } from "@/interfaces/unit.interface";
import { calculateMonthlyPayment } from "@/utils/functions";
import React from "react";

const Description = ({ unit }: { unit: unit }) => {
  return (
    <div className="mt-[5%] px-16 py-5 space-y-5 mb-[10%]">
      <div className="space-y-2">
        <p className="text-3xl font-extrabold text-[#1E4164]">Payment Plan</p>
        <p className="text-[#212427]">
          <span className=" text-[#1E4164] text-lg font-bold">
            {calculateMonthlyPayment(
              unit.total_price,
              unit.property.downPaymentPercentage,
              unit.property.numberOfYear
            ).toLocaleString("en-US")}{" "}
          </span>{" "}
          Monthly |{" "}
          {(
            unit.total_price * unit.property.downPaymentPercentage
          ).toLocaleString("en-US")}{" "}
          - Down Payment |{" "}
          <span className="font-semibold">
            {unit.property.numberOfYear} Years
          </span>
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-3xl font-extrabold text-[#1E4164]">
          About {unit.type}
        </p>
        <p className="text-[#212427]">
          {" "}
          A {unit.bedrooms} bedrooms {unit.type} in {unit.property.name} by{" "}
          {unit.property.owner}. The {unit.type} size is {unit.squareFootage}{" "}
          m&sup2; with {unit.bathrooms} bathrooms . This property{" "}
          {unit.isReady
            ? "Ready to move."
            : `will be ready for delivery not_finished by ${unit.deliveryDate}.`}
        </p>
      </div>
    </div>
  );
};

export default Description;
