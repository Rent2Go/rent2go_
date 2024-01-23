import { EmployeeModel } from "./GetEmployee";

export interface GetAllEmployeeModel{
    message: string;
    result: boolean;
    data: EmployeeModel[];
}