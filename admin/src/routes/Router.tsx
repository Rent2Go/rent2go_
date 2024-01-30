import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { 
  AddCar, AddCustomer, AddEmployee, AddRental, AddUser, AddUserRole, 
  Dashboard, DetailCar, DetailCustomer, DetailEmployee,DetailRental, DetailUser, DetailUserRole, 
  ListCar, ListCustomer, ListEmployee, ListRental, ListUser, ListUserRole, Login, 
  Permissions, Profile, ResetPassword, 
  Settings, MailSettings,
  UpdateCar, UpdateCustomer, UpdateEmployee, UpdateRental, UpdateUser, UpdateUserRole 
} from "../pages";
import PrivateRoute from "../utils/PrivateRoute";



const Router = () => {
  return(
  
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard"/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/cars" element={<ListCar />} />
      <Route path="/add-car" element={<AddCar />} />
      <Route path={`/car-update/:id`} element={<UpdateCar />} />
      <Route path="/detail-car/:id" element={<DetailCar />} />
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
      <Route path="/detail-rental/:id" element={<DetailRental />} />
      <Route path="/user-roles" element={<ListUserRole />} />
      <Route path="/add-user-roles" element={<AddUserRole />} />
      <Route path="/update-user-role/:id" element={<UpdateUserRole />} />
      <Route path="/detail-user-role/:id" element={<DetailUserRole />} />
      <Route path="/users" element={<ListUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/update-user/:id" element={<UpdateUser />} />
      <Route path="/detail-user/:id" element={<DetailUser />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/mail-settings" element={<MailSettings/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
};

export default Router;
