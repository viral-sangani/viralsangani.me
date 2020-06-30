import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

export default function AllProjectList({ projectList }) {
    return (
        <React.Fragment>
            <div className="col-xs-12 col-md-9">
                <div className="row">
                    {projectList.map(({ node }) => {
                        console.log(node)
                        return (
                            <div
                                className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-xs-40 mb-md-80"
                                key={node.frontmatter.id}
                            >
                                <figure
                                    className="image"
                                    data-component="image"
                                >
                                    <Link
                                        className="image__content h-xs-400"
                                        to={`/projects/${node.frontmatter.slug}/`}
                                    >
                                        <Img
                                            Tag="div"
                                            className="image__bgimg"
                                            fluid={
                                                node.frontmatter.featuredImage
                                                    .childImageSharp.fluid
                                            }
                                            backgroundColor={
                                                node.frontmatter.color_hex
                                            }
                                        />
                                        <div
                                            className="image__overlay"
                                            style={{
                                                backgroundColor:
                                                    node.frontmatter.color_hex,
                                            }}
                                        >
                                            <h3>
                                                {node.frontmatter.year}
                                                <br />
                                                &mdash;
                                            </h3>
                                            <ul></ul>
                                        </div>
                                    </Link>
                                    <figcaption className="image__title">
                                        <h3 className="image__title__text">
                                            <a
                                                className="link--dark link--no-underline"
                                                href="projects/feral.html"
                                            >
                                                {node.frontmatter.title}
                                            </a>
                                        </h3>
                                        <h4 className="image__title__subtitle">
                                            {node.frontmatter.tagLine}
                                        </h4>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}
