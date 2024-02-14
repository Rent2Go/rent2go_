import React from 'react'
import './UserLocation.css'

const UserLocation = () => {
  return (
    <div className='userLocation'>
        <h2 className='mainHead1'>Location Information</h2>
        <div className='form'>
            <div className='form-group'>
                <label htmlFor='name'>City</label>
                <input type='text' name='city' id='city' />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>District</label>
                <input type='text' name='district' id='district' />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Address</label>
                <textarea name='address' id='address'/>
            </div>
        </div>
        <button className='mainButton1'>Save Location Changes</button>
    </div>
  )
}

export default UserLocation