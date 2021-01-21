import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MeetingsPage = () => (
    <Layout>
        <SEO title="Meetings" />
        <h1>Meetings</h1>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdgEwDXjCa9hjGiGH1i8ToheKNYrOkEJ4hUS_diwBPs8pJmtQ/viewform">Click here to fill out attendance</a></p>
        <table>
            <tr>
                <th>Meetings</th>
                <th>Date</th>
                <th>Link</th>
            </tr>
            <tr>
                <td>Bearcat Coders Intro Meeting</td>
                <td>Jan 21, 2021 @6PM</td>
                <td><a href="http://bit.ly/BCSS21">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Let's Chat #1</td>
                <td>Jan 28, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #2</td>
                <td>Feb 11, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Meeting #2</td>
                <td>Feb 18, 2021 @6PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #3</td>
                <td>Feb 25, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #4</td>
                <td>Mar 11, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Guide to CS Senior Electives Meeting</td>
                <td>Mar 18, 2021 @6PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #5</td>
                <td>Mar 25, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Elections Meeting</td>
                <td>Apr 1, 2021 @6PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #6</td>
                <td>Apr 8, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #7</td>
                <td>Apr 22, 2021 @7PM</td>
                <td>Coming soon</td>
            </tr>
        </table>
        <p><br></br>Check out our meeting archive here: <a href="https://github.com/ACMWatUC/Archive">/ACMWatUC/Archive</a></p>

        
    </Layout>
)

export default MeetingsPage