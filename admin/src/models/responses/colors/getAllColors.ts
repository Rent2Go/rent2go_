import { ColorModel } from "./ColorModel";

export interface GetAllColorsModel {

	message: string;
	result: boolean;
	data: ColorModel[];
}