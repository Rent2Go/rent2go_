
import { AddModelRequest } from "../models/requests/models/AddModelRequest";
import { UpdateModelRequest } from "../models/requests/models/UpdateModelRequest";
import { GetAllCitiesModel } from "../models/responses/cities/GetAllCities";
import { GettAllDistrictModel } from "../models/responses/districts/GetAllDistrict";
import { ModelModel } from "../models/responses/models/GetModel";
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