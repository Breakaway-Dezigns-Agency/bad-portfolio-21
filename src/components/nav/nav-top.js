import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import UniversalLink from '../utils/universal-link'
import Sticky from '../utils/sticky'
import { UtilityNav } from './nav-utility'
// import PropTypes from 'prop-types'

const TopNav = () => {
  const data = useStaticQuery(graphql`
    query Navigation{
      logo: file(relativePath: { eq: "bad_logo.svg"}) {
        logoUrl: publicURL
      }
    }
  `)
  const { logoUrl } = data.logo

  return (
      <nav className={`z-20 font-nav tracking-widest text-md md:text-lg`}>
      {/* TOP BAR */}
      <div id="notification" className="top-bar">
        <div className="content max-w-7xl mx-auto p-4 text-center text-sm">
          <p>notification bar <Link to="/">Learn More</Link></p>
        </div>
      </div>
      <UtilityNav />
      {/* PRIMARY */}
      <Sticky>
      <div id="primary" className="primary-nav mx-auto px-8 shadow-lg">
        <div className="hidden lg:flex justify-between">
          <div className="left-nav flex items-center space-x-4 py-3">
            menu here
          </div>
          <div className="right-nav flex items-center space-x-1 py-3">
            secondary menu
          </div>
        </div>
        {/* MOBILE BTN */}
        <div id="mobileBtn" className="menu-btn block lg:hidden grid grid-cols-2 gap-4 items-center space-x-4 py-3">
          <div className="logo">
            <Link to="/" className="flex items-center uppercase font-bold">
              <img
                className="h-20 w-46"
                src={logoUrl}
                alt="IDI logo"
              />
              <span className="pl-1">logo span</span>
            </Link>
          </div>
          {/* <button className="mobile-menu-button justify-self-end" onClick={() => setMobileMenu(!mobileMenu)} onKeyDown={()=> null} tabIndex="0">
            <i className="icon-menu"></i>
          </button> */}
        </div>

        {/* MOBILE */}
        {/* <div id="mobile" className={`mobile-nav flex lg:hidden ${mobileMenu ? 'active' : ''}`}>
          mobile menu
        </div> */}
      </div>
      </Sticky>
    </nav>
  )
}

export default TopNav