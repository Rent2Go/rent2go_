import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarList, Dashboard, Login, Register, Settings } from '../pages';
type Props = {}

const Router = (props: Props) => {
  return (


<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/sign-in" element={<Login />} />
  <Route path="/sign-up" element={<Register />} />
  <Route path="/cars" element={<CarList />} />
  <Route path="/settings" element={<Settings />} />
</Routes>

  )
}

export default Router