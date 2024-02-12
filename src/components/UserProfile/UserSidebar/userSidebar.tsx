import React from 'react'
import './UserSidebar.css'

interface UserSidebarProps {
  activepage: any
}

const UserSidebar: React.FC<UserSidebarProps> = ({activepage}) => {
  return (
    <div>UserSidebar - active page: {activepage}</div>
  )
}

export default UserSidebar