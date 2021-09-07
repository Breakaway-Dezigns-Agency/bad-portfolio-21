import * as React from "react"
import PropTypes from "prop-types"
import TopNav from "./nav/nav-top"

const Header = ({ siteTitle }) => {
  return(
    <header>
      <TopNav/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header