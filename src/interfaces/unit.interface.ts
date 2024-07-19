import { baseItems } from "./base.interface";
import { property } from "./property.interface";

export interface unit extends baseItems {
  type: string;
  url: string;
  isReady: boolean;
  deliveryDate: string | null;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  total_price: number;
  propertyId: string;
  property:property
}
