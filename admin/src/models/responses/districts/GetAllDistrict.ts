import { DistrictModel } from "./GetDistrict";

export interface GettAllDistrictModel {
	message: string;
	result: boolean;
	data: DistrictModel[];
}
