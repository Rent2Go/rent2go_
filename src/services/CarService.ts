import { AddCarRequest } from "../models/requests/cars/AddCarRequest";

import { UpdateCarRequest } from "../models/requests/cars/UpdateCarRequest";
import { AddCarResponse } from "../models/responses/cars/AddCarResponse";
import { GetAllCarsModel } from "../models/responses/cars/GetAllCars";
import { UpdateCarResponse } from "../models/responses/cars/UpdateCarResponse";
import { GetByCarIdModel } from "../models/responses/cars/getByCarId";
import { BaseService } from "./BaseService";

class CarService extends BaseService<GetAllCarsModel,GetByCarIdModel,AddCarRequest,AddCarResponse,UpdateCarRequest,UpdateCarResponse> {
    constructor(){
        super()
        this.apiUrl = "cars";
    }
    
}
    

export default new CarService();