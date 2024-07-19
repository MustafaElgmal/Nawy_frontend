import { unit } from "@/interfaces/unit.interface";
import React from "react";

const UnitLanding = ({ unit }: { unit: unit }) => {
  return (
    <div className="h-screen w-full rounded-xl border-b  border-solid border-slate-200 cursor-pointer mt-1 2xl:mt-[5%]">
      <div className="space-y-5 px-1 xl:px-10">
        <div
          className="bg-cover  bg-no-repeat h-[70vh] w-full"
          style={{ backgroundImage: `url(${unit.url})` }}
        ></div>
        <div className=" max-w-full px-1 xl:px-10">
          <p className="text-[#1E4164] text-xl font-extrabold">
            I-{unit.type} For Sale In {unit.property.name} With {unit.bedrooms} bedrooms In{" "}
            {unit.property.working_area.name} By {unit.property.owner}
          </p>
          <p className="text-[#646464]">
            {unit.property.name}, {unit.property.working_area.name}, Egypt
          </p>
          <div className="mt-1 xl:mt-5">
            <p className="text-[#B6B6B6] text-sm">Price</p>
            <p className="text-[#212427] text-2xl font-extrabold ms-1">
              {unit.total_price.toLocaleString("en-US")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitLanding;
