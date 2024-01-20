export interface RentalModel {
  id: number;
  startDate: string;
  endDate: string;
  returnDate: string;
  startKilometer: number;
  endKilometer: number;
  totalPrice: number;
  discountPercentage: number;
  car: {
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
  };
  employee: {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    city: string;
    district: string;
    address: string;
    salary: number;
  };
  customer: {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    nationalityId: string;
    city: string;
    district: string;
    address: string;
  };
}
