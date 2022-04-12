import React from 'react'
import Card from './Card'
import "./service.css"
import p from "./Card1.js"
function Service() {
  return (
    <>
    <div className='map'>
      {p.map((item,i)=>{
          return (        
            < div className='map1' key={i}> <Card key1={i} val1={p[i].h} im={p[i].img}/></div>
                   
          ) 
      })}
    </div>
      
    </>
  )
}

export default Service