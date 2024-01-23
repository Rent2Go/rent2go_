import { UserModel } from "./GetUser";

export interface GetAllUsersModel{
    message: string;
    result: boolean;
    data: UserModel[];
}