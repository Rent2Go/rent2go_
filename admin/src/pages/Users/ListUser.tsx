import React, { useEffect, useState } from "react";

import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";
import { UserTable } from "../../components";
import "./styles/user.css";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
type Props = {};

const ListUser = (props: Props) => {
  return (
    <div className="users">
      <div className="headingContainer">
        <h2>Users</h2>
        <div className="addBtnContainer">
          <Link title="Add New User" to="/add-user" className="btn btn-sm">
            <IoMdAdd /> Add User
          </Link>
        </div>
      </div>
      <div className="secContainer">
        <div className="userContainer">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default ListUser;
