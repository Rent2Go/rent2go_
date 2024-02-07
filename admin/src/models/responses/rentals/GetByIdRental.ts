import { RentalModel } from "./GetRental";

export interface GetByRentalIDModel{
    message: string;
    result: boolean;
    data: RentalModel;
}