import React from 'react'
// import AllProjectList from './AllProjectList'
// import AllProjectAside from './AllProjectAside'
import Layout from '../components/layout'
import ProjectAside from '../components/ProjectHome/ProjectAside'
import { graphql } from 'gatsby'
import ProjectDetail from '../components/ProjectHome/ProjectDetail'

export default function ProjectHome(props) {
    const project = props.data.mdx
    console.log(
        'project',
        project.frontmatter.featuredImage.childImageSharp.fluid
    )
    return (
        <Layout>
            <main className="main">
                <div className="container mt-xs-20 mt-sm-40 mb-xs-120">
                    <div className="row">
                        <div className="col-xs-12"></div>
                    </div>
                    <div className="row">
                        <ProjectAside
                            year={project.frontmatter.year}
                            link={project.frontmatter.project_url}
                            githubLink={project.frontmatter.github_url}
                            projectTitle={project.frontmatter.title}
                        />
                        <ProjectDetail
                            content={project.frontmatter.content}
                            image={
                                project.frontmatter.featuredImage
                                    .childImageSharp.fluid
                            }
                            backgroundColor={project.frontmatter.color_hex}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const pageQuery = graphql`
    query MyQuery($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            frontmatter {
                color_hex
                github_url
                index
                isRecentWork
                project_url
                slug
                tagLine
                title
                year
                content
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
