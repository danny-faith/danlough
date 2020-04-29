import styled from '@emotion/styled'
import Menu from './Menu'
import Logo from './Logo'
import Utilities from './Utilities'

const StyledHeader = styled.div`
    align-items: center;
    /* background-color: rgba(0, 0, 0, 0.05); */
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    z-index: 100;
`

export default (props) => {
    return(
        <StyledHeader>
            <Logo />
            <Menu />
            <Utilities />
        </StyledHeader>
    )
}
