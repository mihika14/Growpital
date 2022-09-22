import React from "react";
import "../style.css"

const Navbar = () => {
  return (
    <div className="block container">
      <div className="ui secondary menu">
        <div className="left menu">
          GROWPITAL
        </div>
        <a href="/" className="item">
          Home
        </a>
        <a className="item">
          About
        </a>
        <a className="item">
          Service
        </a>
        <a className="item">
          Contact Us
        </a>
        <a href="/Form" className='item'>
          Form
        </a>

        <i className="yellow large bell outline icon"></i>
        <i className="yellow large user circle outline icon"></i>
      
      </div>
    </div>
  )
}

export default Navbar;