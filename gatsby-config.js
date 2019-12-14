module.exports = {
  siteMetadata: {
    title: "Gabriel Atienza Personal Page",
    author: "Gabriel Atienza",
    description: "A Showcase of Gabriel Atienza's works",
    spiel: `
      As a self-taught developer with a background in analysis, 
      I approach things logically and with attention to detail. 
      My experience working with data has drawn me to build the interactions made possible by it. 
      Outside of work, 
      I enjoy being outdoors for camping, cooking and seeing wildlife.`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/bear.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
