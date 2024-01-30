import { AddCarRequest } from "../models/requests/cars/AddCarRequest";

import { UpdateCarRequest } from "../models/requests/cars/UpdateCarRequest";
import { AddResponse } from "../models/responses/AddResponse";
import { UpdateResponse } from "../models/responses/UpdateResponse";


import { GetAllCarsModel } from "../models/responses/cars/GetAllCars";
import { GetByCarIdModel } from "../models/responses/cars/getByCarId";
import { BaseService } from "./BaseService";

class CarService extends BaseService<GetAllCarsModel,GetByCarIdModel,AddCarRequest,AddResponse,UpdateCarRequest,UpdateResponse> {
    constructor(){
        super()
        this.apiUrl = "cars";
    }
    
}
    

export default new CarService();