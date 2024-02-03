import { GetAllBrands } from "../models/responses/brands/GetAllBrands";
import { BrandModel } from "../models/responses/brands/GetBrand";
import axiosInstance from "../utils/axiosInsterceptors";

class BrandService{
    getAll(){
        return axiosInstance.get<GetAllBrands>("brands")
    }

    getById(id:number){
        return axiosInstance.get<BrandModel>(`brands/${id}`)
    }
}
    

export default new BrandService();