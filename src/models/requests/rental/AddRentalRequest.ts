import { DiscountModel } from "../../responses/discounts/DiscountModel";

export interface AddRentalRequest {
	startDate: Date;
	endDate: Date;
	carId: number;
	customerId: number;
	discount: DiscountModel;
}