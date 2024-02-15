import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { Table } from "react-bootstrap";

import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";
import { UserTable } from "../../components";

import "./styles/user.css";
type Props = {};

const ListUser = (props: Props) => {

  const [users, setUsers] = useState<UserModel[]>([]);

  const getUsers = async () => {
    try {
      const response = await UserService.getAll();
      setUsers(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="users">
      <div className="headingContainer">
        <div className="titleContainer">
          <h2>Users</h2>
        </div>
        <div className="addBtnContainer">
          <Link title="Add New User" to="/add-user" className="btn btn-sm">
            <IoMdAdd /> Add User
          </Link>
        </div>
      </div>
      <div className="secContainer">
        <div className="userContainer">
        <div className="userTableCard shadow-rounded-box">
          <div className="userTableCard shadow-rounded-box">
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
          
       

          {users.map((user) =>
            <UserTable key={user.id} user={user} />
          )}
          </Table>
          </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default ListUser;
