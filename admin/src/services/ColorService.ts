import { AddResponse } from "../../../src/models/responses/AddResponse";
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
        return axiosInstance.post<AddResponse>("colors",data);
    }
    delete(id:number){
        return axiosInstance.delete<AddResponse>(`colors/${id}`)
    }

}


export default new ColorService();