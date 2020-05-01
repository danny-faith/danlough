import styled from '@emotion/styled'
import theme from '../css/theme'

const StyledLogo = styled.div`
    margin-left: ${theme.padding.base};
    width: 15vw;
`

const StyleImage = styled.img`
    height: auto;
    width: 110px;
`

export default () => {
    return (
        <StyledLogo>
            <StyleImage src="/static/logo.png" />
        </StyledLogo>
    )
}
