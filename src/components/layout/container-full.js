import * as React from "react"
import PropTypes from "prop-types"

const ContainerFull = ({ className, children }) => {

  return (
    <section className={`max-w-full mx-auto ${className !== '' ? className : ''}`}>
      {children}
    </section>
  )
}

ContainerFull.propTypes = {
  className: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default ContainerFull