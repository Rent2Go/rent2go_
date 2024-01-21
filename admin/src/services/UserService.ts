import { GetAllUsersModel } from "../models/responses/users/GetAllUsers";
import { GetUserModel } from "../models/responses/users/GetUser";
import axiosInstance from "../utils/axiosInsterceptors";


class UserService{
    getAll(){
        return axiosInstance.get<GetAllUsersModel>("users/getall")
    }

    getById(id:number){
        return axiosInstance.get<GetUserModel>(`users/${id}`);
    }
}

export default UserService;