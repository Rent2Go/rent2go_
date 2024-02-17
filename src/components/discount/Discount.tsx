import React, { useState } from "react";

import DiscountService from "../../services/DiscountService";
import { DiscountModel } from "../../models/responses/discounts/DiscountModel";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

import "./discount.css";
interface DiscountCodeProps {}

const DiscountCode: React.FC<DiscountCodeProps> = (
  props: DiscountCodeProps
) => {
  const [discountCode, setDiscountCode] = useState<DiscountModel>();
  const [inputCode, setInputCode] = useState("");
  const dispatch = useDispatch();
  console.log(discountCode);

  const handleApplyDiscount = (e: any) => {
    setInputCode(e.target.value);
  };

  const getByDiscountCode = async (discountCode: string) => {
    await DiscountService.getByDiscountCode(discountCode)
      .then((response) => {
        if (response.data.data) {
          if (!response.data.data.isActive) {
            throw new Error("Discount is not active");
          }
          setDiscountCode(response.data.data);
          toast.success(response.data.data.discountCode);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="discountContainer">
      <input
        type="text"
        id="discount-code-input"
        className="form-control"
        name="discount-code"
        value={inputCode}
        placeholder="Enter Discount"
        onChange={(e) => handleApplyDiscount(e)}
      />
      <button type="button" title="." className="btn btn-sm btn-apply" onClick={() => getByDiscountCode(inputCode)}>
      <FiPlus />

      </button>
      <button type="button" title="." className="btn btn-sm btn-cancel" onClick={() => getByDiscountCode(inputCode)}>
      <FaMinus />


      </button>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default DiscountCode;
