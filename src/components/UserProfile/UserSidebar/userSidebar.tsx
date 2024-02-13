import React from 'react'
import './UserSidebar.css'
import { VscAccount } from "react-icons/vsc";
import { IoBagCheckOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface UserSidebarProps {
  activepage: any
}

const UserSidebar: React.FC<UserSidebarProps> = ({activepage}) => {
  return (
    <div className='userSidebar'>
      {
        activepage === 'account-settings' 
        ? 
        <div className='s2'>
          <VscAccount className='img'/>
          <span>Account Settings</span>
        </div> 
        : 
        <Link to="/profile/account-settings">
          <div className='s1'>
            <VscAccount className='img'/>
            <span>Account Settings</span>
          </div>
        </Link>
      }

      {
        activepage === 'your-reservations' 
        ? 
        <div className='s2'>
          <IoBagCheckOutline className='img'/>
          <span>Your Reservations</span>
        </div> 
        : 
        <Link to="/profile/your-reservations">
          <div className='s1'>
            <IoBagCheckOutline className='img'/>
            <span>Your Reservations</span>
          </div>
        </Link>
      }

      {
        activepage === 'change-password' 
        ? 
        <div className='s2'>
          <IoEyeOutline className='img'/>
          <span>Change Password</span>
        </div> 
        : 
        <Link to="/profile/change-password">
          <div className='s1'>
            <IoEyeOutline className='img'/>
            <span>Change Password</span>
          </div>
        </Link>
      }

    </div>
  )
}

export default UserSidebar