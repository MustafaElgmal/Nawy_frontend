
import { property } from "@/interfaces/property.interface";
import React from "react";
import { useRouter } from "next/router";

const CompoundCard = ({ compound }: { compound: property }) => {
  const router = useRouter();
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[200px] w-[200px] rounded-xl flex justify-center items-end cursor-pointer"
      style={{ backgroundImage: `url(${compound.coverUrl})` }}
      onClick={()=>router.push(`/compound/${compound.name}`)}
    >
      <div className="text-center mb-5 ">
        <p className="font-extrabold text-xl text-[#FFFFFF] ">
          {compound.name}
        </p>
        <p className="font-bold text-lg text-[#8E8E8E]">
          {compound.units.length} Properties
        </p>
      </div>
    </div>
  );
};

export default CompoundCard;
