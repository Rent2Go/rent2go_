import { UserModel } from "./GetUser";

export interface GetByUserIdModel{
    message: string;
    result: boolean;
    data: UserModel;
}