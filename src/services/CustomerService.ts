
import { AddCustomerRequest } from "../models/requests/customer/AddCustomerRequest";
import { AddResponse } from "../models/responses/AddResponse";
import { UpdateResponse } from "../models/responses/UpdateResponse";
import axiosInstance from "../utils/axiosInsterceptors";

class CustomerService {


    createCustomer(addCustomer:AddCustomerRequest){
      
        

        return axiosInstance.post<AddResponse>('customers', addCustomer)
    }
    updateCustomer(updateCustomer:any){
       
        

        return axiosInstance.patch<UpdateResponse>('customers/driverlicence', updateCustomer)
    }
}

export default new CustomerService();