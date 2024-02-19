import { CreditCardModel } from "../models/requests/payment/CreditCardModel";
import axiosInstance from "../utils/axiosInsterceptors";


class PaymentService {


    checkCreditCard(creditCard:CreditCardModel){

        return axiosInstance.post<boolean>('creditcard/checkpayment',creditCard)
    }


    
}
export default new PaymentService();