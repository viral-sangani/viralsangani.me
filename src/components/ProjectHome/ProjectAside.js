import React from 'react'
const aside = ({ year, link, githubLink, projectTitle }) => {
    return (
        <aside className="sidebar col-xs-12 col-md-3" data-component="sidebar">
            <div className="row">
                <div className="col-xs-12 mb-xs-40 mb-md-60">
                    <header className="project-header">
                        <h1 className="project-header__title h4">
                            {projectTitle}
                        </h1>
                        {/* <div
							className="project-header__icon"
							data-project-sidebar-toggle
						>
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								viewBox="0.645 8.129 30.711 15.742"
								enable-background="new 0.645 8.129 30.711 15.742"
								xml:space="preserve"
							>
								<polygon points="0.645,10.383 16,23.871 31.355,10.383 29.375,8.129 16,19.878 2.625,8.129 " />
							</svg>
						</div> */}
                    </header>
                </div>
                <div className="col-xs-12" data-project-sidebar-dropdown>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-40 mb-md-60">
                            <div className="filters filters--open filters--small">
                                <div className="filters__header">
                                    <h3 className="filters__title">Year</h3>
                                </div>
                                <ul className="filters__list">
                                    <li className="filters__list__item">
                                        <span className="filters__list__link">
                                            {year}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {link && (
                            <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-40 mb-md-60">
                                <div className="filters filters--open filters--small">
                                    <div className="filters__header">
                                        <h3 className="filters__title">Link</h3>
                                    </div>
                                    <ul className="filters__list">
                                        <li className="filters__list__item">
                                            <a
                                                className="filters__list__link"
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {githubLink && (
                            <div className="col-xs-12 col-sm-6 col-md-12 mb-xs-40 mb-md-60">
                                <div className="filters filters--open filters--small">
                                    <div className="filters__header">
                                        <h3 className="filters__title">
                                            Github Link
                                        </h3>
                                    </div>
                                    <ul className="filters__list">
                                        <li className="filters__list__item">
                                            <a
                                                className="filters__list__link"
                                                href={githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {githubLink}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default aside
