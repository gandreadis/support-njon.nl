module.exports = {
  siteMetadata: {
    title: `Support NJON`,
    description: `Campagne voor de NJON naar aanleiding van negatief fonds-advies`,
    author: `@geoandreadis`,
    siteUrl: `https://support-njon.nl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/public/intl`,
        languages: [`en`, `nl`],
        defaultLanguage: `nl`,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["PETITION_COUNT"]
      },
    },
  ],
}
