import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Svg from '../../static/images/main-image.svg'
import AboutMe from '../components/AboutMe'
import Github from '../components/Github/Github'

const Home = (props) => {
    const siteTitle = 'Viral Sangani'
    const projects = props.data.allMdx.edges
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
                    <Github />
                </article>
            </main>
        </Layout>
    )
}

export default Home

export const pageQuery = graphql`
    query IndexQuery {
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
