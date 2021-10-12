import React from 'react'
import PropTypes from 'prop-types'

const CardWrap = ({ children }) => {
  return(
    <div className="cards-wrap grid grid-cols-1 md:grid-cols-3 md:gap-5">
      { children }
    </div>
  )
}

export default CardWrap

CardWrap.prototype = {
  children: PropTypes.node.isRequired
}