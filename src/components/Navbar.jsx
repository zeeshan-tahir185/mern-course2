import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
      let [menuchecked, setMenuChecked]=useState(false)
    return (
        <div className='navbar'>
            <h1>Logo</h1>
            <ul className={`${menuchecked?"menu_mobile":"menu"}`}>
                <li> <Link to="/">  Home </Link></li>
                <li> <Link to="/about">  About </Link></li>
                <li> <Link to="#">  Services </Link></li>
                <li> <Link to="#">  Contact </Link></li>
            </ul>
            <CiMenuFries className='menu_icon' onClick={()=>setMenuChecked(!menuchecked)} />
        </div>
    )
}

export default Navbar
