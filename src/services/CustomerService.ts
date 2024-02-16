
import { AddCustomerRequest } from "../models/requests/customer/AddCustomerRequest";
import { AddResponse } from "../models/responses/AddResponse";
import axiosInstance from "../utils/axiosInsterceptors";

class CustomerService {


    createCustomer(addCustomer:AddCustomerRequest){
        console.log(addCustomer.userId);
        

        return axiosInstance.post<AddResponse>('customers', addCustomer)
    }
}

export default new CustomerService();