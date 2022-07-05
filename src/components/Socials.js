import React from 'react'
import {  FaFacebookF,FaTwitter,FaYoutube,FaInstagram, FaGooglePlay } from "react-icons/fa";


function Socials() {
  return (
    <div className='Socials'>
        <div className='socialsInnerLeft'>
            <div>
            <p>DOWNLOAD THE OFFICAL F1 APP</p>
            </div>
           
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB" ><img className='appLinks' src="https://www.formula1.com/etc/designs/fom-website/images/svg/google-play-badge.svg"></img></a>
            <a target="_blank" href="https://apps.apple.com/gb/app/official-f1-app/id835022598" ><img className='appLinks' src="https://www.formula1.com/etc/designs/fom-website/images/svg/download-on-the-app-store-apple.svg"></img></a>
           
            

        </div>
        <div className='socialsInner'>

        <a target="_blank" href='https://www.facebook.com/Formula1' className='socialsLink'><FaFacebookF/></a>
        <a target="_blank" href="https://twitter.com/f1" className='socialsLink'><FaTwitter/></a>
        <a target="_blank" href="https://www.instagram.com/f1/?hl=en" className='socialsLink'><FaInstagram/></a>
        <a target="_blank" href="https://www.youtube.com/F1" className='socialsLink'><FaYoutube/></a>
          
        </div>
    </div>
  )
}

export default Socials