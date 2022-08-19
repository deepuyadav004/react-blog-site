import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'

function TopBar() {
  const user = true;
  return (
    <>
    <div className="top">

        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>


        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'><Link className='link' to='/'>Home</Link></li>
                <li className='topListItem'><Link className='link' to='/'>About</Link></li>
                <li className='topListItem'><Link className='link' to='/'>Contact</Link></li>
                <li className='topListItem'><Link className='link' to='/write'>Write</Link></li>
                <li className='topListItem'>{user && <Link className='link' to='/login'>Logout</Link>}</li>
            </ul>
        </div>


        <div className='topRight'>

            {
              user ? (
                <img className='topImg' src="https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt='my'  />
              ) : (
                <ul className='topList'>
                <li className='topListItem'><Link className='link' to='/login'>Login</Link></li>
                <li className='topListItem'><Link className='link' to='/register'>Register</Link></li>
            </ul>

              )
            }

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    </>
  )
}

export default TopBar