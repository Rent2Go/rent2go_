import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";

import CustomerService from "../../../services/CustomerService";
import { CustomerModel } from "../../../models/responses/customers/GetCustomer";

import "./customerTable.css";
type Props = {};

const CustomerTable = (props: Props) => {
  const [customers, setCustomers] = useState<CustomerModel[]>([]);

  const getCustomers = async () => {
    try {
      const response = await CustomerService.getAll();
      setCustomers(response.data.data);
    } catch (error) {
      console.error("Error fetching customers", error);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div className="customerTableCard shadow-rounded-box">
      <Table className="table table-rounded table-hover table-borderless">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mail Address</th>
            <th>Phone Number</th>
            <th>Nationality</th>
            <th>City</th>
            <th>District</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: CustomerModel) => (
            <tr key={customer.id}>
                <td>{customer.id}</td>
              <td>
              {customer.userImageUrl ? (
              <img
                src={`${customer.userImageUrl}`}
                alt="user-img"
              />
            ) : (
              <img src="/assets/images/userImages/user-default.jpg" alt="default-img" />
            )}
              </td>
               <td>{customer.userName}</td>
              <td>{customer.userSurname}</td>
             <td>{customer.userEmail}</td>
              <td>{customer.userPhoneNumber}</td>
              <td>{customer.userIdCardNumber}</td>
              <td>{customer?.userCityName}</td>
              <td>{customer?.userDistrictName}</td>
              <td>{customer?.userAddress}</td> 
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
                <Link to={`/update-customer/${customer.id}`} className="btn btn-sm btn-update">
                  <FaUserEdit />
                </Link>
                <Link to="/" className="btn btn-sm btn-delete">
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

export default CustomerTable;
