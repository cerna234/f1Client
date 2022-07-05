import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";

function Teams() {

  const [teams,setTeams] = useState([]);
  const [teamId, setTeamId] = useState(0);
  const [drivernames, setDriverNames] = useState([]);


  const navigate = useNavigate();

  useEffect( () => {

    axios.get("http://localhost:3002/Drivers/teams").then( (response) => {
      setTeams(response.data);
    })



    

   

  },[])

  return (
    <div className='teamComponent'>

      <h2 className='titleHeading'>2022 Formula1 Teams</h2>
      {teams.map( (value,key) => {
        return(
         
            <div className='TeamContainer' >

              <div className='innerTeamContainer' style={{borderLeft:`2px solid ${value.teamColor}`,borderRight:`2px solid ${value.teamColor}`}} onClick= {() => {navigate(`/driversNames/${value.id}`)}}>
              <p>{value.teamName}</p>
             
              <img className='TeamlogoStyling' src={value.teamLogo}></img>

              </div>
              

            </div>
          

          
         
        )
      })}

      
    </div>
  )
}

export default Teams