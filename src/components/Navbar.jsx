import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Logo</h1>
            <ul className="menu">
                <li> <Link to="/">  Home </Link></li>
                <li> <Link to="/about">  About </Link></li>
                <li> <Link to="#">  Services </Link></li>
                <li> <Link to="#">  Contact </Link></li>
            </ul>
        </div>
    )
}

export default Navbar
