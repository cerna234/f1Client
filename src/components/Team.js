import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';



function Team() {

    let {id} = useParams();
    const [Team,setTeam] = useState([]);
    

    useEffect( () => {
      axios.get(`https://formula-one-web-app.herokuapp.com/Drivers/teams/${id}`).then((response) => {
        setTeam(response.data);
    })

   

    }, [])
  

    console.log(Team)
    

  return (
    <div  className='teamStyle' >
 
      
       {Team.map( (value,key) => {
          return (
            <div className='driverPage'>

           
       
            <div className='driverPageImageContainer'>
              <div style={{backgroundColor:"rgb(8,8,8,0)"}} className='driverPageImage'>
                  <img className='DriverPageImg' style={{height:"200px",width:"250px",boxShadow:"none"}} src={value.teamLogo}/>
                    
                
              </div>
        
              <p>{value.teamName}</p>
            </div>
            <div className='driverPageInfo'>
        
        
              <div className='driverPageInfoContainer'>
                <h2>Drivers: </h2>
                <p>{value.Drivers[0].Name}, {value.Drivers[1].Name}</p>
            
        
              </div>
              
        
             
        
              <div className='driverPageInfoContainer'>
              <h2>Points: </h2>
              <p>{value.Drivers[1].Points + value.Drivers[0].Points}</p>
        
        
              </div>
        
              <div className='driverPageInfoContainer'>
                <h2>Country: </h2>
                <p>{value.teamCountry}</p>
        
              </div>
        
              <div className='driverPageInfoContainer'>
              <h2>Year Founded: </h2>
              <p>{value.founded}</p>
        
        
        
              </div>
              <h3 className='driverPageNumber'>{value.teamName}</h3>
        
              
             
            
              
           
             
             
              
            </div>
           
        
            </div>

          


           
            
          )
        })}



       
       

      
       

     
        
        </div>
  )
}

export default Team