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
    city:{
      id: number,
      name: string,

    };
    district:{
      id: number,
      districtName:string,
      city:{
        id: number,
        name: string,
  
      };
    } ;
    role: string;
    imageUrl: string;
    customer:{
      id:number;
    } 
    active: boolean;
  }