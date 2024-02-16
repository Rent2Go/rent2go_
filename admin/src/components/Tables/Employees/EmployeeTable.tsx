import React, { useEffect, useState } from "react";
import { Table, Form, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";


import EmployeeService from "../../../services/EmployeeService";
import { EmployeeModel } from "../../../models/responses/employees/GetEmployee";

import "./employeeTable.css";

type Props = {};

const EmployeeTable = (props: Props) => {
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);

  const getEmployees = async () => {
    try {
      const response = await EmployeeService.getAll();
      setEmployees(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };
  useEffect(() => {
    getEmployees();
  },[]);

  return (
    <div className="employeeTableCard shadow-rounded-box">
      <Table className="table table-rounded table-hover table-borderless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mail Address</th>
            <th>Phone Number</th>
            <th>Job Titles</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: EmployeeModel) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <img src="/assets/images/profile.png" alt="employee-img" />
              </td>
              <td>{employee.user.name}</td>
              <td>{employee.user.name}</td>
              <td>{employee.user.email}</td>
              <td>{employee.user.phoneNumber}</td>
              <td>{employee.jobTitle.name}</td>
              <td>{employee.jobTitle.departmentName}</td>
              <td>{employee.salary}  ₺</td>
              <td>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=""
                    title="Active"
                    className="warning"
                    checked={true}
                  />
                </Form>
              </td>
              <td>
                <div className="actionRow">
                  <Link
                    to={`/update-employee/${employee.id}`}
                    className="btn btn-sm btn-update"
                    title="Update"
                  >
                    <CiEdit />
                  </Link>
                  <Link
                    to={`/delete-employee/${employee.id}`}
                    className="btn btn-sm btn-delete"
                    title="Delete"
                  >
                    <MdOutlineDeleteForever />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
