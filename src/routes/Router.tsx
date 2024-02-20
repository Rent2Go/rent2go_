import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PaymentProvider } from "../contexts/PaymentContext";

import {
  CarPage,
  HomePage,
  Login,
  Register,
  BrandPage,
  OurTeamPage,
  ContactPage,
  PrivacyPolicy,
  ReservationPage,
  CookiePolicy,
  TermsOfUse,
  ProfilePage,
  NotFoundPage,
  Online,
  BankTransfer,
  Cash,
  CopyrightNotice,
  CRandComplaintProcedures,
  InsuranceInformation,
  LegalNotices,
  RentalAgreement,
  RentalConditions,
  SecurityNotices,
  TermsAndConditions,
  VehicleConditionReports,
  ResetPassword,
  ChangePassword,
  SuccessPage,
  EmailVerificationSuccess,
} from "../pages";

const Router = () => {
  return (
    <PaymentProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in/reset-password" element={<ResetPassword />} />
        <Route path="/sign-in/change-password" element={<ChangePassword />} />
        <Route path="/sign-in" element={<Register />} />

        {
          /*Backent mail doğrulama sayfası*/
        }
        <Route path="/email-verification-successful" element={<EmailVerificationSuccess />} />
        
        
        <Route path="/profile/:activepage" element={<ProfilePage />} />


        <Route path="/cars" element={<CarPage />} />
        <Route path="/brands" element={<BrandPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/copyright-notice" element={<CopyrightNotice />} />
        <Route
          path="/cr-complaint-procedures"
          element={<CRandComplaintProcedures />}
        />
        <Route path="/insurance" element={<InsuranceInformation />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/rental-agreements" element={<RentalAgreement />} />
        <Route path="/rental-conditions" element={<RentalConditions />} />
        <Route path="/security-notices" element={<SecurityNotices />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route
          path="/vehicle-condition-reports"
          element={<VehicleConditionReports />}
        />

        <Route path="/reservation/:id" element={<ReservationPage />} />
        <Route path="/payment/cash" element={<Cash />} />
        <Route path="/payment/online" element={<Online />} />
        <Route path="/payment/bankTransfer" element={<BankTransfer />} />

        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PaymentProvider>
  );
};
export default Router;
