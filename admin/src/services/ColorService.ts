import { ColorModel } from "../models/responses/colors/ColorModel";
import { GetAllColorsModel } from "../models/responses/colors/getAllColors";
import axiosInstance from "../utils/axiosInsterceptors";

class CarService{
    getAll(){
        return axiosInstance.get<GetAllColorsModel>("colors");
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`colors/${id}`);
    }
}


export default new CarService();