import { CarModel } from "./GetCar";

export interface GetByCarIdModel {
  message: string;
  result: boolean;
  data: CarModel;
}
