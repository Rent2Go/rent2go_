export interface CarModel{
    id: number;
	kilometer: number;
	year: number;
	dailyPrice: number;
	plate: string;
	imageUrl: string;
	colorName: string;
	bodyType: string;
	fuelType: string;
	gearType: string;
	cylinderCount: string;
	enginePower: string;
	model:{
		id:number,
		brandName:string,
		name:string
	}
	
}