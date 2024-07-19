import { area } from "@/interfaces/area.interface";
import React from "react";

const AreaLanding = ({ area }: { area: area }) => {
  return (
    <div className="bg-[#ffffff] h-[50vh] w-full border-y border-solid  border-slate-200 flex  items-end px-16 py-5 ">
      <div className="flex space-x-5 justify-center items-center">
        <div>
          <img
            className="rounded-full h-14 w-14"
            src={area.url}
            alt="Rounded Circle Image"
          />
        </div>
        <div>
          <div className="flex space-x-3">
            <p className="text-[#1E4164] text-xl font-bold">{area.name}</p>
            <div className="bg-[#F0F0F0] text-[#212427]  px-4 py-1 rounded-lg text-center flex justify-center items-center">
              <p>Area</p>
            </div>
          </div>

          <p className="text-[#212427]">
            {area.properties.length} Compounds Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreaLanding;
