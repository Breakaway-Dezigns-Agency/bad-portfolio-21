import * as React from "react"
import PropTypes from "prop-types"

const Container = ({ className, children }) => {

  return (
    <section className={`max-w-7xl mx-auto p-5 ${className !== '' ? className : ''}`}>
      {children}
    </section>
  )
}

Container.propTypes = {
  className: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Container