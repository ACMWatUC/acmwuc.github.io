import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MeetingsPage = () => (
    <Layout>
        <SEO title="Meetings - Spring 2021" />
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
                <td><br></br><a href = "https://docs.google.com/presentation/d/1He4XEBMklS8cABcOPS3td9iIMR4da8sPF2UemqmA0cA/edit?usp=sharing">Link to Orientation Meeting Slides</a><br></br><a href = "https://web.microsoftstream.com/video/58c4e2dd-7ac3-455e-88df-df825aa8b96e">Link to Orientation Meeting Recording</a><br></br>Please reach out to Liz Tremblay or Mariam Bahassi for more questions</td>
            </tr>
            <tr>
                <td>Let's Chat #1<br></br>Liz Tremblay (ACM-W)<br></br>Topic: TBD</td>
                <td>Feb 11, 2021 @7PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDc0ZGE3YjgtYzc4YS00OWMxLThjM2YtMTllYWEwMzc2YjBh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%223f96b92b-20a2-4261-ba4b-cf141930e209%22%7d">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Let's Chat #2<br></br>Melanie Mai (SASE)<br></br>Topic: Imposter Syndrome</td>
                <td>Feb 25, 2021 @7PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDc0ZGE3YjgtYzc4YS00OWMxLThjM2YtMTllYWEwMzc2YjBh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%223f96b92b-20a2-4261-ba4b-cf141930e209%22%7d">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Let's Chat #3<br></br>Priya Modgil<br></br>Topic: Developing Professional and Personal Boundaries</td>
                <td>Mar 11, 2021 @7PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDc0ZGE3YjgtYzc4YS00OWMxLThjM2YtMTllYWEwMzc2YjBh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%223f96b92b-20a2-4261-ba4b-cf141930e209%22%7d">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Guide to CS Senior Electives Meeting</td>
                <td>Mar 18, 2021 @6PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2FhMjQyMzQtNDc1Yy00M2E3LTg4NjctYzgyZTU4Nzk4MWRm%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%22eafb8cb7-60f8-4a64-8d25-a00d4ddc50d5%22%7d">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Let's Chat #4<br></br>Jeanette Kootin-Sanwu<br></br>Topic: TBD</td>
                <td>Mar 25, 2021 @7PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDc0ZGE3YjgtYzc4YS00OWMxLThjM2YtMTllYWEwMzc2YjBh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%223f96b92b-20a2-4261-ba4b-cf141930e209%22%7d">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Elections Meeting</td>
                <td>Apr 1, 2021 @6PM</td>
                <td>Coming soon</td>
            </tr>
            <tr>
                <td>Let's Chat #5<br></br>TBD<br></br>Topic: TBD</td>
                <td>Apr 8, 2021 @7PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDc0ZGE3YjgtYzc4YS00OWMxLThjM2YtMTllYWEwMzc2YjBh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%223f96b92b-20a2-4261-ba4b-cf141930e209%22%7d">Link to Teams</a></td>
            </tr>
            <tr>
                <td>Let's Chat #6<br></br>Neha Chawla<br></br>Topic: Reflection</td>
                <td>Apr 22, 2021 @7PM</td>
                <td><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDc0ZGE3YjgtYzc4YS00OWMxLThjM2YtMTllYWEwMzc2YjBh%40thread.v2/0?context=%7b%22Tid%22%3a%22f5222e6c-5fc6-48eb-8f03-73db18203b63%22%2c%22Oid%22%3a%223f96b92b-20a2-4261-ba4b-cf141930e209%22%7d">Link to Teams</a></td>
            </tr>
        </table>
        <p><br></br>Check out our meeting archive here: <a href="https://github.com/ACMWatUC/Archive">/ACMWatUC/Archive</a></p>

        
    </Layout>
)

export default MeetingsPage