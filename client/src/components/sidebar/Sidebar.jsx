// import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img 
                src='https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
                alt=''
            />
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
        </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
