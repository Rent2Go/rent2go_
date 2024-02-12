import { AddModelRequest } from "../models/requests/models/AddModelRequest";
import { UpdateModelRequest } from "../models/requests/models/UpdateModelRequest";
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

    createModel(model:AddModelRequest){
        return axiosInstance.post("models",model);
    }

    updateModel(model:UpdateModelRequest){
        return axiosInstance.put("models",model);
    }
}


export default new ModelService();