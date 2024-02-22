export interface CustomerModel {
  id: number;
  nationalityId: string;
  city: string;
  district: string;
  address: string;
  user: {
    createdAt: string;
    updatedAt: any;
    deletedAt: any;
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    imageUrl: any;
    role: string;
    enabled: boolean;
    username: string;
    active: boolean;
    idCardNumber:string;
    address: string;
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
}
