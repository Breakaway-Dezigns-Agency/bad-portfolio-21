import React from "react"
import Layout from "../components/layout/layout"
import Container from "../components/layout/container"
import ContainerFull from "../components/layout/container-full"
import Seo from "../components/Seo"
import Footer from "../components/footer"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo />
      <ContainerFull className="not-found-wrap h-screen bg-blue-deep relative">
        <Container className="not-found-content absolute top-1/2 left-1/2 text-center">
          <h1>This looks bad</h1>
          <span className="giant-text">4 0 4</span>
          <p>Sorry! Apperantly this page does not exist.</p>
        </Container>
      </ContainerFull>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
