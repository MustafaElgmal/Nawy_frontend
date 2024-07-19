import { area } from "@/interfaces/area.interface";
import React from "react";
import CompoundCardDetails from "./CompoundCardDetails";

const CompundDetails = ({ area }: { area: area }) => {
  return (
    <div className="mt-[5%] px-16 py-5 space-y-5">
      {area.properties.length > 0 ? (
        <div className="space-y-2">
          <p className="text-2xl font-extrabold text-[#1E4164]">
            Compounds In {area.name}
          </p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {area.properties.map((compound) => (
          <CompoundCardDetails
            compound={compound}
            address={area.name}
            key={area.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CompundDetails;
