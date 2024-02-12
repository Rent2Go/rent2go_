
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { AddOurTeamRequest } from '../../models/requests/ourTeams/AddOurTeamRequest';
import OurTeamService from '../../services/OurTeamService';
import { ToastContainer, toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import { FormikInput } from '../../components';
import Dropzone from 'react-dropzone-uploader';
import './styles/ourTeam.css'


type Props = {}

const AddOurTeam = (props: Props) => {

  const formData = new FormData();

  const navigate = useNavigate()

  const AddOurTeamValidationSchema = object({
    name: string()
      .required("First Name field is required.")
      .min(2, "First Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.'),
    surname: string()
      .required("Last Name field is required.")
      .min(2, "Last Name field must be at least 2 characters.")
      .max(20, 'The field cannot exceed 20 characters.')
    ,
    linkedin: string()
      .required("Linkedin field is required."),
    github: string()
      .required("Github field is required."),
    position: string()
      .required("Position field is required.")
      .max(30, 'The field cannot exceed 30 characters.'),
    description: string()
      .required("Description field is required.")
      .max(200, 'The field cannot exceed 200 characters.')
  });

  const getUploadParams = ({}) => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = ({ meta, file }: { meta: any, file: any }) => {
    if (meta.status === 'done') {
      if (formData.has("file")) {
        formData.delete("file")
      }  
      formData.append("file", file)

    } else if (meta.status === 'error') {
      console.error('An error occurred while uploading the file:', meta);

    }
    
  };

  const handleSubmit = async (values:AddOurTeamRequest) => {
    formData.append('addOurTeamRequest', new Blob([JSON.stringify(values)], { type: "application/json" }))
    await OurTeamService.createOurTeam(formData)
      .then((res) => {
        toast.success("Our Team added successfully")
        navigate("/our-teams")

      })
      .catch((err) => {
        toast.error(err.response.data.message)
        formData.delete('addOurTeamRequest')
      })

  }
  return (
    <div className="ourTeams container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Add New Team Member</h2>
        </div>

        <div className="formContainer">
          <Formik initialValues={{
            	name: '',
              surname: '',
              linkedin: '',
              github: '',
              position: '',
              description: '',


          }} onSubmit={handleSubmit}
          validationSchema={AddOurTeamValidationSchema}
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
                    name="linkedin"
                    label="Linkedin Address"
                    placeHolder="Enter Your Linkedin Address"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="github"
                    label="Github Address"
                    placeHolder="Enter Your Github Address"
                  ></FormikInput>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="position"
                    label="Position"
                    placeHolder="Enter Your Position"
                  ></FormikInput>
                </div>
                <div className="col-xl-6 col-l-6 col-md-12 col-sm-12 col-xs-12">
                  <FormikInput
                    name="description"
                    label="Description"
                    placeHolder="Enter Your Description"
                  ></FormikInput>
                </div>

              </div>
              <div className="row">
                <div className="col-xl-12 col-l-12 col-md-12 col-sm-12">
                  <label className="mb-3 mt-5">Choose Your Profile Photo</label>
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    accept="image/*"
                    />
                  
                </div>
              </div>
              <div className="btnContainer">
                <button title="Save" type="submit" className="btn btn-sm btn-submit">Save</button>
                <Link to="/our-teams" className="btn btn-sm btn-cancel">Cancel</Link>
              </div>
            </Form>
          </Formik>      
          <ToastContainer position="bottom-center" />
          
        </div>
  
      </div>
    </div>
  );
  
}

export default AddOurTeam