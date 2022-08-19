import React from 'react'
import "./imageContent.css";
import  image from "../images/ktm.jfif";
import image1 from "../images/jawa.webp";
import image2 from "../images/r15.jpg";
import image3 from "../images/ninja.webp";

const ImageContent2 = () => {
  return (
    <div>
      <div className='r15-ninja'>
        <div className='r15'>
            <img src={image2} className='r15-img'/><hr></hr>
            <p className='r15-para'>The Yamaha YZF-R15 is a single cylinder sport bike made by Yamaha Motor Company since 2008.[1] In September 2011, the second iteration, called v2 .0, was released in India,[2] and in April 2014 it was released in Indonesia.[3] In January 2017, the third iteration of the bike, called v3.0, was launched in Indonesia.[4]</p>
        </div>
        <div className='ninja'>
            <img src={image3} className='ninja-img'/>
            <p className='ninja-para'>The Kawasaki Ninja is a name given to several series of Kawasaki sport bikes that started with the 1984 GPZ900R. Kawasaki Heavy Industries trademarked a version of the word Ninja in the form of a wordmark, a stylised script, for use on "motorcycles and spare parts thereof".[1]The Kawasaki Ninja is a name given to several series of Kawasaki sport bikes that started with the 1984 GPZ900R. Kawasaki Heavy Industries trademarked a version of the word Ninja </p>
        </div>
      </div>
    </div>
  )
}

const ImageContent = () => {
  return (
    <div>
        <div className='ktm-jawa'>
            <div className='ktm'>
                <img src={image} className='ktm-img'/>
                <p className='ktm-para'>KTM AG (Kraftfahrzeug Trunkenpolz Mattighofen, formerly KTM Sportmotorcycle AG[4][5]) is an Austrian motorcycle, bicycle and sports car manufacturer owned by Pierer Mobility AG & Indian manufacturer Bajaj Auto International Holdings BV. It was formed in 1992 but traces its foundation to as early as 1934. Today, KTM AG is the parent company of the KTM Group, consisting of a number of motorcycle brands.</p>
            </div>
            <div className='jawa'>
                <img src={image1} className='jawa-img'/> 
                <p className='jawa-para'>JAWA (Czech pronunciation: [java]) is a motorcycle and moped manufacturer founded in Prague, Czechoslovakia in 1929 by František Janeček,[2] who bought the motorcycle division of Wanderer. The name JAWA was established by concatenating the first letters of Janeček and Wanderer.[3] In the past, especially in the 1950s, JAWA was one of the top motorcycle manufacturers and exported its 350 model into over 120 countries.[4]</p>
            </div>
        </div>
        <ImageContent2 />
    </div>
  )
}



export default ImageContent