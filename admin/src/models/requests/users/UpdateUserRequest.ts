export interface UpdateUserRequest {
	id:number;
	name: string;
	surname: string;
	phoneNumber: string;
	email: string;
	password:string;
	idCardNumber: string;
	birthDate: string;
	role: string;
	address?: string;
	imageUrl:string;
	active:boolean;
	districtId: number|undefined;


}