import { UpdateSettingsRequest } from './../models/requests/settings/UpdateSettingsRequest';
import { UpdateResponse } from './../../../src/models/responses/UpdateResponse';
import { AddResponse } from './../../../src/models/responses/AddResponse';
import { GetAllUsersModel } from "../models/responses/users/GetAllUsers";
import { GetByUserIdModel } from "../models/responses/users/GetByUserId";
import { UserModel } from "../models/responses/users/GetUser";
import axiosInstance from "../utils/axiosInsterceptors";
import { UpdateUserRequest } from '../models/requests/users/UpdateUserRequest';
import { GetSettingsResponse } from '../models/responses/settings/GetSettingsResponse';

class SettingsService{
    getAll(){
        return axiosInstance.get<GetSettingsResponse>("settings")
    }

    getById(id:number){
        return axiosInstance.get<GetSettingsResponse>(`settings/${id}`);
    }

    updateSettings(updateSettings:UpdateSettingsRequest){
        return axiosInstance.put<GetSettingsResponse>(`settings`,updateSettings);
    }
    updateSettingsAndImage(formData:FormData){
        return axiosInstance.put<GetSettingsResponse>(`settings/settingsimage`,formData, {
            headers: {
                "Content-Type": "applications/json",
            },
        });
    }

   
}
    

export default new SettingsService();