import React from 'react'
import UniversalLink from '../universal-link'

const CardBody = ({cardTitle, cardtext, linkTar, linkRel, linkUrl, linkText}) => {
  return(
    <div className="card-text">
      <div className="title">{cardTitle}</div>
      <div className="text">{cardtext}</div>
      <UniversalLink className="link" target={linkTar} rel={linkRel} to={linkUrl}>{linkText}</UniversalLink>
    </div>
  )
}

export default CardBody