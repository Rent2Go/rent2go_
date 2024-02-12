import {OurTeamModel} from "./GetOurTeams";

export interface GetAllOurTeamsModel{
    message: string;
    result: boolean;
    data: OurTeamModel[];
}