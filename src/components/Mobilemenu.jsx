import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Mobilemenu = ({isExpanded}) => {
  const location = useLocation();

  return (
    <div className={`w-full ${isExpanded ? "h-[30vh]" : "h-0 opacity-0"} duration-300 `}>
      <div className="flex flex-col  w-full h-full justify-between  items-center">
            <Link to="/" className={`text-lg flex items-center justify-center w-full h-full ${location.pathname === "/" ? "text-orange-500" : ""}`}>
              Home
            </Link>
            <Link to="/speaker" className={`text-lg flex items-center justify-center w-full h-full ${location.pathname === "/speaker" ? "text-orange-500" : ""}`}>
              Speakers
            </Link>
            <Link to="/aboutus" className={`text-lg flex items-center justify-center w-full h-full ${location.pathname === "/aboutus" ? "text-orange-500" : ""}`}>
              About us
            </Link>
            <Link to="/schedule" className={`text-lg flex items-center justify-center w-full h-full ${location.pathname === "/schedule" ? "text-orange-500" : ""}`}>
              Schedule
            </Link>
            <Link to="/sponser" className={`text-lg flex items-center justify-center w-full h-full ${location.pathname === "/sponser" ? "text-orange-500" : ""}`}>
              Sponsers
            </Link>
            <Link to="/contact" className={`text-lg flex items-center justify-center w-full h-full ${location.pathname === "/contact" ? "text-orange-500" : ""}`}>
              Contacts
            </Link>
          </div>
    </div>
  )
}

export default Mobilemenu
