import { GetAllColorModel } from './../models/responses/colors/GetAllColors';

import axiosInstance from "../utils/axiosInsterceptors";
import { ColorModel } from '../models/responses/colors/GetColor';

class ColorService{
    getAll(){
        return axiosInstance.get<GetAllColorModel>("colors/getall")
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`colors/${id}`);
    }
}
    

export default new ColorService();