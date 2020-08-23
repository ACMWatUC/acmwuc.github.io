import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({data}) => {
    console.log(AboutPage)
    return(
        <Layout>
            <SEO title="About" />
            <h1>Our Mission</h1>
            <p>Our purpose is to <b>increase the recruitment and retention of women in computing</b> at 
                the University of Cincinnati. The number of women in computer science and other 
                fields of computing is falling and we will strive to educate women throughout the 
                pipeline, girls in K-12, undergraduate and graduate students on the benefits of a 
                computing. The organization will aim to align with the university’s diversity campaign 
                and will serve as an outreach organization for current women and also, men in the 
                field of computing.</p>
            <h1>Officers</h1>
            <h4>Sydney O'Connor</h4>
            <h3>President</h3>
            <p>Class: 5th Year<br/>Major: B.S. in Computer Engineering, M.Eng. in Computer Science through ACCEND program<br/>Coops: L3 Technologies, Tesla, Apple</p>
            
            
            <h3>Vice President</h3>
            <h4>Neha Chawla</h4>
            <p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Women, Gender & Sexuality Studies, MBA through ACCEND program<br/>Coops: GE Aviation</p>

            <h3>Treasurer</h3>
            <h4>Jessica Bierl</h4>
            <p>Class: 3rd Year<br/>Major: B.S. in Mechanical Engineering, Minor in Computer Science<br/>Coops: GE Aviation</p>

            <h3>Secretary/Webmaster</h3>
            <h4>Lina Kaval</h4>
            <p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Business Analytics<br/>Coops: The Lubrizol Corporation</p>

            <h3>Community Service Co-Chair</h3>
            <h4>Liz Tremblay</h4>
            <p>Class: 3rd Year<br/>Major: B.S. in Computer Sciencec, Minor in Business Analytics<br/>Coops: 84.51</p>

            <h3>Community Service Co-Chair</h3>
            <h4>Mariam Bahassi</h4>
            <p>Class: 4th Year<br/>Major: B.S. in Information Systems<br/>Coops: Cincinnati Children's Hospital</p>

            <h3>Membership and Outreach</h3>
            <h4>Aashka Raval</h4>
            <p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Political Science<br/>Coops:</p>

            <h3>Advisors</h3>
            <h4>Dr. Rashmi Jha</h4>
            <h4>Brittany Arthur</h4>
        </Layout>
    )
}


export const query = graphql`
  query {
    file (relativePath: {eq: "Sydney O'Connor.jpg"}){
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default AboutPage