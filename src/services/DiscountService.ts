import { GetByDiscountIdModel } from "../models/responses/discounts/GetByIdDiscount";
import axiosInstance from "../utils/axiosInsterceptors";



class DiscountService {


   getByDiscountCode(discountCode: String) {



      return axiosInstance.get<GetByDiscountIdModel>('discounts/code/' + discountCode)
   }

   getById(id: number) {
      return axiosInstance.get<GetByDiscountIdModel>(`discounts/${id}`);
   }
   getByUniqueDiscount(customerId:number, discountId:number) {
      return axiosInstance.get<GetByDiscountIdModel>(`rentals/uniquediscount/${discountId}`,{
         params: {
             customer: customerId
         }
     });
   }


}

export default new DiscountService();