import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Svg from '../../static/images/main-image.svg'
import AboutMe from '../components/AboutMe'

const Home = (props) => {
    const siteTitle = 'Viral Sangani'
    const projects = props.data.allCosmicjsProjects.edges
    return (
        <Layout>
            <Helmet title={siteTitle} />
            <main className="main">
                <article
                    className="home-container container "
                    style={{ display: 'flex', height: '100vh' }}
                >
                    <div className="home-content">
                        <Main />
                    </div>
                    <div className="home-svg">
                        <Svg style={{ width: '100%' }} />
                    </div>
                </article>
                <article className="container" style={{ display: 'flex' }}>
                    <Projects projects={projects} />
                    <AboutMe />
                </article>
            </main>
        </Layout>
    )
}

export default Home

export const pageQuery = graphql`
    query IndexQuery {
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
        imageSharp {
            fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
