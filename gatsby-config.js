module.exports = {
  pathPrefix: `/profile`,
  siteMetadata: {
    title: `  `,
    description: `Gatsby Markdown Personal Website Starter, using Styled Components, Tailwindcss and Framer Motion.`,
    author: `Admin`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "gatsby-remark-code-title",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Online Profile`,
        short_name: `admin`,
        // start_url: `/profile/`,
        // https://github.com/gatsbyjs/gatsby/issues/4966
        //start_url: `/',
        start_url: `.`,
        background_color: `#ed64a6`,
        theme_color: `#ed64a6`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`],
      },
    },
  ],
};
