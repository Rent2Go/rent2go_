import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, Register, BrandPage, OurTeamPage, ContactPage, PrivacyPolicy, ReservationPage, CookiePolicy, TermsOfUse, ProfilePage } from "./pages";

import "./App.css";
import { RentalModel } from "./models/responses/rentals/GetRental";
import PrivateRoute from "./utils/PrivateRoute";
import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import ResetPassword from "./pages/ResetPasswordPage/ResetPassword";
import SuccessPage from "./pages/messagepage/SuccessPage";
import ChangePassword from "./pages/ChangePasswordPage/ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { setPageSettings } from "./store/slices/settingsSlice";
import SettingsService from "./services/SettingsService";
import {Helmet} from 'react-helmet'
import PageNotFound from "./pages/NotFoundPage/PageNotFound";
function App() {

  const settings = useSelector((state:any) => state.settings.setting);
  const dispatch = useDispatch();
  const handleSetPageSettings = async() => {
  const response =     await SettingsService.getById(1)
    dispatch(setPageSettings(response.data.data));
  };


  useEffect(() => {
    handleSetPageSettings()
  }, [])
  


  if(!settings) return <div>asdasd</div>
  
  return (
    <>
     <Helmet>
      <title>{settings.title}</title>
      <link rel="icon" href={ settings.logo}  />
    </Helmet> 
      <main>
      <OverlayLoader/>
        <Routes>
          <Route path="/"  element={<HomePage/>}  />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-in/reset-password" element={<ResetPassword />} />
          <Route path="/sign-in/change-password" element={<ChangePassword />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation/:id" element={<ReservationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<PageNotFound />} />
        
        </Routes>
      </main>
    </>
  );
}

export default App;
