import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
    console.log(AboutPage)
    const data = useStaticQuery(graphql`
      query Images{
        president: file(relativePath: {eq: "Sydney O'Connor.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vice: file(relativePath: {eq: "Neha Chawla.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        treasurer: file(relativePath: {eq: "Jessica Beirl.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        webmaster: file(relativePath: {eq: "Lina Kaval.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        community1: file(relativePath: {eq: "Liz Tremblay.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        community2: file(relativePath: {eq: "Mariam Bahassi.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        membership: file(relativePath: {eq: "Aashka Raval.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        advisor1: file(relativePath: {eq: "Rashmi Jha.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        advisor2: file(relativePath: {eq: "Brittany Arthur.jpg"}) {
          id
          childImageSharp {
            fixed (width: 200) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    console.log(data)

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
            <table>
              <tr>
                <td><h3>President</h3><h4>Sydney O'Connor</h4></td>
                <td><p>Class: 5th Year<br/>Major: B.S. in Computer Engineering, M.Eng. in Computer Science through ACCEND program<br/>Coops: L3 Technologies, Tesla, Apple</p></td>
                <td><Img fixed = {data.president.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Vice President</h3><h4>Neha Chawla</h4></td>
                <td><p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Women, Gender & Sexuality Studies, MBA through ACCEND program<br/>Coops: GE Aviation</p></td>
                <td><Img fixed = {data.vice.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Treasurer</h3><h4>Jessica Bierl</h4></td>
                <td><p>Class: 3rd Year<br/>Major: B.S. in Mechanical Engineering, Minor in Computer Science<br/>Coops: GE Aviation, L3Harris Techonologies</p></td>
                <td><Img fixed = {data.treasurer.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Secretary/Webmaster</h3><h4>Lina Kaval</h4></td>
                <td><p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Business Analytics<br/>Coops: The Lubrizol Corporation, Ellington Management Group</p></td>
                <td><Img fixed = {data.webmaster.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Community Service Co-Chair</h3><h4>Liz Tremblay</h4></td>
                <td><p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Business Analytics<br/>Coops: 84.51</p></td>
                <td><Img fixed = {data.community1.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Community Service Co-Chair</h3><h4>Mariam Bahassi</h4></td>
                <td><p>Class: 4th Year<br/>Major: B.S. in Information Systems<br/>Coops: Cincinnati Children's Hospital</p></td>
                <td><Img fixed = {data.community2.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Membership and Outreach</h3><h4>Aashka Raval</h4></td>
                <td><p>Class: 3rd Year<br/>Major: B.S. in Computer Science, Minor in Political Science<br/>Coops:</p></td>
                <td><Img fixed = {data.membership.childImageSharp.fixed}/></td>
              </tr>
              <h1><br></br>Advisors</h1>
              <tr>
                <td><h3>Advisor</h3><h4>Dr. Rashmi Jha</h4></td>
                <td><p>Professor, EECS</p></td>
                <td><Img fixed = {data.advisor1.childImageSharp.fixed}/></td>
              </tr>
              <tr>
                <td><h3>Advisor</h3><h4>Brittany Arthur</h4></td>
                <td><p>Assistant Professor, Computer Engineering Co-op Advisor</p></td>
                <td><Img fixed = {data.advisor2.childImageSharp.fixed}/></td>
              </tr>
            </table>
        </Layout>
    )
}

export default AboutPage