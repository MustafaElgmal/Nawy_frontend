import { baseItems } from "./base.interface";
import { property } from "./property.interface";

export interface area extends baseItems{
      name: string,
      description: string,
      url: string,
      properties:property []
}