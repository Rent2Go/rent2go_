import { RentalModel } from "./GetRental";

export interface GetAllRentalsModel{
    message: string;
    result: boolean;
    data: RentalModel[];
}