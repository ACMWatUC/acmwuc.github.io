import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MeetingsPage = () => (
    <Layout>
        <SEO title="Meetings" />
        <h1>Meetings</h1>
        <h2>Next meeting: Sept. 3, 2020</h2>
        <h3>At a meeting right now? Check in: INSERT BUTTON HERE</h3>

        <h3>Check out our meeting archive here: <a href="https://github.com/ACMWatUC/Archive">/ACMWatUC/Archive</a> </h3>
    </Layout>
)

export default MeetingsPage