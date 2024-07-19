import { area } from "@/interfaces/area.interface";
import React from "react";

const AboutArea = ({ area }: { area: area }) => {
  return (
    <div className="mt-[2%] px-16 py-5 space-y-5">
      <div className="space-y-2">
        <p className="text-2xl font-extrabold text-[#1E4164]">
          {" "}
          About {area.name}
        </p>
        <p className="text-[#212427] font-smibold">{area.description}</p>
      </div>
    </div>
  );
};

export default AboutArea;
