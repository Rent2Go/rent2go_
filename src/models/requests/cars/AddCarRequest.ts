export interface AddCarRequest{
	kilometer: number;
	year: number;
	dailyPrice: number;
	plate: string;
	modelId: number;
	colorId: number;
	bodyType: string;
	fuelType: string;
	gearType: string;
	cylinderCount: string;
	enginePower: string;
}

export interface RootObject {
	addCarRequest: AddCarRequest;
	file: string;
}
