
import axiosInstance from "../utils/axiosInsterceptors";
import { ColorModel } from '../models/responses/colors/GetColor';
import { GetAllColorModel } from "../models/responses/colors/getAllColors";

class ColorService{
    getAll(){
        return axiosInstance.get<GetAllColorModel>("colors")
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`colors/${id}`);
    }
}
    

export default new ColorService();