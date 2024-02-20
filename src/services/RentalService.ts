import { AddRentalRequest } from "../models/requests/rental/AddRentalRequest";
import { UpdateResponse } from "../models/responses/UpdateResponse";
import { AddRentalResponse } from "../models/responses/rentals/AddRentalResponse";
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

        return axiosInstance.post<AddRentalResponse>('rentals',rental);

    }
    deleteById(id:number){
    

        return axiosInstance.delete<UpdateResponse>(`rentals/${id}`)
    }


}
    

export default new RentalService();