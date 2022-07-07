import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';



function Team() {

    let {id} = useParams();
    const [Team,setTeam] = useState([]);
    const [TeamInfo,setTeamInfo] = useState([]);

    useEffect( () => {
      axios.get(`https://formula-one-web-app.herokuapp.com/Drivers/teams/${id}`).then((response) => {
        setTeam(response.data);
    })

   

    }, [])
  

    

  return (
    <div className='teamStyle' >
 
      
       {Team.map( (value,key) => {
          return (
          <div style={{paddingTop:"20vh",width:"80%",height:"40vh"}}>
             <p>{value.Drivers[0].Name}</p>
             <p>{value.Drivers[1].Name}</p>
             <p>{value.Drivers[1].Points + value.Drivers[0].Points}</p>
             
             {console.log(value.Drivers[0].Name)}
      
          </div>


           
            
          )
        })}



       
       

      
       

     
        
        </div>
  )
}

export default Team