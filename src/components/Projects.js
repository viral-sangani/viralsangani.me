import React from 'react'
import ProjectCard from './ProjectHome/ProjectCard'
import { Link } from 'gatsby'

const Projects = ({ projects }) => {
    return (
        <React.Fragment>
            <aside />
            <div className="row mb-xs-20 mb-sm-40" id="recent-projects">
                <div className="col-xs-12">
                    <header className="section-header">
                        <h2 className="section-header__title">Recent Work</h2>
                        <p className="section-header__link">
                            <small>
                                <Link className="link--dark" to="/projects">
                                    View All
                                </Link>
                            </small>
                        </p>
                    </header>
                </div>
            </div>
            <div className="row mb-xs-60 mb-md-80">
                {projects.map(({ node }) => (
                    <ProjectCard key={node.id} project={node} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Projects
