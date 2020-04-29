import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import LazyImage from './LazyImage'

const StyleFullPage = styled.div`
    background-color: ${props => props.theme.colors.primary};
    height: 100vh;
    overflow: hidden;
    width: 100vw;
`

const ShadowOverlay = styled.div`
    box-shadow: inset 0px 0px 200px rgba(0, 0, 0, 0.8);
    height: 100vh;
    position: absolute;
    width: 100vw;
    z-index: 50;
`

const FullPage = (props) => {
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0,
    })
    return (
        <StyleFullPage ref={ref}>
            <ShadowOverlay />
            <LazyImage width="100" height="100" src={`/static/${props.src}`} />
        </StyleFullPage>
    )
}

export default (props) => {
    return <FullPage src={props.src} />
}
