import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Driver() {

    let {id} = useParams();

    const [driverInfo, setDriverInfo] = useState({});
    const [teamInfo, setTeamInfo] = useState({});
   
  

    useEffect( () => {
        axios.get(`https://formula-one-web-app.herokuapp.com/Drivers/driverById/${id}`).then( (response) => {
          setDriverInfo(response.data);

          

          
         
           
        }, []).catch(error => {
          console.log(error.response)
        })

    },[])




   
  return (
    <div className='driverPage'>
       
    <div className='driverPageImageContainer'>
      <div className='driverPageImage'>
          <img className='DriverPageImg' src={driverInfo.Imageurl}/>
            
        
      </div>

      <p>{driverInfo.Name}</p>
    </div>
    <div className='driverPageInfo'>


      <div className='driverPageInfoContainer'>
        <h2>Number: </h2>
        <p>{driverInfo.Number}</p>

      </div>
      

     

      <div className='driverPageInfoContainer'>
      <h2>Podiums: </h2>
      <p>{driverInfo.podiums}</p>


      </div>

      <div className='driverPageInfoContainer'>
        <h2>Country: </h2>
        <p>{driverInfo.Country}</p>

      </div>

      <div className='driverPageInfoContainer'>
      <h2>Age: </h2>
      <p>{driverInfo.Age}</p>



      </div>
      <h3 className='driverPageNumber'>{driverInfo.Number}</h3>

      
     
    
      
   
     
     
      
    </div>
   

    </div>
  )
}

export default Driver