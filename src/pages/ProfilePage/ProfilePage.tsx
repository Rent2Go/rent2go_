import React from 'react'
import { Footer, Navbar } from '../../components'
import { useParams } from 'react-router-dom'
import AccountSettings from '../../components/UserProfile/AccountSettings/accountSettings'
import UserSidebar from '../../components/UserProfile/UserSidebar/userSidebar'
import './profilePage.css'
import YourReservations from '../../components/UserProfile/YourReservations/YourReservations'
import ChangePassword from '../../components/UserProfile/ChangePassword/ChangePassword'
import DriversLicense from '../../components/UserProfile/DriversLicense/DriversLicense'
import UserLocation from '../../components/UserProfile/UserLocation/UserLocation'
import Disclaimer from '../../components/UserProfile/Disclaimer/Disclaimer'



type Props = {}

const ProfilePage = (props: Props) => {

  const {activepage} = useParams();

  return (
    <div className='userProfile'>
      <Navbar />
      <div className='userProfileIn'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === 'account-settings' && <AccountSettings />}
          {activepage === 'your-reservations' && <YourReservations />}
          {activepage === 'change-password' && <ChangePassword />}
          {activepage === 'drivers-license' && <DriversLicense />}
          {activepage === 'location-settings' && <UserLocation />}
          {activepage === 'disclaimer' && <Disclaimer />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage