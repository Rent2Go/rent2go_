import React from 'react'
import './UserSidebar.css'

interface UserSidebarProps {
  activepage: any
}

const UserSidebar: React.FC<UserSidebarProps> = ({activepage}) => {
  return (
    <div className='userSidebar'>
      {
        activepage === 'account-settings' ? <div className='s1'></div> : <div className='s2'></div>
      }
    </div>
  )
}

export default UserSidebar