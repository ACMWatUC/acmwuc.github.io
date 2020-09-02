import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MeetingsPage = () => (
    <Layout>
        <SEO title="Meetings" />
        <h1>Meetings</h1>
        <h2>Next meeting: Sept. 3, 2020 @ 6pm</h2>
        <h3>Meeting link: <a href="https://ucinnstudents.webex.com/ucinnstudents/j.php?MTID=mb5d27726a5582eba95dba54041d31582">Click here for Webex link</a></h3>
        <p>Meeting number: 172 633 2165 | Password: acmwuc</p>
        <h3>Meeting attendance: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgEwDXjCa9hjGiGH1i8ToheKNYrOkEJ4hUS_diwBPs8pJmtQ/viewform">Click here to fill out attendance</a></h3>
        <h3>Check out our meeting archive here: <a href="https://github.com/ACMWatUC/Archive">/ACMWatUC/Archive</a> </h3>
    </Layout>
)

export default MeetingsPage