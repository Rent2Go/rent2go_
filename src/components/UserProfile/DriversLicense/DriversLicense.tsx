import React, { useEffect, useState } from 'react'
import './DriversLicense.css'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import FormikInput from '../../FormikInput/FormikInput'
import { useTranslation } from "react-i18next";
import CustomerService from '../../../services/CustomerService';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../../contexts/AuthContext';
import UserService from '../../../services/UserService';
import { UserModel } from '../../../models/user/UserModel';
import OverlayLoaderLoad from '../../OverlayLoader/OverlayLoaderLoad';

const DriversLicense = () => {
  const { t } = useTranslation();
    
  const auth = useAuth()

  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    getUser(auth.authInformation.user.id)
    

  }, [user?.id])


  const getUser = async (id: number) => {
    await UserService.getById(id)
      .then((res: any) => {
        setUser(res.data.data)
      })
  }


  const driversLicenseSchema = Yup.object().shape({
    issueDate: Yup.date()
      .max(new Date(), t('Issue date must be in the past'))
      .required(t("Required")),
    expiryDate: Yup.date()
      .min(new Date(), t('Expiry date must be in the future'))
      .required(t("Required"))
      .when(
        'issueDate',
        (issueDate, schema) => issueDate && schema.min(issueDate, t('Expiry date must be after issue date'))
      )
      .test('is-10-years-later', t('Expiry date must be exactly 10 years after issue date'), function(value) {
        const issueDate:any = this.resolve(Yup.ref('issueDate'));
        const expiryDate = new Date(value);
        const diffInYears = expiryDate.getFullYear() - issueDate.getFullYear();
        issueDate.setFullYear(issueDate.getFullYear() + diffInYears);
        return diffInYears === 10 && issueDate.getTime() === expiryDate.getTime();
      })
  });

  const handleSubmit = async (values:any) => {
    await CustomerService.updateCustomer(values)
    .then(() => {
      toast.success(t('Customer driver licence updated successfull'))
    })
    .catch((err) => {
      toast.error(err.response.data.message.issueDate || err.response.data.message.expiryDate)
    })

  }



console.log(user?.customer);

  if(!user) return <OverlayLoaderLoad/>

  return (
    <div className='driversLicense container'>
      <h2 className='mainHead1'>{t("driversLicense")}</h2>
      <div className='form'>
        <Formik initialValues={{
          id:user.customer.id,
          issueDate:user.customer.issueDate,
          expiryDate:user.customer.expiryDate

        }} validationSchema={driversLicenseSchema} onSubmit={handleSubmit}>
          <Form>
            <div  className='row form-group g-5'>
              <div className='col-xl-12 col-l-12 col-md-12 col-sm-12'>
                <FormikInput
                  name="issueDate"
                  type="date"
                  label={t("Driver Issue Date")}
                ></FormikInput>
              </div>
              <div className='col-xl-12 col-l-12 col-md-12 col-sm-12'>
                <FormikInput
                  name="expiryDate"
                  type="date"
                  label={t("Driver Expiry Date")}
                ></FormikInput>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
            <button className='mainButton1'>{t("saveChanges")}</button>

            </div>
            
          </Form>
        </Formik>
        <ToastContainer position='bottom-center'/>
      </div>

    
    </div>
  )
}

export default DriversLicense