import React from 'react'

const AboutMe = () => {
    return (
        <main className="main">
            <article
                className="home-container container "
                style={{ display: 'flex', height: '80vh' }}
            >
                <div className="aboutme">
                    <div className="wrap">
                        <p
                            href="#"
                            className="underlined underlined--offset"
                            style={{ fontSize: '2em' }}
                        >
                            About Me
                        </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p>
                            I build, automate &amp; sometimes rescue
                            applications.
                        </p>
                        <p>
                            If you have a project that you want to get started,
                            think you need my help with something or just fancy
                            saying hey, then get in touch.
                        </p>
                        <br />
                        <a
                            className="link--underline"
                            href="mailto:hey@viralsangani.me"
                        >
                            hey@viralsangani.me
                        </a>
                    </div>
                </div>
                <div className="aboutme">
                    <div className="wrap">
                        <p
                            href="#"
                            className="underlined underlined--offset"
                            style={{ fontSize: '2em' }}
                        >
                            This is my system
                        </p>
                    </div>
                    <ul>
                        <li>
                            <p>Pursue Passions, Not Paychecks</p>
                        </li>
                        <li>
                            <p>Learn Every Day</p>
                        </li>
                        <li>
                            <p>Believe in Change</p>
                        </li>
                        <li>
                            <p>Invest in Ideas That Matter</p>
                        </li>
                        <li>
                            <p>Be Lazy and Dumb</p>
                        </li>
                    </ul>
                </div>
            </article>
        </main>
    )
}

export default AboutMe
