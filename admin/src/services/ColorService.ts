<<<<<<< HEAD
import { ColorModel } from "../models/responses/colors/ColorModel";
import { GetAllColorsModel } from "../models/responses/colors/getAllColors";
import axiosInstance from "../utils/axiosInsterceptors";

class CarService{
    getAll(){
        return axiosInstance.get<GetAllColorsModel>("colors");
=======
import { GetAllColorModel } from './../models/responses/colors/GetAllColors';

import axiosInstance from "../utils/axiosInsterceptors";
import { ColorModel } from '../models/responses/colors/GetColor';

class ColorService{
    getAll(){
        return axiosInstance.get<GetAllColorModel>("colors")
>>>>>>> b1d0ae77288bca4482596b802dc15a51a14cc82c
    }

    getById(id:number){
        return axiosInstance.get<ColorModel>(`colors/${id}`);
    }
}
<<<<<<< HEAD


export default new CarService();
=======
    

export default new ColorService();
>>>>>>> b1d0ae77288bca4482596b802dc15a51a14cc82c
