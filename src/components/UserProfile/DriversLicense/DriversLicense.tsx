import React from 'react'
import './DriversLicense.css'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import FormikInput from '../../FormikInput/FormikInput'
import { useTranslation } from "react-i18next";

const DriversLicense = () => {
  const { t } = useTranslation();
    
  const driversLicenseInitialValues: any = {
    drivingLicenseDate: ""
  }

  const driversLicenseSchema = Yup.object().shape({
    drivingLicenseDate: Yup.date().required('Driving license date must be selected.')
  })

  const handleSubmit = () => {}


  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const formData = new FormData();
  const handleChangeStatus = ({ meta, file }: { meta: any, file: any }) => {
    if (meta.status === 'done') {
      console.log('Dosya yüklendi:', file);
      formData.append("file", file)


    } else if (meta.status === 'error') {
      console.error('Dosya yüklenirken bir hata oluştu:', meta);

    }
  };

  return (
    <div className='driversLicense container'>
      <h2 className='mainHead1'>{t("driversLicense")}</h2>
      <div className='form'>
        <Formik initialValues={driversLicenseInitialValues} validationSchema={driversLicenseSchema} onSubmit={handleSubmit}>
          <Form>
            <div  className='row form-group'>
              <div className='col-xl-12 col-l-12 col-md-12 col-sm-12'>
                <FormikInput
                  name="drivingLicenseDate"
                  type="date"
                  label={t("driversLicenseDate")}
                ></FormikInput>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-12 col-l-12 col-md-12 col-sm-12'>
                <label className='mt-3'>{t("driversLicenseImage")}</label>
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    accept='image/*'
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      <button className='mainButton1'>{t("saveChanges")}</button>
    </div>
  )
}

export default DriversLicense