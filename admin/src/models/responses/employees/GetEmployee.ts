export interface EmployeeModel {

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
    role: string;
    imageUrl: string;
    active: boolean;
    city: {
      id: number;
      cityName: string;
    };
    district: {
      id: number;
      districtName: string;
      cityId: number;
    };
  };
  jobTitle: {
    id: number;
    name: string;
    departmentName: string;
  };


}

