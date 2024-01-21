import { GetAllCitiesModel } from "../models/responses/cities/GetAllCities";
import { CityModel } from "../models/responses/cities/GetCity";
import axiosInstance from "../utils/axiosInsterceptors";

class CityService{
    getAll(){
        return axiosInstance.get<GetAllCitiesModel>("cities/getall")
    }

    getById(id:number){
        return axiosInstance.get<CityModel>(`cities/${id}`);
    }
}

export default CityService;