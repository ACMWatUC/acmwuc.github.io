import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You managed to click on a bad link :( </p>
    <p>Please contact <a href="mailto:kavalla@mail.uc.edu">kavalla@mail.uc.edu</a> if this link was supposed to lead to something.</p>
  </Layout>
)

export default NotFoundPage
