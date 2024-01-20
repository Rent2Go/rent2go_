import { GetAllCarsModel } from "../models/responses/cars/GetAllCars";
import { CarModel } from "../models/responses/cars/GetCar";
import { GetByCarIdModel } from "../models/responses/cars/getByCarId";
import axiosInstance from "../utils/axiosInsterceptors";

class CarService{
    getAll(){
        return axiosInstance.get<GetAllCarsModel>("cars/getall")
    }

    getById(id:number){
        return axiosInstance.get<GetByCarIdModel>(`cars/${id}`);
    }
}
    

export default CarService;