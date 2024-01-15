import React from "react";
import {
  Footer,

} from "./components";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, Register, BrandPage } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <main>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/brands" element={<BrandPage />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
