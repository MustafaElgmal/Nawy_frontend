import React from "react";
import Compound from "./Compound";
import { AppProps } from "@/interfaces/App.interface";

const TopCompounds = ({compounds}:AppProps) => {
  return (
    <div className="mt-[5%] px-16 py-5 space-y-5">
      <div className="space-y-2">
        <p className="text-3xl font-extrabold text-[#1E4164]">Top Compounds</p>
        <p className="text-[#212427]">{compounds?.length} Results Available</p>
      </div>
      <Compound compounds={compounds}  />
    </div>
  );
};

export default TopCompounds;
