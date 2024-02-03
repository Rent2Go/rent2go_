import { ColorModel } from "../models/responses/colors/ColorModel";
import { GetAllColorModel } from "../models/responses/colors/GetAllColors";
import axiosInstance from "../utils/axiosInsterceptors";

class ColorService{
    getAll(){
        return axiosInstance.get<GetAllColorModel>("colors");
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`colors/${id}`);
    }
}


export default new ColorService();