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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`
  ],
}
