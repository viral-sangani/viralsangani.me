module.exports = {
    siteMetadata: {
        siteUrl: `https://blog.viralsangani.me`,
    },
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: 'images',
            },
        },
        {
            resolve: 'gatsby-source-cosmicjs',
            options: {
                bucketSlug: '34de5920-96dc-11ea-85dc-25537f7a5e61',
                objectTypes: ['projects'],
                apiAccess: {
                    read_key:
                        'LtKwUj4AapzhcgVUGgoMT9sBzVQkter7B4guK74PW4p8tOQj13',
                },
                localMedia: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-166477510-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Avoids sending pageview hits from custom paths
                pageTransitionDelay: 0,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /static/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-source-rest-api',
            options: {
                endpoints: ['https://api.github.com/users/viral-sangani/repos'],
            },
        },
    ],
}
