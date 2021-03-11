import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
      query socialMediaImages{
        facebook: file(relativePath: {eq: "facebook.png"}) {
          id
          childImageSharp {
            fixed (width: 50) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        instagram: file(relativePath: {eq: "instagram.png"}) {
          id
          childImageSharp {
            fixed (width: 50) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        linkedin: file(relativePath: {eq: "linkedin.png"}) {
          id
          childImageSharp {
            fixed (width: 50) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slack: file(relativePath: {eq: "slack.png"}) {
          id
          childImageSharp {
            fixed (width: 50) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  return(
  
  <Layout>
    <SEO title="Home" />
    <h1>Hello World! We are ACM-W @ UC!</h1>
    <p>ACM-W @ UC is a women-interest group for all students who are interested in computing or technology. 
      We host students in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, and Information Technology, however, we are open to everyone!</p>
    <p>As a student organization, we hold events throughout the semester to develop our members! 
      Some of these events are tech-talks, company networking, and socials. 
      We also serve the local community with outreach and mentorship programs.</p>
    <h1>Social Media</h1>
    <div class="row">
      <a href = "https://www.facebook.com/acmwuc"><Img fixed = {data.facebook.childImageSharp.fixed}/></a>
      <a href = "https://www.instagram.com/acmwuc"><Img fixed = {data.instagram.childImageSharp.fixed}/></a>
      <a href = "https://www.linkedin.com/groups/9009000/"><Img fixed = {data.linkedin.childImageSharp.fixed}/></a>
      <a href = "https://www.linkedin.com/groups/9009000/"><Img fixed = {data.slack.childImageSharp.fixed}/></a>
    </div> 
    <br></br>  
  </Layout>)
}

export default IndexPage
