import React from 'react'
import "../components/Home.css"
import img from "./images/img2.jpg"
import {useNavigate} from "react-router-dom"
function Home() {
  const navigate =useNavigate();
  return (
    <>
      <div className='selector'>
        <div className='Name'>
          <h1 id='h1'>Grow your business with<br /> <strong id="logo1"> Nishatechnical</strong></h1>
          <h2 id='h2'>We are team of talanted development making websites</h2>
          <button className='btn' onClick={()=>navigate("/service")} >Get Started</button>
        </div>
          <div className='image'>
          <img src={img} className="img"  />
        </div>  
      </div>
    </>
  )
}

export default Home