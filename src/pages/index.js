import React from "react"
import Seo from "../components/Seo"

const Home = ( ) =>{
  return (
    <div>
      {/* <Seo/> */}
      <section id="hero" className="hero">
        <video autoplay="" loop="" id="hero-video">
          <source src="/static/media/car_balloon.8609609c.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
          <section className="title">
            <h1 className="mb-n1">Welcome to the <span className="bad">BAD</span></h1>
            <em>Great things are coming!</em>
          </section>
          <p className="linkedin-link">
            <a href="https://www.linkedin.com/in/the-ba-d/?utm_source=linkedin&amp;utm_medium=link&amp;utm_campaign=linkedinLogo"></a>
          </p>
      </section>
    </div>
  )
}

export default Home;