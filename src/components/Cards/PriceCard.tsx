import React from 'react'
import { CarModel } from '../../models/responses/cars/GetCar';

type Props = {cars:CarModel | undefined }

const PriceCard = (props: Props) => {
 
  return (
    <div className='priceCard'>
     <p><span><b>Unit Price : </b></span>₺ {props.cars?.dailyPrice},00</p> 
     <p><span><b>Discount : </b></span>% 10 - ₺ 289,00</p> 
     <p><span><b>Tax : </b></span>% 8 - ₺ 231,2</p> 
     <p><span><b>Total Price : </b></span>₺ 19.824,00</p> 
    </div>
  )
}

export default PriceCard