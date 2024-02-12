
import { GetAllOurTeamsModel } from "../models/responses/ourTeams/GetAllOurTeams";
import axiosInstance from "../utils/axiosInsterceptors";


class OurTeamService {
    getAll(){
        return axiosInstance.get<GetAllOurTeamsModel>("ourteams")
    }
    createOurTeam(formData:FormData){
        return axiosInstance.post("ourteams",formData, {
            headers: {
                "Content-Type": "applications/json",
            }
            ,});
    }
    deleteOurTeam(id: any) {
        return axiosInstance.delete('ourteams/' + id)
    }
}

export default new OurTeamService();