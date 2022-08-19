// import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
         <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
         </div>
         <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
                <img 
                  src='https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
                  alt=''
                />
                <label htmlFor='fileInput'>
                  <i className='settingsPPIcon far fa-user-circle'></i>
                </label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Deepu' />
            <label>Email</label>
            <input type='email' placeholder='deepu@gmail.com' />
            <label>Password</label>
            <input type='password' />
            <button className='settingsSubmit'>Update</button>
         </form>
      </div>
      <Sidebar />
    </div>
  )
}
