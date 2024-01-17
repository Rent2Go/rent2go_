import { CarModel } from "./GetCar";

export interface GetAllCarsModel {
  message: string;
  result: boolean;
  data: CarModel[];
}
