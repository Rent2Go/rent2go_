import { GetAllCitiesModel } from "../models/responses/cities/GetAllCities";
import axiosInstance from "../utils/axiosInsterceptors";

class CityService{
    getAll(){
        return axiosInstance.get<GetAllCitiesModel>("cities");
    }

}

export default new CityService();