import { DiscountModel } from "./GetDiscount";

export interface GetAllDiscountModel{
    message : string;
    result : string;
    data : DiscountModel[];
}