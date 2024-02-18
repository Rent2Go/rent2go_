import { GetAllCitiesModel } from "../models/responses/cities/GetAllCities";
import { GettAllDistrictModel } from "../models/responses/districts/GetAllDistricts";
import axiosInstance from "../utils/axiosInsterceptors";

class DistrictService{
    getAll(){
        return axiosInstance.get<GettAllDistrictModel>("districts");
    }

    getById(id:number){
        return axiosInstance.get<GetAllCitiesModel>(`models/${id}`);
    }
    
}

export default new DistrictService();