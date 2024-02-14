import React from 'react'
import './accountSettings.css'
import { useTranslation } from "react-i18next";

const AccountSettings = () => {
  const { t } = useTranslation();

  return (
    <div className='accountSettings'>
      <h2 className='mainHead1'>{t("personalInformations")}</h2>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>{t("firstName")} <span>*</span></label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>{t("lastName")} <span>*</span></label>
          <input type='text' name='surname' id='surname' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>{t("phone")} <span>*</span></label>
          <input type='text' name='phone' id='phone' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>{t("email")} <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>
      </div>
      <button className='mainButton1'>{t("saveChanges")}</button>
    </div>
  )
}

export default AccountSettings