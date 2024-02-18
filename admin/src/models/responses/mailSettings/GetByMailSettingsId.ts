import {MailSettingsModel} from "./GetMailSettingsModel"

export interface GetByMailSettingsId {
    message: string;
    result: boolean;
    data: MailSettingsModel;
}
