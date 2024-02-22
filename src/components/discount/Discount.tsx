import React, { useEffect, useState } from "react";

import DiscountService from "../../services/DiscountService";
import { DiscountModel } from "../../models/responses/discounts/DiscountModel";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setAction } from "../../store/slices/rentalSlice";

import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

import "./discount.css";
import { useTranslation } from "react-i18next";
interface DiscountCodeProps {}

const DiscountCode: React.FC<DiscountCodeProps> = (
  props: DiscountCodeProps
) => {
  const { discount,user } = useSelector((state: any) => state.rental);
  const [discountCode, setDiscountCode] = useState<DiscountModel>();
  const [inputCode, setInputCode] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleApplyDiscount = (e: any) => {
    setInputCode(e.target.value.toUpperCase());
  
  };

  const cancelDiscountCode = async () => {
    setDiscountCode(undefined);
  };

  useEffect(() => {
    dispatch(setAction({ discount: discountCode }));
  }, [discountCode]);

  const getByDiscountCode = async(discountCode: string) => {
    if(discountCode){
       await DiscountService.getByDiscountCode(discountCode)
      .then((response) => {
           DiscountService.getByUniqueDiscount(user.customer.id, response.data.data.id)
           .then((res) => { 
              setDiscountCode(response.data.data);
              dispatch(setAction({  discount: response.data.data}))
             
              toast.success("Code applied successfully")
          
           })
           .catch((error) => {
            toast.error(error.response.data.message)
           })
      })
      .catch((error) => {
        toast.error("Discount Code" + error.response.data.message)
      });
    }
  }


  return (
    <div className="discountContainer">
      <input
        type="text"
        id="discount-code-input"
        className="form-control"
        name="discount-code"
        value={inputCode}
        placeholder={t("enterDiscount")}
        onChange={(e) => handleApplyDiscount(e)}
      />
      <button
        type="button"
        title="."
        className="btn btn-sm btn-apply"
        onClick={() => getByDiscountCode(inputCode)}
      >
        <FiPlus />
      </button>

      
      <button
        type="button"
        title="."
        className="btn btn-sm btn-cancel"
        onClick={cancelDiscountCode}
      >
        <FaMinus />
      </button>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default DiscountCode;
