import { AddResponse } from './../../../src/models/responses/AddResponse';
import { GetAllCarsModel } from "../models/responses/cars/GetAllCars";
import { GetByCarIdModel } from "../models/responses/cars/getByCarId";
import axiosInstance from "../utils/axiosInsterceptors";

class CarService{
    getAll(){
        return axiosInstance.get<GetAllCarsModel>("cars")
    }

    getById(id:number){
        return axiosInstance.get<GetByCarIdModel>(`cars/${id}`);
    }

    addCar(formData:FormData){
        return axiosInstance.post<AddResponse>(`cars`,formData,{
            headers: {
            "Content-Type": "applications/json",
          },});
    }
}
    

export default new CarService();