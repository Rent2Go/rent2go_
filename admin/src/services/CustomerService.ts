
import { AddResponse } from "../../../src/models/responses/AddResponse";
import { GetAllCustomerModel } from "../models/responses/customers/GetAllCustomers";
import { CustomerModel } from "../models/responses/customers/GetCustomer";
import axiosInstance from "../utils/axiosInsterceptors";

class UserService{
    getAll(){
        return axiosInstance.get<GetAllCustomerModel>("customers")
    }

    getById(id:number){
        return axiosInstance.get<CustomerModel>(`customers/${id}`);
    }
    
    createCustomer(customer:any){

        return axiosInstance.post<AddResponse>('customers',customer)
    }
}
    

export default new UserService();