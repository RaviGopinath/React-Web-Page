import React from 'react';
import "./body.css";


const Contents = () => {
    return (
      <div>
              <h2>ABOUT</h2>
              <div className='line'></div>
              <p>
              A motorcycle, often called a motorbike, bike, cycle, or (if three-wheeled) trike, is a two- or three-wheeled motor vehicle.[1][2][3] Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding. Motorcycling is riding a motorcycle and being involved in other related social activity such as joining a motorcycle club and attending motorcycle rallies.
              </p>
          </div>
    )
  }
  

const Body = () => {
  return (
    <div>
        <div className='image'>
            <button>START</button>
        </div>
        <Contents />
        
    </div>
  )
}




export default Body