import React, { useEffect, useState } from "react";
import "./styles/customers.css";
import { Field, Form, Formik } from "formik";
import { FormikInput } from "../../components";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import { UserModel } from "../../models/responses/users/GetUser";
import CustomerService from "../../services/CustomerService";
import { ToastContainer, toast } from "react-toastify";
type Props = {};

const AddCustomer = (props: Props) => {

  const [user, setUser] = useState<UserModel[]>()
  const getUsers = async()=>{
    await UserService.getAll()
    .then((res:any)=> {
      setUser(res.data.data)
    })
  }

  useEffect(() => {
     getUsers()
  },[])

  const onSubmit = async (values:any) => {

    await CustomerService.createCustomer(values)
    .then((res) => {
      toast.success(res.data.message)
    })
    .catch((err) => {
      toast.error(err.response.data.message)
    })

  };


  return (
    <div className="customers">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer text-center mt-4 mb-5">
          <h2>Add New Customer</h2>
        </div>
        <div className="formContainer">
          <Formik initialValues={{
            userId:0
          }} onSubmit={onSubmit}>
            <Form className="form">
              <div className="row justify-content-center">          
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <label className="form-label">User</label>
                  <Field
                    as="select"
                    name="userId"
                    placeholder="User"
                    className="form-control"
                  >
                   {user?.map((user:UserModel) =>(
                      <option key={user.id} value={user.id}>{user.name + " " + user.surname}</option>
                   ))}
                  </Field>
                </div>
              </div>
              <div className="row">              
              </div>
            
              <div className="btnContainer">
                <button
                  title="Save"
                  type="submit"
                  className="btn btn-sm btn-submit"
                >
                  Save
                </button>
                <Link to="/customers" className="btn btn-sm btn-cancel">
                  Cancel
                </Link>
              </div>
            </Form>
          </Formik>
          <ToastContainer position="bottom-center"/>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
