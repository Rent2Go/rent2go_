import { GetAllCustomersModel } from "../models/responses/customers/GetAllCustomers";
import { customerModel } from "../models/responses/customers/GetCustomer";
import axiosInstance from "../utils/axiosInsterceptors";

class CustomerService{
    getAll(){
        return axiosInstance.get<GetAllCustomersModel>("customers/getall")
    }

    getById(id:number){
        return axiosInstance.get<customerModel>(`employee/${id}`);
    }
}

export default CustomerService;