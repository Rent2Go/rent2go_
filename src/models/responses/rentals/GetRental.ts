export interface RentalModel {
	id: number;
	startDate: string;
	endDate: string;
	returnDate: string;
	startKilometer: number;
	endKilometer: number;
	totalPrice: number;
	carId: number;
	customerId: number;
	employeeId: number;
	discountPercentage: number;
}