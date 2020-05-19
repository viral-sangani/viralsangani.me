import React, { useEffect, useState } from 'react'
import AllProjectList from '../components/ProjectHome/AllProjectList'
import AllProjectAside from '../components/ProjectHome/AllProjectAside'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ProjectHome = (props) => {
    const projects = props.data.allCosmicjsProjects.edges
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
    query AllProjectQuery {
        allCosmicjsProjects {
            edges {
                node {
                    title
                    slug
                    id
                    metadata {
                        hero {
                            local {
                                childImageSharp {
                                    fluid(quality: 90, maxWidth: 1920) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                        github_url
                        content
                        project_url
                        year
                        color_hex
                        tag_line
                    }
                }
            }
        }
    }
`
