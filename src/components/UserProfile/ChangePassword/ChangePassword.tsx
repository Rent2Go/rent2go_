import React from 'react'
import './ChangePassword.css'
import { useTranslation } from "react-i18next";

const ChangePassword = () => {
  const { t } = useTranslation();

  return (
    <div className='changePassword'>
      <h2 className='mainHead1'>{t("changePassword")}</h2>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='oldPassword'>{t("oldPassword")} <span>*</span></label>
          <input type='text' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>{t("newPassword")} <span>*</span></label>
          <input type='password' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>{t("passwordConfirm")}  <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>
      </div>
      <button className='mainButton1'>{t("saveNewPassword")}</button>
    </div>
  )
}

export default ChangePassword