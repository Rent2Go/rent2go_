import React, { useEffect, useState } from "react";
import "./styles/employee.css";
import { EmployeeTable } from "../../components";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import EmployeeService from "../../services/EmployeeService";
import { EmployeeModel } from "../../models/responses/employees/GetEmployee";
type Props = {};

const ListEmployee = (props: Props) => {

    


  
  return (
    <div className="employees">
      <div className="headingContainer">
      <div className="titleContainer">
        <h2>Employees</h2>
      </div>
        <div className="addBtnContainer">
          <Link title="Add New User" to="/add-employee" className="btn btn-sm">
            <IoMdAdd /> Add Employee
          </Link>
        </div>
      </div>
      <div className="secContainer">
  

        <EmployeeTable  />   

      
        
      </div>
    </div>
  );
};

export default ListEmployee;
