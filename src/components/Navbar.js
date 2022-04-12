import React, { useState } from 'react'
import {FaListUl} from 'react-icons/fa'
import "../components/NavBar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
  const [mobile , setMobile]=useState(false);
  function handel(){
    setMobile(!mobile);
  }
  return (
    <>
      <div className='Navbar'>
        <h2 id="logo">LOGO</h2>
        <ul className={mobile?"mobile":"ul"}>
          <li onClick={()=>setMobile(false)}><NavLink to="/" >Home</NavLink></li>
          <li onClick={()=>setMobile(false)}><NavLink to="/about" >About </NavLink> </li>
          <li onClick={()=>setMobile(false)}><NavLink to="/contact" >Contact</NavLink></li>       
          <li onClick={()=>setMobile(false)}><NavLink to="/service" >Service </NavLink> </li>  
        </ul>
        <div className='icon' onClick={handel}><FaListUl /></div>
      </div>
    </>
  )
}

export default Navbar