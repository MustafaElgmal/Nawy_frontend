
import React from "react";
import AreaCard from "./AreaCard";
import { AppProps } from "../interfaces/App.interface";

const TopArea = ({ area }: AppProps) => {
  return (
    <div className="mt-[5%] px-16 py-5 space-y-5">
      <div className="space-y-2">
        <p className="text-3xl font-extrabold text-[#1E4164]">Top Areas</p>
        <p className="text-[#212427]">{area?.length} Results Available</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {area?.map((area) => (
          <AreaCard area={area} key={area.id} />
        ))}
      </div>
    </div>
  );
};

export default TopArea;
