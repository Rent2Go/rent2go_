
import { GetAllEmployeeModel } from "../models/responses/employees/GetAllEmployees";
import { EmployeeModel } from "../models/responses/employees/GetEmployee";
import axiosInstance from "../utils/axiosInsterceptors";

class EmployeeService{
    getAll(){
        return axiosInstance.get<GetAllEmployeeModel>("employees")
    }

    getById(id:number){
        return axiosInstance.get<EmployeeModel>(`employees/${id}`);
    }
}
    

export default new EmployeeService();