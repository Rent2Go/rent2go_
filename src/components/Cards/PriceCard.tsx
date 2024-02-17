import React, { useEffect } from 'react'
import { CarModel } from '../../models/responses/cars/GetCar';
import { useDispatch, useSelector } from 'react-redux';
import { setAction } from '../../store/slices/rentalSlice';
import { PriceCardModel } from '../../models/requests/reservation/PriceCardModel';

type Props = {
  cars: CarModel | undefined,
  day: number
}

const PriceCard = (props: Props) => {
  const { discount } = useSelector((state: any) => state.rental)
  const dispatch = useDispatch()
  let totalKdv: number = 0;
  let totalPrice: number = 0;
  let discountRate: number = 0;
 

 
    if (props.cars) {
      totalKdv = props.cars.dailyPrice * 0.2;
      totalPrice = (totalKdv + (props.cars.dailyPrice * props.day));
      if (discount && discount.percentage > 0) {
        discountRate = (totalKdv + (props.cars.dailyPrice * props.day)) * discount.percentage;
        totalPrice = totalPrice - discountRate ;
      }
    }

  const priceCards: PriceCardModel = {
    totalKdv: totalKdv,
    totalPrice: totalPrice,
    discountRate: discountRate,
  

  }

  useEffect(() => {
  
    dispatch(setAction({ priceCard: priceCards }))
  }, [totalPrice,discountRate]);

  if (!props.cars) return <p>Lütfen Araç seç</p>

  return (
    <div className='priceCard'>
      <p><span><b>Unit Price : </b></span>₺ {props.cars?.dailyPrice},00</p>
      <p><span><b>Tax : </b></span>% 20 - ₺ {totalKdv}</p>
      { discount &&  <p><span><b>Discount : </b></span>% {discount.percentage * 100} - ₺ {discountRate.toFixed(2)}</p>}
      <p><span><b>Total Price : </b></span>₺ {totalPrice}</p>
    
    
    </div>
  )
}

export default PriceCard