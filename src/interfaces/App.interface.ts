import { area } from "./area.interface";
import { property } from "./property.interface";

export interface AppProps {
  name?: string;
  number?: number;
  url?: string;
  data?: {
    properties: property[];
    area: area[];
  };
  compounds?: property[];
  slidesPerView?: number;
  area?:area[]
}
