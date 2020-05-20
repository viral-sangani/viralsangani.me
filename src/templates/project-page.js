import React from 'react'
// import AllProjectList from './AllProjectList'
// import AllProjectAside from './AllProjectAside'
import Layout from '../components/layout'
import ProjectAside from '../components/ProjectHome/ProjectAside'
import ProjectDetail from '../components/ProjectHome/ProjectDetail'

export default function ProjectHome(props) {
    const project = props.data.cosmicjsProjects
    console.log(project)
    return (
        <Layout>
            <main className="main">
                <div className="container mt-xs-20 mt-sm-40 mb-xs-120">
                    <div className="row">
                        <div className="col-xs-12"></div>
                    </div>
                    <div className="row">
                        <ProjectAside
                            year={project.metadata.year}
                            link={project.metadata.project_url}
                            githubLink={project.metadata.github_url}
                            projectTitle={project.title}
                        />
                        <ProjectDetail
                            content={project.metadata.content}
                            image={
                                project.metadata.hero.local.childImageSharp
                                    .fluid
                            }
                            backgroundColor={project.metadata.color_hex}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const pageQuery = graphql`
    query ProjectBySlug($slug: String!) {
        cosmicjsProjects(slug: { eq: $slug }) {
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
                project_url
                year
                color_hex
                tag_line
                content
            }
        }
    }
`
