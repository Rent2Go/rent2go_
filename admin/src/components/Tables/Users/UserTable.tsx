import React, { useEffect, useState } from "react";
import "./userTable.css";
import { UserModel } from "../../../models/responses/users/GetUser";
import { Table } from "react-bootstrap";
import UserService from "../../../services/UserService";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";
import { FormCheck } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {};

const UserTable = (props: Props) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const [checked, setChecked] = useState<boolean>();
  const handleChange = (e: any, id: number) => {
    const isActive = e.target.checked; // Doğru checked değerini almak için e.target.checked'i kullanın
    setChecked(isActive);
    handleActive(id, isActive);
    window.location.reload();

  };

  const handleDelete = async (id: number) => {
    var isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      await UserService.deleteUser(id)
        .then(() => {
          toast.success("Vehicle was successfully deleted")
          window.location.reload();
        })
    }
  };

  const handleActive = async (id: number, checked: boolean) => {


    await UserService.updateIsActive(id, checked)
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err)
      })
  }



  const getUsers = async () => {
    try {
      const response = await UserService.getAll();
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  },[]);
  return (
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
        <tbody>
          {users.map((user: UserModel) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.imageUrl} alt="user-img" />
              </td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
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
                    to={`/update-user/${user.id}`}
                    className="btn btn-sm btn-update"
                    title="Update"
                  >
                    <CiEdit />
                  </Link>
                  <Link
                    to={`/delete-user/${user.id}`}
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

export default UserTable;
