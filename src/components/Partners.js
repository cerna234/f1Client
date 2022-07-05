import React from 'react'

import {sponsorsRow1,sponsorsRow2,sponsorsRow3} from './data';
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Partners() {
    
  return (
    <div className='PartnersPage'>
        <div className="PartnersHeading">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1024px-F1.svg.png"/>
          <h2 className="partnersHeadingText" >  Our Partners  </h2>
         
          </div>
      
        <div className="sponsorContainer">
        {sponsorsRow1.map( (value, key) => {
          return <p className="sponsorIcon">{value.name}</p>
        })}
        </div>

        <div className="breakLine"></div>

        <div className="sponsorContainer">
        {sponsorsRow2.map( (value, key) => {
          return <p className="sponsorIcon">{value.name}</p>
        })}
        </div>
        <div className="breakLine"></div>

        <div className="sponsorContainer">
        {sponsorsRow3.map( (value, key) => {
          return <p className="sponsorIcon">{value.name}</p>
        })}
        </div>
        
    </div>
  )
}

export default Partners