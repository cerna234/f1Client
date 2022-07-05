import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className='footerContainer'>
        <div className='footerInfo'>
        <Link to="/"><img className='logo' src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg'></img></Link>

            <p>2022 Formula One Website</p>

        </div>
    </footer>
  )
}

export default Footer