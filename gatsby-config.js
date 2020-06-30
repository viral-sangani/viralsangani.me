module.exports = {
    siteMetadata: {
        siteUrl: `https://viralsangani.me`,
    },
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-mdx`,
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'viralsangani.me',
                protocol: 'https',
                hostname: 'www.viralsangani.me',
            },
        },
        {
            resolve: 'gatsby-plugin-zopfli',
            options: {
                extensions: ['css', 'html', 'js', 'svg'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/projects`,
                name: `blog`,
            },
        },
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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-166477510-1',
                head: false,
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
