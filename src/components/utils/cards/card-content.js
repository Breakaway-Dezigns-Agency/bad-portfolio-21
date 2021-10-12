import React from 'react'
import PropTypes from 'prop-types'

const CardContent = ({ children }) => {
  return(
    <div className="card-content rounded-xl">
      { children }
    </div>
  )
}

CardContent.prototype = {
  children: PropTypes.node
}

export default CardContent