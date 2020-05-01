import { css } from '@emotion/core'
import theme from './theme'
import reset from './reset'

const global = css`
    @font-face {
        font-family: 'Lato';
        src: 'url(\'/fonts/Lato-Regular.ttf\') format(\'truetype\'), url(\'/fonts/Lato-Bold.ttf\') format(\'truetype\')';
    }
    ${reset}

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html {
        background-color: ${theme.colors.siteBackground};
        box-sizing: border-box;
        color: ${theme.colors.primary};
        font-size: 16px;
    }

    html, body {
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }

    a {
        color: ${theme.colors.accent}
    }

    p {
        color: '#ccc !important'
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 3rem;
    }

    h2 {
        font-size: 1.8rem;
        line-height: 2.8rem;
    }

    h3 {
        font-size: 1.6rem;
        line-height: 2.6rem;
    }

    .my-node-enter {
        opacity: 0;
    }

    .my-node-enter-active {
        opacity: 1;
        transition: opacity 2000ms;
    }

    .my-node-exit {
        opacity: 1;
    }

    .my-node-exit-active {
        opacity: 0;
        transition: opacity 2000ms;
    }
`

export default global
