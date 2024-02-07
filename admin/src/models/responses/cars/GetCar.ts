export interface CarModel {
	id: number;
	kilometer: number;
	year: number;
	dailyPrice: number;
	plate: string;
	imageUrl: string;
	color: {
		id: number,
		name: string,
		hexCode: string,
	}
	bodyType: string;
	fuelType: string;
	gearType: string;
	cylinderCount: string;
	enginePower: string;
	model: {
		id: number,
		name: string,
		brand:{
			id: number,
			name: string,
		}

	}

}