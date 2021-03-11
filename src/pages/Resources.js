import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = () => (
    <Layout>
        <SEO title="Resources" />
        <h1>Other Organizations</h1>
        <p>ACM: <a href="http://acmatuc.org/">Website</a> | <a href="https://campuslink.uc.edu/organization/acmatuc">Campuslink</a></p>
        <p>NSBE: <a href="http://www.nsbe.uc.edu/">Website</a> | <a href="https://campuslink.uc.edu/organization/national-society-of-black-engineers">Campuslink</a></p>
        <p>WIT: <a href="https://campuslink.uc.edu/organization/women-in-technology">Campuslink</a></p>
        
    </Layout>
)

export default ResourcesPage