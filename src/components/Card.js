import React from 'react'
import "./card.css";
import p from "./Card1"
function Card(props) {
  return (
    <>
        <div className='card' key={props.key1}>
            <img src={props.im} id="i"/>
            <h3 id='head'>{props.val1}</h3>
            <p>Some quick example we have to build together so that we get Success</p>
            <button id='check'>Check Now</button>
        </div>
    </>
  )
}

export default Card