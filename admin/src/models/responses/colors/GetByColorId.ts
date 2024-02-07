import { ColorModel } from "./GetColor";

export interface GetByColorIdModel{
    message: string;
    result: boolean;
    data: ColorModel;
}