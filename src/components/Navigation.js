import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import IconButton from '@material-ui/core/IconButton'
import { ThemeContext } from './Context'
import { Switch } from '@material-ui/core'
import { FormGroup, FormControlLabel, Typography } from '@material-ui/core'

const Navigaion = () => {
    const [showHamburger, setShowHamburger] = useState(false)
    const { colorMode, setColorMode } = useContext(ThemeContext)

    const showNav = () => {
        setShowHamburger(true)
    }
    return (
        <div className="page">
            <div
                className={`header-wrapper ${
                    showHamburger && `header-wrapper--show-overlay`
                }`}
                data-component="header"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <header className="header">
                                <div className="header-logo">
                                    <Link
                                        className="header-image link--no-underline"
                                        to="/"
                                    >
                                        <img
                                            className="header-image__img"
                                            src="https://avatars2.githubusercontent.com/u/36530381?s=400&u=c855ebdff9ae53fd8ae4d45d6273c45b06e4f83c&v=4"
                                            alt="Viral Sangani"
                                        />
                                    </Link>
                                    <div className="header-text">
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            className="header-title link--dark link--no-underline"
                                            to="/"
                                        >
                                            Viral Sangani
                                        </Link>
                                        <p className="header-subtitle color-xs-light-gray">
                                            Your Friendly Neighborhood CSE
                                            Student
                                        </p>
                                    </div>
                                </div>
                                <nav className="header-nav">
                                    <ul className="header-nav__list">
                                        <li className="header-nav__item">
                                            <Link
                                                className="header-nav__link"
                                                to="/"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="header-nav__item">
                                            <a
                                                className="header-nav__link"
                                                href="https://blog.viralsangani.me"
                                                target="_blank"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li className="header-nav__item">
                                            <Link
                                                className="header-nav__link"
                                                to="/projects"
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        <li className="header-nav__item hide-xs show-sm">
                                            <a
                                                className="header-nav__link header-nav__link--light link--no-underline "
                                                href="mailto:hey@viralsangani.me"
                                            >
                                                hey@viralsangani.me
                                            </a>
                                        </li>
                                        <li className="header-nav__item hide-xs show-sm">
                                            {colorMode === 'dark' ? (
                                                <IconButton
                                                    aria-label="light"
                                                    style={{
                                                        color:
                                                            'var(--font-color)',
                                                    }}
                                                    onClick={() => {
                                                        setColorMode('light')
                                                    }}
                                                >
                                                    <Brightness7Icon fontSize="large" />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    aria-label="light"
                                                    style={{
                                                        color:
                                                            'var(--font-color)',
                                                    }}
                                                    onClick={() => {
                                                        setColorMode('dark')
                                                    }}
                                                >
                                                    <Brightness4Icon fontSize="large" />
                                                </IconButton>
                                            )}
                                        </li>
                                    </ul>
                                </nav>
                                <button
                                    className="header-hamburger button--reset clickable"
                                    data-header-hamburger
                                    onClick={showNav}
                                >
                                    <svg
                                        className="svg svg--hamburger"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 298 87.011"
                                        enableBackground="new 0 0 298 87.011"
                                        // xml:space="preserve"
                                    >
                                        <rect
                                            x="0"
                                            fill="#282828"
                                            width="298"
                                            height="21.505"
                                        />
                                        <rect
                                            y="65.506"
                                            fill="#282828"
                                            width="298"
                                            height="21.505"
                                        />
                                    </svg>
                                </button>
                            </header>
                        </div>
                    </div>
                </div>
                <div className="header-overlay" data-nav-overlay>
                    <div
                        className="header-overlay__close"
                        data-header-overlay-close
                    >
                        <a
                            className="button button--reset"
                            onClick={() => {
                                setShowHamburger(false)
                            }}
                        >
                            <svg
                                class="clickable"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 327.688 327.681"
                                enable-background="new 0 0 327.688 327.681"
                                // xml:space="preserve"
                            >
                                <path
                                    fill="#231F20"
                                    d="M3.004,324.691c1.997,1.997,4.618,2.99,7.24,2.99s5.243-1.004,7.25-3.001l146.35-146.523l146.35,146.523
          c1.997,2.008,4.618,3.001,7.25,3.001c2.621,0,5.243-1.004,7.239-2.99c4.004-3.993,4.004-10.476,0.011-14.479l-146.207-146.37
          L324.684,17.48c3.994-4.003,3.994-10.485-0.01-14.479c-4.015-4.004-10.486-4.004-14.479,0.01l-146.36,146.524L17.484,3.012
          C13.48-0.992,6.998-0.992,3.004,3.001C-1,6.995-1,13.477,2.994,17.48l146.187,146.361L2.994,310.211
          C-1,314.206-1,320.698,3.004,324.691z"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="header-nav">
                        <ul className="header-nav__list">
                            <li className="header-nav__item">
                                <Link className="header-nav__link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="header-nav__item">
                                <a
                                    className="header-nav__link"
                                    href="https://blog.viralsangani.me"
                                    target="_blank"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="header-nav__item">
                                <Link
                                    className="header-nav__link"
                                    to="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="header-nav__item">
                                <a
                                    className="header-nav__link header-nav__link--light link--no-underline "
                                    href="mailto:hey@viralsangani.me"
                                >
                                    hey@viralsangani.me
                                </a>
                            </li>
                            <li className="header-nav__item">
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={
                                                    colorMode === 'dark'
                                                        ? true
                                                        : false
                                                }
                                                onChange={() =>
                                                    setColorMode(
                                                        colorMode === 'dark'
                                                            ? 'light'
                                                            : 'dark'
                                                    )
                                                }
                                                color="primary"
                                                name="checkedB"
                                                inputProps={{
                                                    'aria-label':
                                                        'primary checkbox',
                                                }}
                                            />
                                        }
                                        label={<p>Dark</p>}
                                    />
                                </FormGroup>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navigaion

//////////////////////////////////////////////////////////////////////////////////
