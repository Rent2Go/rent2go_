import React from "react";
import "./styles/employee.css";
import { EmployeeTable } from "../../components";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
type Props = {};

const ListEmployee = (props: Props) => {
  return (
    <div className="employees">
      <div className="headingContainer">
        <h2>Employees</h2>
        <div className="addBtnContainer">
          <Link title="Add New User" to="/add-employee" className="btn btn-sm">
            <IoMdAdd /> Add Employee
          </Link>
        </div>
      </div>
      <div className="secContainer">
        <EmployeeTable />
      </div>
    </div>
  );
};

export default ListEmployee;
