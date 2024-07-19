import { property } from "@/interfaces/property.interface";
import React from "react";

const CompoundLanding = ({ compound }: { compound: property }) => {
  return (
    <div className="h-screen w-full rounded-xl border-b  border-solid border-slate-200 cursor-pointer mt-[5%]">
      <div className="space-y-5 px-10">
        <div
          className="bg-cover  bg-no-repeat h-[70vh] w-full"
          style={{ backgroundImage: `url(${compound.coverUrl})` }}
        ></div>
        <div className="h-[200px] max-w-full px-4">
          <p className="text-[#1E4164] text-xl font-semibold">
            {compound.name} By {compound.owner}
          </p>
          <p className="text-[#646464]">{compound.working_area.name}, Egypt</p>
          {compound.units.length > 0 ? (
            <div className="mt-5">
              <p className="text-[#B6B6B6] text-sm">Prices Around</p>
              <p className="text-[#212427] text-2xl font-extrabold ms-1">
                {compound.units[0].total_price.toLocaleString("en-US")}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CompoundLanding;
