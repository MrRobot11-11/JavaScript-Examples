module.exports = {
  siteMetadata: {
    title: `X-Blog`,
    description: `The Truth is Out There`,
    author: `Fox Mulder`,
    contact: {
      name: `Fox Mulder`,
      company: `F.B.I.`,
      address: `123 Fake Street`
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jveh17a09zzl`,
        accessToken: `bOmxiMXkp2wkUCynH3OeQf5RpZMGqhegZn4ojcI6c64`
      }
    },
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
