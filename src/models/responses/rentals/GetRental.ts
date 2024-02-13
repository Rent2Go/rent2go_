export interface RentalModel {
    id: number;
    startDate: string;
    endDate: string;
    returnDate: string;
    startKilometer: number;
    endKilometer: number;
    totalPrice: number;
    car: {
      id: number;
      kilometer: number;
      year: number;
      dailyPrice: number;
      plate: string;
      imageUrl: string;
      model: {
        id: number;
        name: string;
        brand: {
          id: number;
          name: string;
        };
      };
      color: {
        id: number;
        name: string;
        hexCode: string;
      };
      bodyType: string;
      fuelType: string;
      gearType: string;
      cylinderCount: string;
      enginePower: string;
      active: boolean;
    };
    customerId: number;
    employeeId: number;
    discountPercentage: number;
}
