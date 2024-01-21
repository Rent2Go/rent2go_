import { GetUserModel } from "./GetUser";

export interface GetAllUsersModel{
    message : string;
    result  : string;
    data    : GetUserModel[];
}