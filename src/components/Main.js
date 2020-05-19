import React from 'react'
import { Spring } from 'react-spring/renderprops'

function renderMain() {
    return (
        <section
            className="hero main-name__title"
            data-component="hero"
            style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
            }}
        >
            <h1 className="hero__title ">Hola, I'm Viral Sangani.</h1>
            <p className="hero__subtitle ">
                Your Friendly Neighborhood CSE Student
            </p>

            <div className="hero__text main-text">
                <h1 className="large ">
                    I can solve
                    <Spring
                        from={{
                            opacity: 1,
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                        to={{
                            opacity: 0.45,
                            textDecoration: 'line-through',
                        }}
                        config={{ delay: 7500 }}
                    >
                        {(props) => (
                            <div style={props}>
                                <span className="none">
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                        }}
                                        to={{
                                            opacity: 0.5,
                                            textDecoration: 'line-through',
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 2500,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <span className="all">
                                                    &nbsp;all&nbsp;
                                                </span>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            display: 'none',
                                        }}
                                        to={{
                                            opacity: 1,
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 2500,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <Spring
                                                    from={{
                                                        opacity: 1,
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                    }}
                                                    to={{
                                                        opacity: 0.5,
                                                        textDecoration:
                                                            'line-through',
                                                        display: 'inline-block',
                                                    }}
                                                    config={{
                                                        delay: 5000,
                                                    }}
                                                >
                                                    {(props) => (
                                                        <div style={props}>
                                                            <span className="all">
                                                                &nbsp;some&nbsp;
                                                            </span>
                                                        </div>
                                                    )}
                                                </Spring>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            display: 'none',
                                        }}
                                        to={{
                                            opacity: 1,
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 5000,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <Spring
                                                    from={{
                                                        opacity: 1,
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                    }}
                                                    to={{
                                                        opacity: 0.5,
                                                        textDecoration:
                                                            'line-through',
                                                        display: 'inline-block',
                                                    }}
                                                    config={{
                                                        delay: 7500,
                                                    }}
                                                >
                                                    {(props) => (
                                                        <div style={props}>
                                                            <span className="all">
                                                                &nbsp;one&nbsp;
                                                            </span>
                                                        </div>
                                                    )}
                                                </Spring>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                        }}
                                        to={{
                                            opacity: 0.5,
                                            textDecoration: 'line-through',
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 7500,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <span className="all">
                                                    of your
                                                </span>
                                            </div>
                                        )}
                                    </Spring>
                                </span>
                            </div>
                        )}
                    </Spring>
                    &nbsp;problems
                    <Spring
                        from={{
                            opacity: 1,
                            display: 'none',
                        }}
                        to={{
                            opacity: 1,
                            display: 'inline-block',
                        }}
                        config={{
                            delay: 7700,
                        }}
                    >
                        {(props) => (
                            <div style={props}>
                                <span>&nbsp;, ok?&nbsp;</span>
                            </div>
                        )}
                    </Spring>
                    {/* <br />
                        <br /> */}
                    {/* I build, automate &amp; sometimes rescue applications.
                        <br />
                        Have a project or idea you'd like to discuss? Let's chat{' '}
                        <br />
                        <a
                            className="link--underline"
                            href="mailto:hey@viralsangani.me"
                        >
                            hey@viralsangani.me
                        </a> */}
                </h1>
            </div>
            <div className="btn-wrapper">
                <div className="btn">
                    <button id="button" type="button">
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

const Main = () => {
    return renderMain()
}

export default Main
