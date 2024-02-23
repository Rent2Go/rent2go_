import React from 'react'
import './userSidebar.css'
import { VscAccount } from "react-icons/vsc";
import { IoBagCheckOutline, IoEyeOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { BsPinMap } from "react-icons/bs";
import { BsJournalBookmark } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

interface UserSidebarProps {
  activepage: any
}

const UserSidebar: React.FC<UserSidebarProps> = ({activepage}) => {
  const { t } = useTranslation();

  return (
    <div className='userSidebar'>
      {
        activepage === 'account-settings' 
        ? 
        <div className='s2'>
          <VscAccount className='img'/>
          <span>{t("accountSettings")}</span>
        </div> 
        : 
        <Link to="/profile/account-settings">
          <div className='s1'>
            <VscAccount className='img'/>
            <span>{t("accountSettings")}</span>
          </div>
        </Link>
      }

      {
        activepage === 'location-settings' 
        ? 
        <div className='s2'>
          <BsPinMap  className='img'/>
          <span>{t("locationSettings")}</span>
        </div> 
        : 
        <Link to="/profile/location-settings">
          <div className='s1'>
            <BsPinMap  className='img'/>
            <span>{t("locationSettings")}</span>
          </div>
        </Link>
      }

      {
        activepage === 'your-reservations' 
        ? 
        <div className='s2'>
          <IoBagCheckOutline className='img'/>
          <span>{t("yourReservations")}</span>
        </div> 
        : 
        <Link to="/profile/your-reservations">
          <div className='s1'>
            <IoBagCheckOutline className='img'/>
            <span>{t("yourReservations")}</span>
          </div>
        </Link>
      }

      {
        activepage === 'change-password' 
        ? 
        <div className='s2'>
          <IoEyeOutline className='img'/>
          <span>{t("changePassword")}</span>
        </div> 
        : 
        <Link to="/profile/change-password">
          <div className='s1'>
            <IoEyeOutline className='img'/>
            <span>{t("changePassword")}</span>
          </div>
        </Link>
      }

      {
        activepage === 'drivers-license' 
        ? 
        <div className='s2'>
          <BsPersonVcard  className='img'/>
          <span>{t("driversLicence")}</span>
        </div> 
        : 
        <Link to="/profile/drivers-license">
          <div className='s1'>
            <BsPersonVcard  className='img'/>
            <span>{t("driversLicence")}</span>
          </div>
        </Link>
      }

      {
        activepage === 'disclaimer' 
        ? 
        <div className='s2'>
          <BsJournalBookmark  className='img dis'/>
          <span>{t("disclaimer")}</span>
        </div> 
        : 
        <Link to="/profile/disclaimer">
          <div className='s1'>
            <BsJournalBookmark  className='img dis'/>
            <span>{t("disclaimer")}</span>
          </div>
        </Link>
      }
      

    </div>
  )
}

export default UserSidebar