import { UserModel } from "./UserModel";

export interface GetAllUserResponse {
	message: string;
	result: boolean;
	data: UserModel[];
}
