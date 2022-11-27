import React from 'react'
import { NavLink } from "react-router-dom"
import {HashLink} from "react-router-hash-link"



const Header = () => {
  return (
 
      <nav>
        <h1>TechStar.</h1>
        <main>
          <HashLink to={"/#home"}>Home</HashLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"/#brands"}>Brands</HashLink>
          <NavLink to={"/services"}>Services</NavLink>


        </main>
      </nav>

    
  )
}

export default Header