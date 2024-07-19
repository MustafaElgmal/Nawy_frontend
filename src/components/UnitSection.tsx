import { property } from "@/interfaces/property.interface";
import React from "react";
import UnitCardDetails from "./UnitCardDetails";

const UnitSection = ({ compound }: { compound: property }) => {
  return (
    <div className="mt-[5%] px-16 py-5 space-y-5">
      {compound.units.length > 0 ? (
        <div className="space-y-2">
          <p className="text-2xl font-extrabold text-[#1E4164]">
            Explore Properties In {compound.name}
          </p>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {compound.units.map((unit) => (
          <UnitCardDetails compound={compound} unit={unit} key={unit.id} />
        ))}
      </div>
    </div>
  );
};

export default UnitSection;
