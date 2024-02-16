
import { AddModelRequest } from "../models/requests/models/AddModelRequest";
import { UpdateModelRequest } from "../models/requests/models/UpdateModelRequest";
import { GetAllCitiesModel } from "../models/responses/cities/GetAllCities";
import { ModelModel } from "../models/responses/models/GetModel";
import axiosInstance from "../utils/axiosInsterceptors";

class CityService{
    getAll(){
        return axiosInstance.get<GetAllCitiesModel>("cities");
    }

    getById(id:number){
        return axiosInstance.get<GetAllCitiesModel>(`models/${id}`);
    }

 
}


export default new CityService();