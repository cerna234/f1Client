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

    axios.get("https://formula-one-web-app.herokuapp.com/Drivers/teams").then( (response) => {
      setTeams(response.data);
    })

  },[])

  return (
    <div className='teamComponent'>

      <h2 className='titleHeading'>2022 Formula1 Teams <br/> <p className='pageDescription'>View this season's official Formula 1 teams. View the Breakdown of this seasons Teams.</p></h2>
      {teams.map( (value,key) => {
        return(
         
            <div className='TeamContainer' >

          
              <div className='innerTeamContainer' style={{borderLeft:`2px solid ${value.teamColor}`,borderRight:`2px solid ${value.teamColor}`}} onClick= {() => {navigate(`/teams/${value.id}`)}}>
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