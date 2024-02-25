import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PaymentProvider } from "../contexts/PaymentContext";

import {
  CarPage,
  HomePage,
  Register,
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
  VerificationSuccessful,
  SuccessfulPayment,
  SuccessfulResetPassword,
  FailedPayment,
  VerificationFailed,
  VerificationExpired,
  VerificationAlreadyVerified,
  TutorialPage,
} from "../pages";
import PrivateRoute from "../utils/PrivateRoute";
import Successful from "../pages/ResponsePages/ResetPasswordResponse/Successful";
import BeforeCash from "../pages/PaymentPage/BeforeCash";

const Router = () => {
  return (
    <PaymentProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/*auth pages */}
        <Route path="/sign-in/reset-password" element={<ResetPassword />} />
        <Route path="/sign-in/change-password" element={<ChangePassword />} />
        <Route path="/sign-in" element={<Register />} />

        {/*navbar pages */}
        <Route path="/profile/:activepage" element={<PrivateRoute element={<ProfilePage/>}/>} />
        <Route path="/cars" element={<CarPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        
        {/*legal pages */}
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/copyright-notice" element={<CopyrightNotice />} />
        <Route path="/cr-complaint-procedures" element={<CRandComplaintProcedures />}/>
        <Route path="/insurance" element={<InsuranceInformation />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/rental-agreements" element={<RentalAgreement />} />
        <Route path="/rental-conditions" element={<RentalConditions />} />
        <Route path="/security-notices" element={<SecurityNotices />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/vehicle-condition-reports" element={<VehicleConditionReports />}/>

        {/*payment & reservation pages */}
        <Route path="/reservation/:id" element={<ReservationPage />} />
        <Route path="/payment/cash-payment-confirmation" element={<PrivateRoute element={<BeforeCash/>}/>} />
        <Route path="/payment/cash" element={<PrivateRoute element={<Cash/>}/>} />
        <Route path="/payment/online" element={<PrivateRoute element={<Online/>}/>} />
        <Route path="/payment/bankTransfer" element={<PrivateRoute element={<BankTransfer/>}/>} />

        {/*response pages */}
        <Route path="/payment-successful" element={<SuccessfulPayment />} />
        <Route path="/payment-failed" element={<FailedPayment />} />
        <Route path="/reset-password-successful" element={<SuccessfulResetPassword />}/>
        <Route path="/password-change-successful" element={<Successful/>}/>
        <Route path="/email-verification-successful" element={<VerificationSuccessful />}/>
        <Route path="/email-verification-failed" element={<VerificationFailed />}/>
        <Route path="/email-verification-expired" element={<VerificationExpired />}/>
        <Route path="/email-verification-already-verified" element={<VerificationAlreadyVerified />}/>
      </Routes>
    </PaymentProvider>
  );
};
export default Router;
