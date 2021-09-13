import * as React from "react"
import PropTypes from "prop-types"
import SimpleNav from './nav/simple-nav'

const Header = ({ siteTitle }) => {
  return(
    <header>
      <SimpleNav />
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