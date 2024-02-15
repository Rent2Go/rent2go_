import React from 'react'
import './accountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountSettings'>
      <h2 className='mainHead1'>Personal Information</h2>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Name <span>*</span></label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Surname <span>*</span></label>
          <input type='text' name='surname' id='surname' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Phone <span>*</span></label>
          <input type='text' name='phone' id='phone' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Email <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>
      </div>
      <button className='mainButton1'>Save Changes</button>
    </div>
  )
}

export default AccountSettings