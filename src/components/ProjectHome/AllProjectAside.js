import React from 'react'
import { Link } from 'gatsby'

export default function AllProjectAside({ projectList }) {
    return (
        <aside className="sidebar col-xs-12 col-md-3" data-component="sidebar">
            <div className="row">
                <div
                    className="sidebar-content col-xs-12"
                    data-project-sidebar-dropdown
                >
                    <div className="row">
                        <div className="col-xs-12 mb-xs-40 mb-md-60">
                            <nav className="filters" data-component="filters">
                                <ul className="filters__list">
                                    <li className="filters__list__item">
                                        <p>Featured Projects</p>
                                    </li>
                                    {projectList.map(({ node }) => (
                                        <li className="filters__list__item">
                                            <Link
                                                to={`/projects/${node.frontmatter.slug}`}
                                                className={`filters__list__link link--no-underline`}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {node.frontmatter.title} -{' '}
                                                {node.frontmatter.year}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
