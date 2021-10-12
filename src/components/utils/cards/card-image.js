import React from 'react'

const CardImage = ({imgSrc, imgAlt}) => {
  return(
    <div className="card-image">
      <img src={imgSrc} alt={imgAlt} />
    </div>
  )
}

export default CardImage