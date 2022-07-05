import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function CircuitComponent() {

    const [circuitsList,setCircuits] = useState([]);


    useEffect( () => {
        axios.get("https://formula-one-web-app.herokuapp.com/Circuits").then( (response) => {
            setCircuits(response.data);
        })
    }, [])


    
  return (
    <div className='circuitsContainer'>
        <h2 className='titleHeading' style={{color:"white"}}>2022 Circuits</h2>
       {circuitsList.map( (value, key) => {



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
                            
                                <p>{value.CircuitName}</p>
                            </div>
                            <p>{value.cu}</p>


                        </div>

                    </div>
                </div>
           </div>
        )
       })}
    </div>
  )
}

export default CircuitComponent


