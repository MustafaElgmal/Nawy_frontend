import { property } from "../interfaces/property.interface";
import { useRouter } from "next/router";
import React from "react";

const CompoundCardDetails = ({
  compound,
  address,
}: {
  compound: property;
  address: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="h-[400px] w-[400px] rounded-xl border-y border-x  border-solid border-slate-200 cursor-pointer"
      onClick={() => router.push(`/compound/${compound.name}`)}
    >
      <div className="space-y-5">
        <div
          className="bg-cover bg-center bg-no-repeat h-[200px] w-full"
          style={{ backgroundImage: `url(${compound.coverUrl})` }}
        ></div>
        <div className="h-[200px] max-w-full px-4 py-1">
          <p className="text-[#212427] text-xl font-semibold">
            {compound.name}
          </p>
          <p className="text-[#646464]">{address}, Egypt</p>
          {compound.units.length > 0 ? (
            <p className="text-[#646464]">
              {(
                compound.units[0].total_price * compound.downPaymentPercentage
              ).toLocaleString("en-US")}{" "}
              Down Payment/{compound.numberOfYear} Years
            </p>
          ) : (
            <p className="text-[#646464]">
              {(compound.downPaymentPercentage * 100)} % Down
              Payment/{compound.numberOfYear} Years
            </p>
          )}
          {compound.units.length > 0 ? (
            <p className="text-[#212427] text-2xl font-bold">
              {compound.units[0].total_price.toLocaleString("en-US")}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CompoundCardDetails;
