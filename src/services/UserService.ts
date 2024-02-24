import { AddUserRequest } from "../models/requests/user/AddUserRequest";
import { ChangePasswordRequest } from "../models/requests/user/ChangePasswordRequest";
import { ResetPasswordRequest } from "../models/requests/user/ResetPasswordRequest";
import { UpdateUserAccountSettingsRequest } from "../models/requests/user/UpdateUserAccountSettings";
import { UpdateUserLocationRequest } from "../models/requests/user/UpdateUserLocation";
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

    updateUserAccountSettings(id:number , userAccountSettings:UpdateUserAccountSettingsRequest){

        return axiosInstance.patch<UpdateResponse>('users/accountsettings/'+id,userAccountSettings)
    }

    updateUserAccountSettingsAndImage(id:number , formData:FormData){

        return axiosInstance.patch<UpdateResponse>('users/accountsettingsandimage/'+id,formData,
            {
                headers: {
                    "Content-Type": "applications/json",
                }
                ,});
        
    }

    
    updateUserLocation(id:number , userLocation:UpdateUserLocationRequest){

        return axiosInstance.patch<UpdateResponse>('users/updatelocation/'+id,userLocation)
    }

    profilPageChangePassword(id:number, profilChangePassword:any){

        return axiosInstance.patch<UpdateResponse>('users/profilchangepassword/'+id,profilChangePassword)
        
    }


   
}

export default new UserService()