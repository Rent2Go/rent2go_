import { GetAllModels } from "../models/responses/models/GetAllModels";
import { ModelModel } from "../models/responses/models/GetModel";
import axiosInstance from "../utils/axiosInsterceptors";

class ModelService{
    getAll(){
        return axiosInstance.get<GetAllModels>("models");
    }

    getById(id:number){
        return axiosInstance.get<ModelModel>(`models/${id}`);
    }
}


export default new ModelService();