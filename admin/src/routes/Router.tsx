import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  AddCar,
  AddCustomer,
  AddEmployee,
  AddRental,
  AddUser,
  Dashboard,
  DetailCar,
  DetailCustomer,
  DetailEmployee,
  DetailRental,
  DetailUser,
  ListCar,
  ListCustomer,
  ListEmployee,
  ListRental,
  ListUser,
  Login,
  Permissions,
  Profile,
  ResetPassword,
  Settings,
  MailSettings,
  UpdateCar,
  UpdateCustomer,
  UpdateEmployee,
  UpdateRental,
  UpdateUser,
  Colors,
  Discounts,
  Brands,
  ListOurTeam,
  AddOurTeam,
} from "../pages";
import PrivateRoute from "../utils/PrivateRoute";
import Models from "../pages/Models/Models";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/cars" element={<ListCar />} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path="/car-update/:id" element={<UpdateCar />} />
      <Route path="/car-detail/:id" element={<DetailCar />} />
      <Route path="/customers" element={<ListCustomer />} />
      <Route path="/add-customer" element={<AddCustomer />} />
      <Route path="/update-customer/:id" element={<UpdateCustomer />} />
      <Route path="/detail-customer/:id" element={<DetailCustomer />} />
      <Route path="/employees" element={<ListEmployee />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      <Route path="/detail-employee/:id" element={<DetailEmployee />} />
      <Route path="/permissions" element={<Permissions />} />
      <Route path="/rentals" element={<ListRental />} />
      <Route path="/add-rental" element={<AddRental />} />
      <Route path="/update-rental/:id" element={<UpdateRental />} />
      <Route path="/rental-detail/:id" element={<DetailRental />} />
      <Route path="/users" element={<ListUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/our-teams" element={<ListOurTeam />} />
      <Route path="/add-our-teams" element={<AddOurTeam />} />
      <Route path="/update-user/:id" element={<UpdateUser />} />
      <Route path="/detail-user/:id" element={<DetailUser />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/mail-settings" element={<MailSettings />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/models" element={<Models />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/discounts" element={<Discounts />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
