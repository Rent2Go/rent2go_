import React from "react";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, Register, BrandPage, OurTeamPage, ContactPage, PrivacyPolicy, ReservationPage, CookiePolicy, TermsOfUse, ProfilePage } from "./pages";

import "./App.css";
import { RentalModel } from "./models/responses/rentals/GetRental";
import PrivateRoute from "./utils/PrivateRoute";
import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";
import SuccessPage from "./pages/messagepage/SuccessPage";
import ChangePassword from "./pages/ChangePasswordPage/ChangePassword";
function App() {
  return (
    <>
      <main>
      <OverlayLoader/>
        <Routes>
          <Route path="/"  element={<HomePage/>}  />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-in/reset-password" element={<ResetPassword />} />
          <Route path="/sign-in/change-password" element={<ChangePassword />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile/:activepage" element={<ProfilePage />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation/:id" element={<ProfilePage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/success" element={<SuccessPage />} />
        
        </Routes>
      </main>
    </>
  );
}

export default App;
