import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import * as Constants from "../CONSTANTS"


function Teams() {

  const [teams,setTeams] = useState([]);
  const [teamId, setTeamId] = useState(0);
  const [drivernames, setDriverNames] = useState([]);


  const navigate = useNavigate();

  useEffect( () => {

    axios.get(`${Constants.ENDPOINT_PREFIX}/Drivers/teams`).then( (response) => {
      setTeams(response.data);
    })

  },[])

  return (
    <div className='teamComponent'>

      <h2 className='titleHeading'>2022 Formula1 Teams <br/> <p className='pageDescription'>View this season's official Formula 1 teams. View the Breakdown of this seasons Teams.</p></h2>
      {


      teams.length > 0 ?
      
      
      teams.map( (value,key) => {
        return(
         
            <div className='TeamContainer' >

          
              <div className='innerTeamContainer' style={{borderLeft:`2px solid ${value.teamColor}`,borderRight:`2px solid ${value.teamColor}`}} onClick= {() => {navigate(`/teams/${value.id}`)}}>
              <p>{value.teamName}</p>
             
              <img className='TeamlogoStyling' src={value.teamLogo}></img>

              </div>
              

            </div>
          

          
         
        )
      })

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

export default Teams