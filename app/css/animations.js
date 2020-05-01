import { css } from '@emotion/core'

const animations = css`
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

    .page-transition-enter {
        opacity: 0;
    }

    .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }

    .page-transition-exit {
        opacity: 1;
    }

    .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`

export default animations
