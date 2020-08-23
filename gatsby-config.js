module.exports = {
  pathPrefix: "/acmwuc.github.io",
  siteMetadata: {
    title: `ACM-W @ UC`,
    description: `ACM-W @ UC is a women-interest student organization for technology students at the University of Cincinnati.`,
    author: `Lina Kaval`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `About`,
        link: `/About`,
      },
      {
        name: `Get Involved`,
        link: `/GetInvolved`,
      },
      {
        name: `Meetings`,
        link: `/Meetings`,
      },
      {
        name: `Resources`,
        link: `/Resources`,
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
