import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Svg from '../../static/images/main-image.svg'
import AboutMe from '../components/AboutMe'
import Github from '../components/Github/Github'
// import GithubGraph from '../components/Github/GithubGraph'
import SEO from '../components/Seo'

const Home = (props) => {
    const siteTitle = 'Viral Sangani'

    const projects = props.data.allMdx.edges
    return (
        <div class="curved-div">
            <Layout>
                <SEO title={siteTitle} />
                <main className="main">
                    <article
                        className="home-container container"
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
                        {/* <Github /> */}
                        {/* <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: " 'center",
                            }}
                        > */}
                        {/* <GithubGraph /> */}
                        {/* </div> */}
                    </article>
                </main>
            </Layout>
        </div>
    )
}

export default Home

export const pageQuery = graphql`
    query IndexQuery {
        allMdx(sort: { fields: frontmatter___index, order: ASC }) {
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
                                fluid(quality: 100, maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
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
