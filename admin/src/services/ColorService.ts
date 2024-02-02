import { ColorModel } from "../models/responses/colors/ColorModel";
import { GetAllColorsModel } from "../models/responses/colors/getAllColors";
import axiosInstance from "../utils/axiosInsterceptors";

class CarService{
    getAll(){
        return axiosInstance.get<GetAllColorsModel>("cars/getall")
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`cars/${id}`);
    }
}


export default new CarService();