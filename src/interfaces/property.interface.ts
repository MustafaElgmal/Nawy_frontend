import { area } from "./area.interface";
import { baseItems } from "./base.interface";
import { unit } from "./unit.interface";

export interface property extends baseItems {

  name: string;
  owner: string;
  coverUrl: string;
  downPaymentPercentage: number;
  numberOfYear: number;
  working_areaId: string;
  units: unit[];
  working_area:area
}

