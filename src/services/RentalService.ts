import { AddRentalRequest } from "../models/requests/rental/AddRentalRequest";
import { AddResponse } from "../models/responses/AddResponse";
import { CarModel } from "../models/responses/cars/GetCar";
import { GetAllRentalsModel } from "../models/responses/rentals/GetAllRentals";
import { RentalModel } from "../models/responses/rentals/GetRental";
import axiosInstance from "../utils/axiosInsterceptors";

class RentalService{
    getAll(){
        return axiosInstance.get<GetAllRentalsModel>("rentals")
    }

    getById(id:number){
        return axiosInstance.get<RentalModel>(`rentals/${id}`);
    }
    addRental(rental:AddRentalRequest){

        return axiosInstance.post<AddResponse>('rentals',rental);

    }

}
    

export default new RentalService();