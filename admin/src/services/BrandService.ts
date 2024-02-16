import { AddResponse } from "../../../src/models/responses/AddResponse";
import { AddBrandRequest } from "../models/requests/brands/AddBrandRequest";
import { GetAllBrands } from "../models/responses/brands/GetAllBrands";
import { BrandModel } from "../models/responses/brands/GetBrand";
import axiosInstance from "../utils/axiosInsterceptors";

class BrandService{
    getAll(){
        return axiosInstance.get<GetAllBrands>("brands/getallisactive?isActive=true")
    }

    getById(id:number){
        return axiosInstance.get<BrandModel>(`brands/${id}`)
    }

    createBrand(addBrandRequest:AddBrandRequest){

        return axiosInstance.post<AddResponse>('brands', addBrandRequest)


    }
    deleteBrand(id:number){
        return axiosInstance.delete<AddResponse>(`brands/${id}`)
    }
}
    

export default new BrandService();