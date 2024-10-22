import React from 'react'

const Footer = ({ children }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row mb-xs-40 mb-sm-60">
                    <div className="col-xs-12 col-md-5">
                        <h3>Viral Sangani</h3>
                        <p>
                            <a
                                className="email"
                                href="mailto:viral.sangani2011@gmail.com"
                            >
                                viral.sangani2011@gmail.com
                            </a>
                        </p>
                        <p className="footer-text">
                            I’m a software developer. I can help you solve a
                            problem, build a product or grow existing project.
                        </p>
                    </div>
                </div>
                <div className="row mb-xs-40 mb-ms-80">
                    <div className="col-xs-12 col-sm-6 col-md-4 mb-xs-40">
                        <h4 className="mb-xs-20 mb-sm-40">Menu</h4>
                        <div className="row">
                            <div className="col-xs-8">
                                <ul className="list--reset">
                                    <li>
                                        <a href="https://blog.viralsangani.me">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://viralsangani.me/projects">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <span>&mdash;</span>
                                    </li>
                                    <li>
                                        <a
                                            href="https://hackclub.viralsangani.me"
                                            arget="_blank"
                                            rel="noopener noreferrer"
                                            title="HackClub Profile"
                                        >
                                            HackClub Profile
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-1 mb-xs-40">
                        <h4 className="mb-xs-20 mb-sm-40">Contact</h4>
                        <ul className="list--reset">
                            <li>
                                <a href="mailto:viral.sangani2011@gmail.com">
                                    viral.sangani2011@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://viralsangani.me"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Skype me"
                                >
                                    Skype
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 mb-xs-40">
                        <h4 className="mb-xs-20 mb-sm-40">Online</h4>
                        <ul className="list--reset">
                            <li>
                                <a
                                    href="https://github.com/viral-sangani/"
                                    target="_blank"
                                    title="Look through my Github profile"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/ViralSangani5/"
                                    target="_blank"
                                    title="Look through my Twitter profile"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p
                            className="copyright footer-text"
                            style={{ textAlign: 'center' }}
                        >
                            <span>
                                " Give a man a program, frustrate him for a day.
                                Teach a man to program, frustrate him for a
                                lifetime "
                            </span>
                            <br />
                            Made with ❤️ in ReactJs
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
