import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

export default function ProjectCard({ project }) {
    return (
        <React.Fragment>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-xs-80 mb-sm-40">
                <figure className="image" data-component="image">
                    <Link
                        className="image__content h-xs-300 h-md-400"
                        to={`/projects/${project.frontmatter.slug}/`}
                    >
                        <Img
                            Tag="div"
                            className="image__bgimg"
                            fluid={
                                project.frontmatter.featuredImage
                                    .childImageSharp.fluid
                            }
                            backgroundColor={project.frontmatter.color_hex}
                        />
                        <div
                            className="image__overlay"
                            style={{
                                backgroundColor: project.frontmatter.color_hex,
                            }}
                        >
                            <h3 className="h4 image__overlay__title">
                                {project.frontmatter.title}
                                <br />
                                &mdash;
                            </h3>
                            <p className="image__overlay__text">
                                {project.frontmatter.tagLine}
                            </p>
                        </div>
                    </Link>
                    <figcaption className="image__title show-sm hide-md">
                        <h3 className="image__title__text">
                            <a
                                className="link--dark link--no-underline"
                                href="projects/vhi-health-quiz.html"
                            >
                                {project.frontmatter.title}
                            </a>
                        </h3>
                        <p className="image__title__subtitle">
                            {project.frontmatter.tagLine}
                        </p>
                    </figcaption>
                </figure>
            </div>
        </React.Fragment>
    )
}
