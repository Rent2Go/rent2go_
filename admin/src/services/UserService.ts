import { UpdateResponse } from './../../../src/models/responses/UpdateResponse';
import { AddResponse } from './../../../src/models/responses/AddResponse';
import { GetAllUsersModel } from "../models/responses/users/GetAllUsers";
import { GetByUserIdModel } from "../models/responses/users/GetByUserId";
import { UserModel } from "../models/responses/users/GetUser";
import axiosInstance from "../utils/axiosInsterceptors";
import { UpdateUserRequest } from '../models/requests/users/UpdateUserRequest';

class UserService{
    getAll(){
        return axiosInstance.get<GetAllUsersModel>("users")
    }

    getById(id:number){
        return axiosInstance.get<GetByUserIdModel>(`users/${id}`);
    }

    getByEmail(email:string){
        return axiosInstance.get<GetByUserIdModel>('users/email?email='+email);
    }
    createUser(formData:FormData){
        return axiosInstance.post<UserModel>(`users`,formData, {
            headers: {
                "Content-Type": "applications/json",
            }
            ,});
    }

    updateUser(updateUserRequest:UpdateUserRequest){
        return axiosInstance.put<UpdateResponse>("users", updateUserRequest)
    }

    
    updateImage(FormData: FormData) {

        return axiosInstance.post<AddResponse>('users/imageupdate', FormData)
    }

    updateIsActive(id: number, isActive: boolean) {
        return axiosInstance.patch<AddResponse>('users/isactive/' + id + "?active=" + isActive)
    }

    deleteUser(id: any) {

        return axiosInstance.delete<AddResponse>('users/' + id)
    }
}
    

export default new UserService();