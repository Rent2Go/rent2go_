import { CustomerModel } from "./GetCustomer";

export interface GetAllCustomersModel{
    message: string;
    result: boolean;
    data: CustomerModel[];
}