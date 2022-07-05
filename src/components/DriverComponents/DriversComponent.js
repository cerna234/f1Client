import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function DriversComponent(props) {


    
    const [allDriversList, allDrivers] = useState([]);
  
    const navigate = useNavigate();
  
  
    useEffect( ()=> {
   
  
    axios.get(`${props.url}`).then( (response) => {
        allDrivers(response.data);
    })
  
  },[])

  

  return (
    <div  className='driverComponentContainer'>
 <div className="TopTenDriversContainer">

<div className="TopTenDrivers">

  {allDriversList.map( (value,key) => {


   return(

   
      <div key={key} className="driverlistContainer"  onClick= {() => {navigate(`/Drivers/driverById/${value.id}`)}}>
        
       <div className="driverListText">
         <div style={{backgroundColor:value.teamColor}} className='teamColor'></div>
         <h2 >{value.Name}</h2>
         <p >{value.Team}</p>
      

       </div>

       <div className="driverStatContainer" >
         
          
       <div className='driverstatInner'>
         <div>
         <p className="DriverStat">{value.Points} PTS</p>

         </div>

         
        
        
       
         </div>
           
       </div>
      
     </div>
   
    
   )
  })}

</div>
</div>
    </div>
  )
}

export default DriversComponent