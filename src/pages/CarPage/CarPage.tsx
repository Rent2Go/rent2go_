import React from 'react'
import { CarList,Navbar,Footer } from '../../components'

type Props = {}

const CarPage = (props: Props) => {
  return (
    <div>
      <Navbar/>
      

      <CarList />



      <Footer/>
    </div>
  )
}

export default CarPage