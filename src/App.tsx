import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, Register, BrandPage, OurTeamPage, ContactPage, PrivacyPolicy, ReservationPage, CookiePolicy, TermsOfUse } from "./pages";

import "./App.css";
import { RentalModel } from "./models/responses/rentals/GetRental";
import PrivateRoute from "./utils/PrivateRoute";
import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
function App() {
  return (
    <>
      <main>
      <OverlayLoader/>
        <Routes>
          <Route path="/"  element={<HomePage/>}  />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation/:id" element={<ReservationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        
        </Routes>
      </main>
    </>
  );
}

export default App;
