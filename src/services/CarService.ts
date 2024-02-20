import { AddCarRequest } from "../models/requests/cars/AddCarRequest";

import { UpdateCarRequest } from "../models/requests/cars/UpdateCarRequest";
import { AddResponse } from "../models/responses/AddResponse";
import { UpdateResponse } from "../models/responses/UpdateResponse";


import { GetAllCarsModel } from "../models/responses/cars/GetAllCars";
import { GetByCarIdModel } from "../models/responses/cars/getByCarId";
import axiosInstance from "../utils/axiosInsterceptors";
import { BaseService } from "./BaseService";

class CarService extends BaseService<GetAllCarsModel,GetByCarIdModel,AddCarRequest,AddResponse,UpdateCarRequest,UpdateResponse> {
    constructor(){
        super()
        this.apiUrl = "cars";
    }

    updateIsActive(id: number, isActive: boolean) {
        return axiosInstance.patch<AddResponse>('cars/isactive/' + id + "?isActive=" + isActive)
    }

    getAllActiveCars(){

            return axiosInstance.get<GetAllCarsModel>('cars/getallisactive?active='+true);

    }
    
}
    

export default new CarService();