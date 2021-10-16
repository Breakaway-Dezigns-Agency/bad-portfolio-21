import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
// import UniversalLink from '../utils/universal-link'
import { NavNotification } from './nav-noti'
import Sticky from '../utils/sticky'
// import PropTypes from 'prop-types'

const SimpleNav = () => {
  const data = useStaticQuery(graphql`
    query SimpleNav {
      logo: file(relativePath: { eq: "bad_temp_logo_w.svg"}) {
        logoUrl: publicURL
      }
    }
  `)
  const { logoUrl } = data.logo

  return (
    <nav className={`z-20 font-nav tracking-widest text-md md:text-lg`}>
        <Sticky>
        {/* <NavNotification /> */}
        <div id="primary" className="primary-nav mx-auto px-8 py-3 shadow-lg absolute w-full">
          <div className="logo">
            <Link to="/" className="flex items-center uppercase font-bold">
              {/* <img
                className="w-32"
                src={logoUrl}
                alt="my logo"
              /> */}
              <span className="md:pl-1 mx-auto md:mx-0">&#123; breakaway dezign &#125;</span>
            </Link>
          </div>
        </div>
      </Sticky>
    </nav>
  )
}

export default SimpleNav