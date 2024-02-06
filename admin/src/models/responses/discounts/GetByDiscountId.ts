import { DiscountModel } from "./GetDiscount";

export interface GetByDiscountIdModel{
    message : string;
    result : string;
    data : DiscountModel;
}