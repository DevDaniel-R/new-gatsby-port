import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
// import Abouts from "../components/Abouts"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Quote from "../components/Quote"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Projects title="Featured Projects" projects={projects} />
        <Quote />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default IndexPage
