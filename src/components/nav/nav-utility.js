import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import UniversalLink from '../utils/universal-link'

export const UtilityNav = () =>{
  const data = useStaticQuery(graphql`
    query NavigationUtility{
      logo: file(relativePath: { eq: "bad_logo.svg"}) {
        logoUrl: publicURL
      }
    }
  `)
  const { logoUrl } = data.logo
  return (
    <div id="utility" className="utility-nav hidden lg:block mx-auto px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 py-3">
          <div className="logo">
            <Link to="/" className="flex items-center uppercase font-bold">
              <img
                className="h-20 w-46"
                src={logoUrl}
                alt="my logo"
              />
              <span className="pl-1">logo span</span>
            </Link>
          </div>
        </div>
        <div className="items-center space-x-1 flex">
          utility nav
        </div>
      </div>
  </div>
  )
}