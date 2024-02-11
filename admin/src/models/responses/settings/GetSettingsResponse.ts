import { SettingsModel } from "./SettingsModel";

export interface GetSettingsResponse {

	message: string;
	result: boolean;
	data: SettingsModel;
}

