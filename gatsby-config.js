module.exports = {
  siteMetadata: {
    title: `BAD Portfolio Site`,
    description: `Template site with Componets`,
    image: `./src/images/splat.png`,
    url: `breakawaydezign.com`,
    author: `Brian Garcia`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `font Montserrat`,
        path: `${__dirname}/src/styles/vendor/fonts/Montserrat`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `font Marker`,
        path: `${__dirname}/src/styles/vendor/fonts/Permanent_Marker`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://api.magicthegathering.io/v1/cards',
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-mongodb',
    //   options: {
    //     dbName: 'myFirstDatabase',
    //     collection: 'sample_airbnb',
    //     server: {
    //         address: `testcluster-shard-00-01.f1vrc.mongodb.net`,
    //         port: 27017
    //     },
    //     auth: {
    //         user: 'badtestcluster',
    //         password: 'SimplePass123'
    //     },
    //     extraParams: {
    //         replicaSet: 'testcluster-shard-00-01',
    //         ssl: true,
    //         authSource: 'admin',
    //         retryWrites: true
    //     }
    //   }
    // },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
