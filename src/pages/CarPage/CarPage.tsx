import React, { useEffect } from 'react'
import { CarList,Navbar,Footer } from '../../components'
import { useSelector } from 'react-redux'

type Props = {}

const CarPage = (props: Props) => {


const carsState = useSelector((state:any) => state.car);
 useEffect(() => {
  console.log(carsState);
 })

  return (
    <div>
      <Navbar/>
      
     <div className="cars container">
           <div className="secContainer">
            <div className="row">
              {carsState.cars}
              <div className="col-6">

              </div>
            </div>
           <CarList />
           </div>
     </div>


      



      <Footer/>
    </div>
  )
}

export default CarPage