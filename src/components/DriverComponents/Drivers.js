import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DriversComponent from './DriversComponent';
import { Oval } from 'react-loader-spinner';
import * as Constants from "../../CONSTANTS"



function Drivers() {

  const [driversList, Drivers] = useState([]);
  
  const loader = 
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
  const navigate = useNavigate();


  useEffect( ()=> {

    try{
      axios.get( `${Constants.ENDPOINT_PREFIX}/Drivers/TopDrivers`).then( (response) => {
        Drivers(response.data);
    })

    }catch(error){
        console.log(error);
    }
 


 

},[])




  
  return (
    <div>
      <div className="DriversHeadingContainer">
        <div className="DriverTextContainer">

        <h2 className='titleHeading' style={{color:"white"}}>2022 TOP DRIVERS <br/></h2>
       
        </div>
     
      

      </div>
    
    
    
    <div className='Drivers'>
 
     {

      driversList.length > 0 ?
     
     
     driversList.map( (value,key) => {
       return(
         <div key={key} className='Driver'>
           <div  className='DriverImageContainer' >
             <img className='DriverImg' src={value.Imageurl}></img>
            
          
           </div>
           <div style={{backgroundColor:value.teamColor}} className='slit'>
               

               </div>
          

           <div className='DriverInfo'>

             <div className='DriverInfoInner'>
             <h2>{value.Name}</h2>
             <div style={{width:"100%",display:"flex", justifyContent:'space-between'}}>
             <p style={{color:"rgba(171, 170, 170, 0.774)",fontWeight:"bold",fontFamily:"'Orbitron', sans-serif"}}>{value.Number}</p>
             <p style={{color:"rgba(171, 170, 170, 0.574)",fontWeight:"bold",fontFamily:"'Orbitron', sans-serif"}}>{value.Country}</p>
             

             </div>
             
            
              
          

             </div>
             
        
           </div>

           
         
         </div>
       )
     })
    
    :
    
    loader
    }

     
        
    </div>

    {driversList.length > 0?
    
      <DriversComponent url={`${Constants.ENDPOINT_PREFIX}/Drivers/TopTen`} />
      :

      loader
  }
    
    <div className='allDriversButtonContainer'>
    <Link className='AllDriversButton' to="/allDrivers">All Drivers</Link>

    </div>

   

    </div>
  )
}

export default Drivers