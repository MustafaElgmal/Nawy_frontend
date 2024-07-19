import { area } from "../interfaces/area.interface";
import React from "react";
import { useRouter } from "next/router";

const AreaCard = ({ area }: { area: area }) => {
  const router = useRouter();
  return (
    <div className="h-[300px] w-[300px] rounded-xl border-y border-x border-10 border-solid text-center  border-slate-200 cursor-pointer flex justify-center items-center" onClick={()=>router.push(`/area/${area.name}`)}>
      <div className="space-y-5">
        <div className="flex  justify-center items-center">
          <img
            className="rounded-full h-20 w-20"
            src={area.url}
            alt="Rounded Circle Image"
          />
        </div>
        <div>
          <p className="text-black text-2xl font-extrabold">{area.name}</p>
          <p>{area.properties.length} Compounds</p>
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
