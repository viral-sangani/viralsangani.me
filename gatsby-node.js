const each = require('lodash/each')
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const indexPage = path.resolve('./src/pages/index.js')
    const projectHome = path.resolve('./src/templates/project-home.js')
    createPage({
        path: `posts`,
        component: indexPage,
    })
    createPage({
        path: `projects/`,
        component: projectHome,
    })

    return new Promise((resolve, reject) => {
        const projectPage = path.resolve('./src/templates/project-page.js')

        resolve(
            graphql(
                `
                    {
                        allMdx(
                            sort: { fields: frontmatter___index, order: DESC }
                        ) {
                            edges {
                                node {
                                    id
                                    frontmatter {
                                        title
                                        slug
                                    }
                                }
                            }
                        }
                    }
                `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                // Create Project pages.
                const projects = result.data.allMdx.edges
                each(projects, (project) => {
                    createPage({
                        path: `projects/${project.node.frontmatter.slug}`,
                        component: projectPage,
                        context: {
                            slug: project.node.frontmatter.slug,
                        },
                    })
                })
            })
        )
    })
}
