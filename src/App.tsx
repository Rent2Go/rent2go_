import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, Register, BrandPage, AboutUsPage, ContactPage, PrivacyPolicy } from "./pages";

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
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

  
      </main>
    </>
  );
}

export default App;
