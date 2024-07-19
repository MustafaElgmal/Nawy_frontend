import React from "react";
import { useRouter } from "next/router";
import { property } from "@/interfaces/property.interface";
import { unit } from "@/interfaces/unit.interface";

const UnitCardDetails = ({
  compound,
  unit,
}: {
  compound: property;
  unit: unit;
}) => {
  const router = useRouter();
  return (
    <div
      className="h-[400px] w-[400px] rounded-xl border-y border-x  border-solid border-slate-200 cursor-pointer"
      onClick={() => router.push(`/compound/${compound.name}/unit/${unit.id}`)}
    >
      <div className="space-y-5">
        <div
          className="bg-cover bg-center bg-no-repeat h-[200px] w-full flex justify-end items-end"
          style={{ backgroundImage: `url(${unit.url})` }}
        >
          {unit.isReady ? (
            <div className="text-center py-6 px-5">
              <p className="text-[#ffffff]">Ready to</p>
              <p className="text-[#ffffff] font-bold">Move</p>
            </div>
          ) : (
            <div className="text-center py-6 px-5">
              <p className="text-[#ffffff]">Delivery in</p>
              <p className="text-[#ffffff] font-bold">{unit.deliveryDate}</p>
            </div>
          )}
        </div>
        <div className="h-[200px] max-w-full px-4">
          <p className="text-[#212427] text-xl font-semibold">
            {unit.type} - {compound.name}
          </p>
          <p className="text-[#646464]">{compound.working_area.name}, Egypt</p>
          <div className="mt-5">
            <p>{unit.bedrooms} bedrooms , {unit.bathrooms} bathrooms | {unit.squareFootage} m&sup2;</p>
          </div>
          <div className="mt-5">
            <p className="text-[#646464]">
              {(
                unit.total_price * compound.downPaymentPercentage
              ).toLocaleString("en-US")}{" "}
              Down Payment/{compound.numberOfYear} Years
            </p>
            <p className="text-[#212427] text-2xl font-bold">
              {unit.total_price.toLocaleString("en-US", {
                style: "currency",
                currency: "EGP",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCardDetails;
