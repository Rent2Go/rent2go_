import { AddResponse } from "../../../src/models/responses/AddResponse";
import { UpdateRentalRequest } from "../models/requests/rentals/UpdateRentalRequest";
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
    updateRental(updateRentalRequest: UpdateRentalRequest) {
        return axiosInstance.put<AddResponse>(`rentals`, updateRentalRequest);
    }
    vehicleDelivery(updateRentalRequest: UpdateRentalRequest) {
        return axiosInstance.patch<AddResponse>(`rentals/vehicle-delivery`, updateRentalRequest);
    }
    updateIsActive(id: number, isActive: boolean) {
        return axiosInstance.patch<AddResponse>('rentals/isactive/' + id + "?isActive=" + isActive)
    }

    deleteCar(id: any) {

        return axiosInstance.delete<AddResponse>('rentals/' + id)
    }


}
    

export default new RentalService();