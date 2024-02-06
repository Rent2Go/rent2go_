import { BrandModel } from "./GetBrand";

export interface GetByBrandIdModel {
    message: string;
    result: boolean;
    data: BrandModel;
}