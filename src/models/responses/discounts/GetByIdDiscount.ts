import { DiscountModel } from "./DiscountModel";

export interface GetByDiscountIdModel {
    message: string
    result: boolean;
    data: DiscountModel;
    
    
}