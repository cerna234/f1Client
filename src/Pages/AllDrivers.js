import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DriversComponent from '../components/DriverComponents/DriversComponent';
import { Oval } from 'react-loader-spinner';

function AllDrivers() {

  const [allDrivers,setAllDrivers] = useState([]);

  useEffect( () => {
    axios.get("https://formula-one-web-app.herokuapp.com/Drivers/allDrivers").then( (response) => {
        setAllDrivers(response.data);
    })


  },[])
  return (
    <div className='teamPage' style={{flexDirection:"column"}}>
      
      <h2 className='titleHeading' style={{paddingTop:"20vh"}}>2022 Formula1 Teams <br/> <p className='pageDescription'>View this season's official Formula 1 Drivers. View the Breakdown of this seasons Drivers.</p></h2>

      {allDrivers.length > 0 ?

      <DriversComponent url="https://formula-one-web-app.herokuapp.com/Drivers/allDrivers"/>

      :

      <div className='loading'>


       <Oval
         height={80}
         width={80}
         color="red"
         wrapperStyle={{}}
         wrapperClass=""
         visible={true}
         ariaLabel='oval-loading'
         secondaryColor="red"
         strokeWidth={2}
         strokeWidthSecondary={2}
       
       />
       
       </div>
      
    }

    
    </div>
  )
}

export default AllDrivers