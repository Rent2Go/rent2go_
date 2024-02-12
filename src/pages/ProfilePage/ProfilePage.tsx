import React from 'react'
import { Footer, Navbar } from '../../components'
import { useParams } from 'react-router-dom'
import AccountSettings from '../../components/UserProfile/AccountSettings/AccountSettings'
import UserSidebar from '../../components/UserProfile/UserSidebar/UserSidebar'



type Props = {}

const ProfilePage = (props: Props) => {

  const {activepage} = useParams();

  return (
    <>
      <Navbar />
      ProfilePage
      <div className='userProfileIn'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfilePage