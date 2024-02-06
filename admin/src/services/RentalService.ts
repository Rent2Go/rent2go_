import { GetAllRentalsModel } from "../models/responses/rentals/GetAllRentals";
import { GetByRentalIDModel } from "../models/responses/rentals/GetByIdRental";
import { RentalModel } from "../models/responses/rentals/GetRental";
import axiosInstance from "../utils/axiosInsterceptors";

class RentalService{
    getAll(){
        return axiosInstance.get<GetAllRentalsModel>("rentals")
    }

    getById(id:number){
        return axiosInstance.get<GetByRentalIDModel>(`rentals/${id}`);
    }

}
    

export default new RentalService();