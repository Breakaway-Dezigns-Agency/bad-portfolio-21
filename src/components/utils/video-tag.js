import React from 'react'

const VideoTag = ({ src, type, poster, className}) => {
  return (
    <video autoPlay loop muted poster={poster} className={className}>
      <source src={src} type={`video/${type}`} />
    </video>
  )
}

export default VideoTag