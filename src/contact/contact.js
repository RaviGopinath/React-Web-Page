import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <div>
        <h2 className='contact'>CONTACT</h2>
        <div className='line2'></div>
        <form>
            Name  :<input className='name'></input><br></br>
            Phone :<input className='phone'></input><br></br>
            Mail  :<input className='mail'></input><br></br>
            Feedback : <input className='feedback-box'></input><br></br>
            <button className='submit-button'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact