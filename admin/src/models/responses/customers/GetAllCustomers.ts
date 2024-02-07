import { CustomerModel } from "./GetCustomer";

export interface GetAllCustomerModel{
    message: string;
    result: boolean;
    data: CustomerModel[];
}