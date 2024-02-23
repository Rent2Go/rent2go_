import { GetByMailSettingsId } from './../models/responses/mailSettings/GetByMailSettingsId';
import { UpdateMailSettingsRequest } from "../models/requests/mailSettings/UpdateMailSettingsRequest";
import { MailSettingsModel } from "../models/responses/mailSettings/GetMailSettingsModel";
import axiosInstance from "../utils/axiosInsterceptors";


class MailSettingService {
    getById () {
        return axiosInstance.get<GetByMailSettingsId>(`mail-configuration`)
    }

    updateMailSettings (mailSettings:UpdateMailSettingsRequest) {
        return axiosInstance.put("mail-configuration", mailSettings)
    }
    
}

export default new MailSettingService();