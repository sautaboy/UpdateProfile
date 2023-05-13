import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/">Home</NavLink >
                <NavLink to="/about">About</NavLink >
                <NavLink to="/update_your_profile">Update Profile</NavLink>
            </div>
        </div>
    )
}

export default Navbar
