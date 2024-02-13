import React from 'react'
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className='changePassword'>
      <h2 className='mainHead1'>Change Password</h2>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='oldPassword'>Old Password <span>*</span></label>
          <input type='text' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>New Password <span>*</span></label>
          <input type='password' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Password Confirm  <span>*</span></label>
          <input type='email' name='email' id='email' />
        </div>
      </div>
      <button className='mainButton1'>Save New Password</button>
    </div>
  )
}

export default ChangePassword