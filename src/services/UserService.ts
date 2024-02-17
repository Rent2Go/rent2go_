import { AddUserRequest } from "../models/requests/user/AddUserRequest";
import { ChangePasswordRequest } from "../models/requests/user/ChangePasswordRequest";
import { ResetPasswordRequest } from "../models/requests/user/ResetPasswordRequest";
import { UpdateUserRequest } from "../models/requests/user/UpdateUserRequest";
import { AddResponse } from "../models/responses/AddResponse";
import { UpdateResponse } from "../models/responses/UpdateResponse";
import { GetAllUserResponse } from "../models/user/GetAllUserResponse";
import { GetByIdUserResponse } from "../models/user/GetByIdResponse";
import axiosInstance from "../utils/axiosInsterceptors";
import { BaseService } from "./BaseService";

class UserService extends BaseService<GetAllUserResponse, GetByIdUserResponse, AddUserRequest, AddResponse, UpdateUserRequest, UpdateResponse>{

    constructor() {
        super()
        this.apiUrl = "users"
    }

    resetPassword(resetPasswordRequest: ResetPasswordRequest) {
        return axiosInstance.post<string>(
            `${this.apiUrl}/resetpassword`,
            resetPasswordRequest
        );
    }

    changePassword(
        changePasswordRequest: ChangePasswordRequest,
        accessToken:any
    ) {
        return axiosInstance.post<string>(
            `${this.apiUrl}/changepassword`,
            changePasswordRequest,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
    }
    getByEmail(email:string){
        return axiosInstance.get<GetByIdUserResponse>('users/email?email='+email);
    }
   
}

export default new UserService()