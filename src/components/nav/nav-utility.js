import React from 'react'
import { Link } from 'gatsby'
// import UniversalLink from '../utils/universal-link'

export const UtilityNav = () =>{
  // console.log(props);
  return (
    <div id="utility" className="utility-nav hidden lg:block mx-auto px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 py-3">
          <div className="logo">
            <Link to="/" className="flex items-center uppercase font-bold">
              {/* <img
                className="h-20 w-46"
                src={logoUrl}
                alt="my logo"
              /> */}
              <span className="pl-1">logo span</span>
            </Link>
          </div>
        </div>
        <div className="items-center space-x-1 flex">
          utility nav
          <div className="search-bar nav-item px-3">
            <span>Search <i className="icon-search"></i></span>
          </div>
        </div>
      </div>
  </div>
  )
}