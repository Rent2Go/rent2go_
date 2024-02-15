import React from 'react'
import './UserLocation.css'
import { useTranslation } from "react-i18next";

const UserLocation = () => {
    const { t } = useTranslation();

  return (
    <div className='userLocation'>
        <h2 className='mainHead1'>{t("locationInformation")}</h2>
        <div className='form'>
            <div className='form-group'>
                <label htmlFor='name'>{t("city")}</label>
                <input type='text' name='city' id='city' />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>{t("district")}</label>
                <input type='text' name='district' id='district' />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>{t("address")}</label>
                <textarea name='address' id='address'/>
            </div>
        </div>
        <button className='mainButton1'>{t("saveLocationChanges")}</button>
    </div>
  )
}

export default UserLocation