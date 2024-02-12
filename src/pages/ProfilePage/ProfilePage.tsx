import React from 'react'
import { Footer, Navbar } from '../../components'
import { useParams } from 'react-router-dom'
import AccountSettings from '../../components/UserProfile/AccountSettings/AccountSettings'
import UserSidebar from '../../components/UserProfile/UserSidebar/UserSidebar'
import './profilePage.css'



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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage