import React, { useState } from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {FaDownload } from "react-icons/fa";

import { Desktop } from '../responsive';


import { GiHamburgerMenu } from "react-icons/gi";
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: red;

    
    
`

const Logo = styled.div`
padding: 0.5rem 0.5rem;
${Desktop({padding:" 2rem 7rem"})};
font-weight: bold;

a{
    color: "red";
    text-decoration: none;
}
@media (max-width:1100px) {
    display: flex;
    z-index: ${({isOpen}) => (isOpen ? "100" : "100")};
    font-size: 16px;
    
    
}
`

const Hamburger = styled.div`
display: flex;
flex-direction: column;
cursor: pointer;
color: white;
font-size: 20px;
padding: 0 2rem;
display: none;
@media (max-width:1100px) {
    display: flex;
    z-index: ${({isOpen}) => (isOpen ? "100" : "100")};
    
    
}
`


const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
a{
 
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-family: 'Orbitron', sans-serif;
   
    font-weight: 700;
    padding: 1rem 1rem;
}
a:hover{
   
        color: "red";
        border-bottom: solid 2px "red";; ;
        transition: ease-in-out 0.5s;
        padding: none;
}
@media (max-width:1100px) {
    width: 100%;
    flex-direction: column;
    background: red;
    transition: ease-in-out 1s;
    position: relative;
    justify-content: center;
    
    height: ${({isOpen}) => (isOpen ? "110vh" : "0vh")};
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
    bottom: ${({isOpen}) => (isOpen ? "20vh" : "20px")};
    
    
}
`

const MenuLinks = styled.div`
    padding: 1rem 2rem;
 
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    
 
.Link{
    font-size: 16px;
}
   
    
  
    
`

const NavBar = () => {

    

    const [isOpen, setIsOpen] = useState(false);
    


    return (
        
       <Nav>
           
           <Logo  
           > 
                <Link to="/"><img className='logo' src='https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg'></img></Link>
           </Logo>
           <Hamburger onClick={() => setIsOpen(!isOpen) }>
               <GiHamburgerMenu/>
           </Hamburger>
           <Menu isOpen={isOpen}>
               
               
               <MenuLinks onClick={() => setIsOpen(!isOpen)}><Link className='Link' to="/">HOME</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link className='Link' to="/allDrivers">DRIVERS</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link className='Link' to="/teams">TEAMS</Link></MenuLinks>
               <MenuLinks onClick={() => setIsOpen(!isOpen)}> <Link className='Link' to="/Circuits">CIRCUITS</Link></MenuLinks>
               
               

              
           </Menu>

       </Nav>
    )
}

export default NavBar