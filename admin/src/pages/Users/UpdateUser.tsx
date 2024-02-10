import React, { useEffect, useState } from 'react'
import "./styles/user.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormikInput } from '../../components';
import Dropzone from 'react-dropzone-uploader';
import UserService from '../../services/UserService';
import { UserModel } from '../../models/responses/users/GetUser';
import { toast } from 'react-toastify';
import   { object, ref, string } from "yup";
import { UpdateUserRequest } from '../../models/requests/users/UpdateUserRequest';

type Props = {}

const UpdateUser = (props: Props) => {

  const formData = new FormData()
  const navigate = useNavigate()
  const { id } = useParams()
  const userId = parseInt(id || '');
  const [user, setUser] = useState<UserModel>();


  const role = [
    { id: 1, value:"ADMIN", name: 'Admin' },
    { id: 2, value:"USER", name: 'User' }

  ]

  const getUploadParams = ({ }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }: { meta: any, file: any }) => {
    if (meta.status === 'done') {
      console.log('Dosya yüklendi:', file);
      formData.append("file",file)
   
  
    } else if (meta.status === 'error') {
      console.error('Dosya yüklenirken bir hata oluştu:', meta);
   
    }
  };

  const onSubmit = async(updateUserRequest:UpdateUserRequest) => {

      await UserService.updateUser(updateUserRequest)
      .then((res:any) => {
        toast.success(res.data.message)
        navigate("/users")
      })
      .catch((err:any) => {
        toast.error(err.response.data.message)
      })

  }

  const updateUserValidationSchema  = object({
    name: string()
      .required("First Name field is required.")
      .min(2, "First Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
    surname: string()
      .required("Last Name field is required.")
      .min(2, "Last Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.')
    ,
  
    phoneNumber: string().required("Phone number is required.")
      .matches(
        /^05\d{9}$/,
        "Phone number must be in the format 05xxxxxxxxx."
      ),
    email: string()
      .required("Email field is required.")
      .email("Invalid email format."),
    password: string().required("Password field is required.")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "Password must include at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
      .matches(/\d/, "Password must include at least one number.")
      .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, "Password must include at least one punctuation mark."),
      confirmPassword: string().required("Password field is required.")
      .oneOf([ref('password')], 'Passwords do not match')
  });







  useEffect(() => {

    getByIdUser(userId);

  }, [])

 
  const imageHandleSubmit = async (values: any) => {
     formData.append("email",values.email)
     await UserService.updateImage(formData)
     .then((res)=> {
      toast.success(res.data.message);
      window.location.reload();

     })
     .catch((err)=> {
      toast.error(err)
      formData.delete("email")
     })
   

}


 

  const getByIdUser = async (id: number) => {

    await UserService.getById(id)
      .then((res) => {
        setUser(res.data.data)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  const handleSubmit = () => { };
  if (!user) return <div>Loading...</div>;
  console.log(user)
  return (
    <div className="users container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2 className='text-center'>Update User({user.name})</h2>
        </div>

        <div className="formContainer">
          <Formik initialValues={{
            id: user.id,
            name: user.name,
            surname: user?.surname,
            phoneNumber: user?.phoneNumber,
            email: user?.email,
            password: user.password,
            confirmPassword: user.password,
            role: user.role,
          }} onSubmit={onSubmit}
          validationSchema={updateUserValidationSchema}
          validateOnBlur={true}>
            <Form className="Form">
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="name"
                    label="First Name"
                    placeHolder="Enter Your First Name"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="surname"
                    label="Last Name"
                    placeHolder="Enter Your Last Name"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="email"
                    label="Email Address"
                    disabled={true}
                    placeHolder="Enter Your Email Address"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="phoneNumber"
                    label="Phone Number"
                    placeHolder="Enter Your Phone Number"
                  ></FormikInput>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="password"
                    label="Password"
                    placeHolder="Enter Your Password"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="confirmPassword"
                    label="Re-Password"
                    placeHolder="Enter Your Password Again"
                  ></FormikInput>
                </div>
              </div> */}
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                <label className="form-label">Role</label>
                  <Field as="select" name="role" className="form-control"  >
                    <option value={user.role} >  {user.role} </option>
                    {role.map((role) => (
                      <option key={role.id} value={role.value}>{role.name}</option>
                    ))}
                  </Field>
                  <ErrorMessage name="role" component="div" className="alert-text" />
                </div>
              </div>

              <div className="btnContainer">
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/users" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="secContainer">
          <div className="titleContainer">
            <h2 className='text-center'>Update User Image</h2>
          </div>
          <div className="imgContainerDetail ">
            <img className='show-image' src={user.imageUrl} alt={user.name} />
          </div>
          <div className="formContainer">
            <Formik initialValues={{ email: user.email }} onSubmit={imageHandleSubmit}>
              <Form>
                <div className="row">
                  <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                    <label className="mb-3 mt-5">Images</label>
                    <Dropzone

                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      accept='image/*'
                    />
                  </div>
                </div>
                <div className="btnContainer">
                  <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                  <Link to="/cars" className="btn btn-sm btn-cancel">Cancel</Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser