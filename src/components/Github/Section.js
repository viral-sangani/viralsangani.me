import { media } from './extra'
import styled, { css } from 'styled-components'

const theme = {
    colors: {
        orange: '#f66a0a',
        green: '#28a745',
        blue: '#0070f3',
        lightblue: '#79b8ff',
        lightestBlue: '#c8e1ff',
        offWhite: '#f6f8fa',
        grey: '#6a737d',
        grey2: '#586069',
        black: '#1A1E22',
        darkGrey: '#24292e',
        white: '#FFFFFF',
    },

    fonts: {
        inter:
            'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
        mono:
            'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    },

    transition: `all 0.2s ease-in-out`,
}
const { colors } = theme

const Section = styled.section`
    padding: 3rem 5rem;

    ${media.bp900`
    padding: 2rem;
  `};
    ${media.bp400`
    padding: 1rem;
  `};

    ${(props) =>
        props.dark &&
        css`
            background-color: ${colors.black};
            color: ${colors.lightestBlue};
            padding-bottom: 10rem;
            ${media.bp900`
        padding-top: 2rem;
        padding-bottom: 10rem;
      `};
        `};

    & > div {
        max-width: 1400px;
        margin: 0 auto;
    }

    header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        h2 {
            display: inline-block;
            margin: 0;
            font-size: 1.75rem;
            background-image: linear-gradient(
                90deg,
                #d1d5da 50%,
                hsla(0, 0%, 100%, 0) 0
            );
            background-position: bottom;
            background-repeat: repeat-x;
            background-size: 10px 2px;
            padding-bottom: 6px;
            ${media.bp600`
        font-size: 1.5rem;
      `};
        }
    }
`

export default Section
