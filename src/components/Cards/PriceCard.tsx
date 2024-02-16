import React from 'react'
import { CarModel } from '../../models/responses/cars/GetCar';

type Props = {
  cars:CarModel | undefined,
  day: number
}

const PriceCard = (props: Props) => {
  let totalKdv:number=0;
  let totalPrice:number = 0;

 if(props.cars){
  totalKdv = props.cars.dailyPrice * 0.2 ;
  totalPrice = totalKdv +( props.cars.dailyPrice * props.day) ;
 }


 if(!props.cars) return <p>Lütfen Araç seç</p>
 
  return (
    <div className='priceCard'>
     <p><span><b>Unit Price : </b></span>₺ {props.cars?.dailyPrice},00</p> 
     <p><span><b>Discount : </b></span>% 10 - ₺ 289,00</p> 
     <p><span><b>Tax : </b></span>% 20 - ₺ {totalKdv}</p> 
     <p><span><b>Total Price : </b></span>₺ {totalPrice}</p> 
    </div>
  )
}

export default PriceCard