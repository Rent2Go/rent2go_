import { CityModel } from "./GetCity";

export interface GetAllCitiesModel {
  message: string;
  result: boolean;
  data: CityModel[];
}
