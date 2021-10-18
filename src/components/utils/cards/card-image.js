import React from 'react'
import Img from 'gatsby-image'

const CardImage = ({imgSrc, imgAlt}) => {
  return(
    <div className="card-image">
      <Img fluid={imgSrc} alt={imgAlt}/>
      {/* <img src={imgSrc} alt={imgAlt} /> */}
    </div>
  )
}

export default CardImage