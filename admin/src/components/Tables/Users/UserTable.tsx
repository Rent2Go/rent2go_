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

type Props = {
  user: UserModel;
};

const UserTable = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(props.user.active);

  const handleChange = (e: any, id: number) => {
    const isActive = e.target.checked;
    setChecked(isActive);
    handleActive(id, isActive);
  };

  const handleDelete = async (id: number) => {
    var isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      await UserService.deleteUser(id)
        .then(() => {
          toast.success("Vehicle was successfully deleted");
          window.location.reload();
        })
        .catch((err: any) => toast.error(err.data.response.message));
    }
  };

  useEffect(() => {}, [checked]);

  const handleActive = async (id: number, checked: boolean) => {
    await UserService.updateIsActive(id, checked)
      .then((res) => {
        toast.success(res.data.message);
        //window.location.reload();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <React.Fragment>
      <tbody>
        <tr key={props.user.id}>
          <td>{props.user.id}</td>
          <td>
            {props.user.imageUrl ? (
              <img
                src={`/assets/images/userImages/${props.user.imageUrl}`}
                alt="user-img"
              />
            ) : (
              <img src="/assets/images/userImages/user-default.jpg" alt="default-img" />
            )}
          </td>
          <td>{props.user.name}</td>
          <td>{props.user.surname}</td>
          <td>{props.user.email}</td>
          <td>{props.user.phoneNumber}</td>
          <td>
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id={`custom-switch-${props.user.id}`}
                label=""
                title="Active"
                className="warning"
                checked={checked}
                onChange={(e) => handleChange(e, props.user.id)}
              />
            </Form>
          </td>
          <td>
            <div className="actionRow">
              <Link
                to={`/update-user/${props.user.id}`}
                className="btn btn-sm btn-update"
                title="Update"
              >
                <CiEdit />
              </Link>
              <Link
                to={`/users`}
                className="btn btn-sm btn-delete"
                title="Delete"
                onClick={() => handleDelete(props.user.id)}
              >
                <MdOutlineDeleteForever />
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
};

export default UserTable;
