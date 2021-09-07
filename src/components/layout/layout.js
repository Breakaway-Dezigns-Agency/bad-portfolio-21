import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"

const Layout = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <main className={`${className !== '' ? className : ''}`}> */}
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  // className: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout