import React, { useEffect, useState } from 'react'
import AllProjectList from '../components/ProjectHome/AllProjectList'
import AllProjectAside from '../components/ProjectHome/AllProjectAside'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ProjectHome = (props) => {
    const projects = props.data.allMdx.edges
    return (
        <Layout>
            <main className="main">
                <div className="container mt-xs-20 mt-md-80 mb-xs-80">
                    <div className="row">
                        <AllProjectAside projectList={projects} />
                        <AllProjectList projectList={projects} />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ProjectHome

export const pageQuery = graphql`
    query ProjectQuery {
        allMdx(sort: { fields: frontmatter___index, order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        index
                        tagLine
                        year
                        featuredImage {
                            childImageSharp {
                                fluid(quality: 90, maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        slug
                        github_url
                        project_url
                        isRecentWork
                        color_hex
                    }
                }
            }
        }
    }
`
