import React from "react"
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";
import ContainerFull from "../components/layout/container-full";
import Seo from "../components/Seo"
import Footer from "../components/footer";
import VideoTag from "../components/utils/video-tag";

import floatSvg from "../images/dots_updated.svg"
import animLogoFront from "../images/bad-front-logo.png"
import animLogoBack from "../images/bad-back-logo.png"
import heroVid from "../videos/hero_vid.mp4"

const Home = ( ) =>{
  return (
    <Layout className="homepage-wrap">
      <Seo />
      <ContainerFull className="hero-wrap">
        <VideoTag
          className="hero-video object-cover w-full"
          // poster="https://www.w3schools.com/images/w3schools_green.jpg"
          src={heroVid}
          type="mp4"
        />
        <div className="title">
          <div className="top">Welcome to the <span className="bad">bad</span></div>
          <div className="bot">&#123; great things are here! &#125;</div>
        </div>
      </ContainerFull>
      <ContainerFull className="about-wrap">
        <div id="float-1" style={{backgroundImage: `url(${floatSvg})`}}></div>
        <div className="about-content max-w-3xl mx-auto px-10 pb-14 pt-40 md:pt-20">
          <div id="about">
            <h1>Web Developer</h1>
            <p>Since 2013 not to be presumptuous, but I really enjoy coding. I try to be at the forefront of technology. I am a logic individual that wants to Breakaway from the scheme of things, I believe I have a purpose and it's to become a Full-Stack Developer that breaksthroughs with new ideas and development.</p>
            <p>But that is not all, technology is growing everyday, security is key and that is why I am stacking to my skill set Network Security & IT.</p>
            <em className="block mt-10">“90% of what is considered "impossible" is, in fact, possible. The other 10% will become possible with the passage of time & technology.”<br/><span className="block text-right">-Hideo Kojima</span></em>
          </div>
          <div id="logo-anim" className="mx-auto h-52">
              <img className="h-52 absolute animate-spin-slow mx-auto" src={`${animLogoBack}`} alt="" />
              <img className="h-52 absolute" src={`${animLogoFront}`} alt="" />
          </div>
          <div id="skills" className="block text-right max-w-md ml-auto">
            <h2>skills</h2>
            <ul>
              <li>GatsbyJs</li>
              <li>React</li>
              <li>NodeJs</li>
              <li>PHP</li>
              <li>Drupal</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>SASS</li>
              <li>Tailwind CSS</li>
              <li>JAM Stack</li>
              <li>LAMP Stack</li>
              <li>REST API</li>
              <li>Shopify API</li>
              <li>Liquid/Twig</li>
              <li>SQL &amp; no-SQL</li>
              <li>Digital Ocean</li>
              <li>Ubuntu</li>
              <li>Much more...</li>
            </ul>
          </div>
        </div>
      </ContainerFull>
      <ContainerFull className="sites-wrap bg-blue-deep">
        <Container className="sites-content">
          <div className="max-w-md mx-auto text-center text-white">
            <h2>websites</h2>
          </div>
        </Container>
      </ContainerFull>
      <ContainerFull className="projects-wrap">
        <Container className="projects-content">
          <div className="max-w-md mx-auto text-center">
            <h2>in-works projects</h2>
          </div>
        </Container>
      </ContainerFull>
      <Footer />
    </Layout>
  )
}

export default Home;