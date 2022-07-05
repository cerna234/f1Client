import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';



function Team() {

    let {id} = useParams();
    const [Team,setTeam] = useState([]);
    const [TeamInfo,setTeamInfo] = useState([]);

    useEffect( () => {
      axios.get(`https://formula-one-web-app.herokuapp.com/Drivers/driversNames/${id}`).then((response) => {
        setTeam(response.data);
    })

    axios.get(`https://formula-one-web-app.herokuapp.com/Drivers/teamById/${id}`).then((response) => {
        setTeamInfo(response.data);
    })

    }, [])
  

    

  return (
    <div className='teamStyle' >
 

  
<div className='section'>
  
       {TeamInfo.map( (value,key) => {
          return (
            <div>
              <img className='teamLogo' src={value.teamLogo}></img>
              <p style={{color:value.teamColor,fontWeight:"bold"}}>{value.teamName}</p>
            </div>
          )
        })}

       </div>

       
       <div className='section'>
       {Team.map( (value,key) => {
          return (
          
            <div className='driverPageInfo'>
              
            
            <div className='driverPageInfoContainer'>
            <h2>DRIVERS: </h2>
            <p>{value.DriverNames}</p>
            
      
            </div>

            <div className='driverPageInfoContainer'>
            <h2>POINTS: </h2>
            <p>{value.driverPoints}</p>
      
            </div>
            <div className='driverPageInfoContainer'>
            <h2>PODIUMS: </h2>
            <p>{value.driverPodiums}</p>
      
            </div>

           
      
          
          </div>
            
          )
        })}

{TeamInfo.map( (value,key) => {
          return (
          
            <div className='driverPageInfo'>
               <h3 className='driverPageNumber' style={{fontSize:"300px"}}>{value.teamName}</h3>
           

            <div className='driverPageInfoContainer'>
            <h2>COUNTRY: </h2>
            <p>{value.teamCountry}</p>
            
         
          
      
            </div>
            <div className='driverPageInfoContainer'>
            <h2>FOUNDED: </h2>
            <p>{value.founded}</p>
      
            </div>
      
          
          </div>
            
          )
        })}

       </div>
       

      
       

     
        
        </div>
  )
}

export default Team