import { CityModel } from "./GetCity";

export interface GetAllCarsModel {
  message: string;
  result: boolean;
  data: CityModel[];
}
