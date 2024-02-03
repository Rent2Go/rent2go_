import React, { useEffect, useState } from "react";
import "./employeeTable.css";
import { Table } from "react-bootstrap";
import { EmployeeModel } from "../../../models/responses/employees/GetEmployee";
import EmployeeService from "../../../services/EmployeeService";
import Form from "react-bootstrap/Form";
import { FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";

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
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
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
              <td className="actionRow">
                <Link to="/" className="btn btn-sm btn-warning">
                  <FaUserEdit />
                </Link>
                <Link to="/" className="btn btn-sm btn-danger">
                  <RiDeleteBin3Line />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeTable;
