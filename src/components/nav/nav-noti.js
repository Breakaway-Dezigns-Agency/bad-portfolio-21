import React from 'react'
import { Link } from 'gatsby'

export const NavNotification = () => {
  return(
    <div id="notification" className="top-bar bg-yellow-200 border-b-2 shadow-md">
      <div className="content max-w-7xl mx-auto p-3 text-center text-sm">
        <p>notification bar <Link to="/">Learn More</Link></p>
      </div>
    </div>
  )
}