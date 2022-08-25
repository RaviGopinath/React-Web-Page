import React from 'react'
import "./props.css";

const Props2 = (gopi) => {
  return (
    <div>
        <img src={gopi.obj.image} />
        <span className='spans'>MODEL :{gopi.obj.Model}</span><br></br>
        <span className='spans'>PRICE :{gopi.obj.Price}</span>
    </div>
  )
}

export default Props2