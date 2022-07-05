import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DriversComponent from '../components/DriverComponents/DriversComponent';

function AllDrivers() {

  const [allDrivers,setAllDrivers] = useState([]);

  useEffect( () => {
    axios.get("https://formula-one-web-app.herokuapp.com//Drivers/allDrivers").then( (response) => {
        setAllDrivers(response.data);
    })


  },[])
  return (
    <div className='allDriversPage'>
      <h2 className='titleHeading'>2022 All Drivers</h2>
      <DriversComponent url="https://formula-one-web-app.herokuapp.com/2/Drivers/allDrivers"/>
    </div>
  )
}

export default AllDrivers