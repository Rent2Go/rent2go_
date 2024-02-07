import { EmployeeModel } from "./GetEmployee";

export interface GetByEmployeeIdModel{
    message: string;
    result: boolean;
    data: EmployeeModel;
}
