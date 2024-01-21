import { GetAllCustomersModel } from "../models/responses/customers/GetAllCustomers";
import { CustomerModel } from "../models/responses/customers/GetCustomer";
import axiosInstance from "../utils/axiosInsterceptors";

class CustomerService{
    getAll(){
        return axiosInstance.get<GetAllCustomersModel>("customers/getall")
    }

    getById(id:number){
        return axiosInstance.get<CustomerModel>(`employee/${id}`);
    }
}

export default CustomerService;