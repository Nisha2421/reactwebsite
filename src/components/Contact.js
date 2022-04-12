import React from 'react'
import "./Contact.css"
import img from "./images/img5.png"
function Contact() {
  function handel(e){
    var n=document.getElementById("id4").value;
    var e1=document.getElementById("id2").value;
    var m=document.getElementById("id5").value;
    alert (`My name is ${n}.My Email Id is ${e1}. Here is what I want to say ${m}.`)
  }
  return (
    <>
      <div class="cofy">
            <div id="s"> 
                      <form id="s2" onSubmit={handel}>
                                <h3>Send Message</h3><br /><br />
                                <input type="text" id="id4" placeholder="Full Name" required /><br /><br />
                                <input type="email" id="id2" placeholder="Email"required /><br /><br />
                                <textarea name="nisha" placeholder="Type your Message..." id="id5" required></textarea><br/><br/>
                                <button id="id3">Submit</button>   
                    </form> 
                   
                      <div className='image'>
                                <img src={img} className="img2"  />
                      </div> 
            </div>
    </div>
    </>
  )
}

export default Contact