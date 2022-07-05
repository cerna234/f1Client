import React from 'react'
import Navbar from './Navbar'
import "../App.css"
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {newsData} from "../components/data"
import { useState } from 'react';

function Landing() {


  
  let [index, setindex] = useState(0);
  

  const right = () => {
    
      if(index < newsData.length -1 ){
        setindex(index + 1);

      }
      else{
        
     
      }
  }
 
  const left = () => {

    if(index >= 1  ){
      setindex(index - 1);

    }
    else{
      
    }
  }

  

 
  return (
    <div className='LandingPage'>


      
       
    {newsData.map( (value,key) => {
      return (

        <div className='landingInfoContainer' style={{backgroundImage: `url(${value.Img})` }}>

          <div className='landingInfo'>
          <p className='topic'>{value.Topic}</p>
          <h2>{value.Title}</h2>
          <h3>{value.Subtext}</h3>
          

          </div>
          
          
          
          <div className='arowButtons'>

            <div className='innerArrowButtons'>
            <button className='arrows' onClick={() =>  left()}> <MdOutlineKeyboardArrowLeft/> </button>
           <button className='arrows' onClick={() => right()}> <MdOutlineKeyboardArrowRight/> </button>

            </div>
         

        </div>

          
          
        </div>

        
       
      )
    })[index]}






  
        
      
        
    </div>
  )
}

export default Landing