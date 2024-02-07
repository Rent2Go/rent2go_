import { AddColorRequest } from "../models/requests/colors/AddColorRequest";
import { ColorModel } from "../models/responses/colors/ColorModel";
import { GetAllColorModel } from "../models/responses/colors/getAllColors";
import axiosInstance from "../utils/axiosInsterceptors";

class ColorService{
    getAll(){
        return axiosInstance.get<GetAllColorModel>("colors");
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`colors/${id}`);
    }

    addColor(data:AddColorRequest){
        return axiosInstance.post<AddColorRequest>("colors",data);
    }

}


export default new ColorService();