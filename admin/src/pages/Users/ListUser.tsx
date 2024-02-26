import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { Table, Form } from "react-bootstrap";

import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";
import { UserTable } from "../../components";

import "./styles/user.css";
type Props = {};

const ListUser = (props: Props) => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");

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
  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };
  const filterUsersByRole = (user: UserModel) => {
    if (!selectedRole) {
      return true;
    }
    return user.role === selectedRole;
  };
  return (
    <div className="users">
      <div className="headingContainer">
        <div className="titleContainer">
          <h2>Users</h2>
          <Form.Select value={selectedRole} onChange={handleRoleChange}>
            <option value="">All Roles</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </Form.Select>
        </div>
        <div className="addBtnContainer">
          <Link title="Add New User" to="/add-user" className="btn btn-sm">
            <IoMdAdd /> Add User
          </Link>
        </div>
      </div>
      <div className="secContainer">
        <div className="userContainer">
          <div className="row m-4">
            <div className="col-4"></div>
          </div>

         
            <div className="userTableCard shadow-rounded-box table-responsive">
              <Table className="table table-rounded table-hover table-borderless">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Role</th>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mail Address</th>
                    <th>Phone Number</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {users.filter(filterUsersByRole).map((user) => (
                  <UserTable key={user.id} user={user} />
                ))}
              </Table>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default ListUser;
