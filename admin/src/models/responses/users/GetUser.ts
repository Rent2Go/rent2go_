export interface UserModel {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: string;
    active: boolean;
    imageUrl?: any;
  }