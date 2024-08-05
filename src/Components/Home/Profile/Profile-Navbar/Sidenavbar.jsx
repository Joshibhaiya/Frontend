import React from 'react'
import { Link } from'react-router-dom'
import '../Profile.css'


const Sidenavbar = () => {
  return (
    <div className="dashboard">
    <div className='Side-navbar'>
        <h1>Dashboard</h1>
        <ul className='Side-navbar-list'>
            <li>My Profile</li>
            <li>My Orders</li>
            <Link to={'/editprofile'}><li>Update Profile</li></Link>
            <li>Log Out</li>
        </ul>
    </div>
  </div>
  )
}

export default Sidenavbar