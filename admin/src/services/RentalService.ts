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

}
    

export default new RentalService();