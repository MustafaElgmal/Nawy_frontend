import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import CompoundCard from "./CompoundCard";
import { AppProps } from "../interfaces/App.interface";


const SliderCompound = ({ slidesPerView, compounds }: AppProps) => {
  
  return (
    <Swiper slidesPerView={slidesPerView} spaceBetween={40} >
      {compounds?.map((compound) => (
        <SwiperSlide key={compound.id}>
          <CompoundCard
            compound={compound}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCompound;
