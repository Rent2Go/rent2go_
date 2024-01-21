import { UserModel } from "./GetUser";

export interface GetAllUsersModel{
    message : string;
    result  : string;
    data    : UserModel[];
}