import React from "react"
import Layout from "../components/layout/layout";
import Container from "../components/layout/container";
import ContainerFull from "../components/layout/container-full";
import Seo from "../components/Seo"
import Footer from "../components/footer";

const Home = ( ) =>{
  return (
    <Layout className="">
      <Seo />
      <Container className="text-center">
        <h1>Hello there!</h1>
      </Container>
      <ContainerFull className="text-center">
        <h1>Hello there!</h1>
      </ContainerFull>
      <Footer />
    </Layout>
  )
}

export default Home;