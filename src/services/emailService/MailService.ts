import { MailInfoModel } from "../../models/mail/MailInfıModel";
import axiosInstance from "../../utils/axiosInsterceptors";

class MailService {


    reservationSuccessful(mailInfo: MailInfoModel){
        return axiosInstance.post<void>("reservation-details",mailInfo)
    }
}

export default new MailService();