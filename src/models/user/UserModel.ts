export interface UserModel {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    birthDate: string;
    idCardNumber: string;
    address: string | null;
    city: string | null;
    district: string | null;
    role: string;
    imageUrl: string;
    customerId: number;
    active: boolean;
  }