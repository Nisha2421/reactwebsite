import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../components/Home.css"
import img from "./images/img4.png"
function About() {
  const navigate=useNavigate();
  return (
    <>
      <div className='selector'>
        <div className='Name'>
          <h1 id='h1'>Welcome to About Page<br /> <strong id="logo1"> Nishatechnical</strong></h1>
          <h2 id='h2'>We are team of talanted development making websites</h2>
          <button className='btn' onClick={()=>navigate("/contact")}>Contact Here</button>
        </div>
         <div className='image'>
          <img src={img} className="img1"  />
        </div>  
      </div>
    </>
  )
}

export default About