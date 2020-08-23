import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World! We are ACM-W @ UC!</h1>
    <p>ACM-W @ UC is a women-interest group for all students who are interested in computing or technology. 
      We host students in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, and Information Technology, however, we are open to everyone!</p>
    <p>As a student organization, we hold events throughout the semester to develop our members! 
      Some of these events are tech-talks, company networking, and socials. 
      We also serve the local community with outreach and mentorship programs.</p>
  </Layout>
)

export default IndexPage
