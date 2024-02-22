import { UpdateSettingsRequest } from './../models/requests/settings/UpdateSettingsRequest';
import axiosInstance from "../utils/axiosInsterceptors";
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