import React, { useEffect, useState } from 'react';
import './style.css'
import DiscountService from '../../services/DiscountService';
import { DiscountModel } from '../../models/responses/discounts/DiscountModel';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setAction } from '../../store/slices/rentalSlice';

interface DiscountCodeProps {

}

const DiscountCode: React.FC<DiscountCodeProps> = (props:DiscountCodeProps) => {
  const {discount} = useSelector((state:any) => state.rental)
  const [discountCode, setDiscountCode] = useState<DiscountModel>();
  const [inputCode, setInputCode] = useState('');
  const dispatch = useDispatch()
  
  
  const handleApplyDiscount = (e:any) => {
   setInputCode(e.target.value.toUpperCase());
   console.log(e.target.value.toUpperCase());
   
  };

  const cancelDiscountCode = async() => {
    setDiscountCode(undefined)
 
  }

  useEffect(() => {
    dispatch(setAction({ discount: discountCode }));
  }, [discountCode]);

  

  const getByDiscountCode = async(discountCode: string) => {
    if(discountCode){
    await DiscountService.getByDiscountCode(discountCode)
      .then((response) => {
       
          setDiscountCode(response.data.data);
          dispatch(setAction({  discount: response.data.data}))
          console.log(discountCode);
       
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
  console.log(discountCode);

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
      <button onClick={cancelDiscountCode} >
        Cancel
      </button>
      <ToastContainer position='bottom-center' />
    </div>
    
  );
};

export default DiscountCode;