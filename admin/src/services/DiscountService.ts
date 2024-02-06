import { GetAllDiscountModel } from "../models/responses/discounts/GetAllDiscounts";
import { DiscountModel } from "../models/responses/discounts/GetDiscount";
import { AddDiscountRequest } from "../models/requests/discounts/AddDiscountRequest";
import axiosInstance from "../utils/axiosInsterceptors";
import { AddResponse } from "../../../src/models/responses/AddResponse";

class DiscountService{
    getAll(){
        return axiosInstance.get<GetAllDiscountModel>("discounts")
    }
    getById(id:number){
        return axiosInstance.get<DiscountModel>(`discounts/${id}`)
    }
    create(data:AddDiscountRequest){
        return axiosInstance.post<AddResponse>("discounts",data)
    }
}

export default new DiscountService();