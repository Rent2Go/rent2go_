import { CustomerModel } from "./GetCustomer";

export interface GetByCustomerIdModel{
    message: string;
    result: boolean;
    data: CustomerModel;
}