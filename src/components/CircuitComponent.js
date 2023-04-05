import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Oval } from 'react-loader-spinner';
import * as Constants from "../CONSTANTS"

function CircuitComponent() {

    const [circuitsList,setCircuits] = useState([]);


    useEffect( () => {
        axios.get(`${Constants.ENDPOINT_PREFIX}/Circuits`).then( (response) => {
            setCircuits(response.data);
        })
    }, [])


    
    
  return (
    <div className='circuitsContainer'>
        <h2 className='titleHeading' style={{color:"white"}}>2022 Circuits <br/> <p className='pageDescription' style={{color:"white"}}>View this season's official Formula 1 teams. View the Breakdown of this seasons Teams.</p></h2>
       {

        circuitsList.length > 0 ?
       
       circuitsList.map( (value, key) => {




        return(
           <div key={key} className='circuitContainer'>
                <div className='circuitContainerInner'>
                
                    <div className='circuitInfoContainer'>
                        <div className='imageContainerCircuits'>

                            <div className='circuitTitleContainer'>
                                <h2 className='circuitTitle'>{value.CircuitName}</h2>
                                <h3 className='circuitTitleSub'>2022</h3>

                            </div>
                            
                            <img className='circuitImage' src={value.CircuitIMG}/>

                        </div>
                        <div className='circuitInfo'>
                            <div className='circuitInfoInner'>
                            
                                <p>{value.CircuitLocation}</p>
                            </div>
                            
                            <p style={{fontWeight:"bold", fontFamily:"  'Orbitron', sans-serif"}}>{value.CircuitDate}</p>
                          

                    
                            


                        </div>

                    </div>
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

export default CircuitComponent


