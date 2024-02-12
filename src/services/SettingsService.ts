import { UpdateSettingsRequest } from './../../admin/src/models/requests/settings/UpdateSettingsRequest';
import { GetSettingsResponse } from './../../admin/src/models/responses/settings/GetSettingsResponse';
import axiosInstance from "../utils/axiosInsterceptors";


class SettingsService{
    // getAll(){
    //     return axiosInstance.get<GetAllUsersModel>("users")
    // }

    getById(id:number){
        return axiosInstance.get<GetSettingsResponse>("settings/"+id);
    }

    
   
}
    

export default new SettingsService();