import { BrandModel } from "./GetBrand";


export interface GetAllBrands {
  message: string;
  result: boolean;
  data: BrandModel[];
}
