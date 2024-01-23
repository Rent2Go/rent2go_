import { CarModel } from "../models/responses/cars/GetCar";
import { GetAllRentalsModel } from "../models/responses/rentals/GetAllRentals";
import { RentalModel } from "../models/responses/rentals/GetRental";
import axiosInstance from "../utils/axiosInsterceptors";

class RentalService{
    getAll(){
        return axiosInstance.get<GetAllRentalsModel>("rentals/getall")
    }

    getById(id:number){
        return axiosInstance.get<RentalModel>(`rentals/${id}`);
    }

}
    

export default RentalService;