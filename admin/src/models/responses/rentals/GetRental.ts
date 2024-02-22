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
  customer: {
    id: number;
    user: {
      id: number;
      name: string;
      surname: string;
      phoneNumber: string;
      email: string;
      password: string;
      birthDate: string;
      idCardNumber: string;
      address: string;
      city: {
        id: number;
        name: string;
      };
      district: {
        id: number;
        districtName: string;
        city: {
          id: number;
          name: string;
        };
      };
      role: string;
      imageUrl: string;
      active: boolean;
    };
  };
  employee: {
    id: number;
    salary: number;
    user: {
      id: number;
      name: string;
      surname: string;
      phoneNumber: string;
      email: string;
      password: string;
      birthDate: string;
      idCardNumber: string;
      address: string;
      city: {
        id: number;
        name: string;
      };
      district: {
        id: number;
        districtName: string;
        city: {
          id: number;
          name: string;
        };
      };
      role: string;
      imageUrl: string;
      active: boolean;
    };
    jobTitle: {
      id: number;
      name: string;
      departmentName: string;
    };
  };
  discount: {
    id: number;
    discountCode: string;
    percentage: number;
  };
};


