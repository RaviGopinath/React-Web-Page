import React from 'react';
import Props2 from './props2';
import Image1 from '../images/ktm.jfif';
import Image2 from '../images/jawa.webp';
import Image3 from '../images/r15.jpg';
import Image4 from '../images/ninja.webp';
import "./props.css";

const Props = () => {
    var products = [{image : Image1, Model :"KTM", Price : "3.25L" },{image : Image2,Model :"JAWA", Price : "2.75L"},{image : Image3,Model :"R15", Price : "2.5L"},{image : Image4,Model :"NINJA", Price : "10.25L"}]
  return (
    <div>
      <h2>SPECIFICATIONS</h2>
      <div className='line3'></div>
    <div className='propps'>
        {products.map((data) => (
            <Props2 obj = {data} key = {data.value} />
        ))}
    </div>
    </div>
  )
}

export default Props