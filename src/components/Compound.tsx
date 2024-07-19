import React from "react";

import SliderCompound from "./SliderCompound";
import { AppProps } from "../interfaces/App.interface";


const Compound = ({ compounds }: AppProps) => {
 
  return (
    <div id="Compound">
      {" "}
      <div className="justify-center items-center xl:flex hidden">
        <SliderCompound
          slidesPerView={compounds?.length! < 4 ? compounds?.length : 4}
          compounds={compounds}
        />
      </div>
      <div className="justify-center items-center xl:hidden lg:flex hidden">
        <SliderCompound
          slidesPerView={compounds?.length! < 3 ? compounds?.length : 3}
          compounds={compounds}
        />
      </div>
      <div className="justify-center items-center xl:hidden lg:hidden sm:flex hidden ">
        <SliderCompound
          slidesPerView={compounds?.length! < 2 ? compounds?.length : 2}
          compounds={compounds}
        />
      </div>
      <div className="justify-center items-center xl:hidden lg:hidden sm:hidden flex ">
        <SliderCompound slidesPerView={1} compounds={compounds} />
      </div>
    </div>
  );
};

export default Compound;
