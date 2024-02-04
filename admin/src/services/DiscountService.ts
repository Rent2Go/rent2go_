import { GetAllDiscountModel } from "../models/responses/discounts/GetAllDiscounts";
import { DiscountModel } from "../models/responses/discounts/GetDiscount";
import axiosInstance from "../utils/axiosInsterceptors";

class DiscountService{
    getAll(){
        return axiosInstance.get<GetAllDiscountModel>("discounts")
    }
    getById(id:number){
        return axiosInstance.get<DiscountModel>(`discount/${id}`)
    }
}

export default new DiscountService();