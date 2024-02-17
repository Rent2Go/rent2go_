import React, { useState } from 'react';
import './style.css'
import DiscountService from '../../services/DiscountService';
import { DiscountModel } from '../../models/responses/discounts/DiscountModel';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

interface DiscountCodeProps {

}

const DiscountCode: React.FC<DiscountCodeProps> = (props:DiscountCodeProps) => {
  const [discountCode, setDiscountCode] = useState<DiscountModel>();
  const [inputCode, setInputCode] = useState('');
  const dispatch = useDispatch()
  console.log(discountCode);
  
  const handleApplyDiscount = (e:any) => {
   setInputCode(e.target.value);
  };

  

  const getByDiscountCode = async(discountCode: string) => {
    await DiscountService.getByDiscountCode(discountCode)
      .then((response) => {
        if (response.data.data) {
          if (!response.data.data.isActive ) {
            throw new Error('Discount is not active');
          }
          setDiscountCode(response.data.data);
          toast.success(response.data.data.discountCode)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  return (
    <div className="discount-code">
      <label htmlFor="discount-code-input">Enter your discount code:</label>
      <input
        type="text"
        id="discount-code-input"
        name="discount-code"
        value={inputCode}
        onChange={(e) => handleApplyDiscount(e)}
      />
      <button onClick={()=> getByDiscountCode(inputCode)} >
        Apply
      </button>
      <ToastContainer position='bottom-center' />
    </div>
    
  );
};

export default DiscountCode;